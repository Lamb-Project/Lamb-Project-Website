// Disposable local-LMS smoke test. This sends a prompt and an 8/10 test grade.
// npm install --save-dev playwright && npx playwright install chromium
import fs from 'node:fs';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
const required = ['TOOL_ORIGIN', 'TEACHER_LAUNCH', 'STUDENT_LAUNCH', 'ASSISTANT_MODEL'];
for (const name of required) if (!process.env[name]) throw new Error(`Set ${name}`);
const tool = new URL(process.env.TOOL_ORIGIN).origin;
const teacherURL = new URL(process.env.TEACHER_LAUNCH);
const studentURL = new URL(process.env.STUDENT_LAUNCH);
if (teacherURL.origin !== studentURL.origin) throw new Error('Use the same test LMS');
const artifacts = process.env.ARTIFACTS_DIR || 'artifacts';
fs.mkdirSync(artifacts, { recursive: true });
const results = [];
function check(name, ok) {
  results.push({ name, ok });
  console.log(`${ok ? 'PASS' : 'FAIL'} ${name}`);
  if (!ok) throw new Error(name);
}
const browser = await chromium.launch({ headless: true });
try {
  const instructor = await browser.newContext();
  const learner = await browser.newContext();
  const page = await instructor.newPage();
  await page.goto(teacherURL.href);
  await page.waitForURL(url => url.origin === tool);
  check('Signed instructor launch', /\/(setup|dashboard)$/.test(new URL(page.url()).pathname));
  if (new URL(page.url()).pathname === '/dashboard') await page.getByText('edit setup').click();
  await page.locator('select[name=assistant_model]').selectOption(process.env.ASSISTANT_MODEL);
  check('Configured key can see selected assistant', true);
  await page.locator('input[name=title]').fill('Disposable LAMB smoke test');
  await page.locator('input[name=grading_enabled]').check();
  await page.locator('button[type=submit]').click();
  await page.waitForURL('**/dashboard**');
  check('Activity setup saved', true);

  const student = await learner.newPage();
  await student.goto(studentURL.href);
  await student.waitForURL('**/chat**');
  check('Signed learner launch', new URL(student.url()).origin === tool);
  await student.locator('#msg').fill('Synthetic integration test. In one short sentence, what can you help a learner do?');
  const pending = student.waitForResponse(r => new URL(r.url()).pathname === '/chat/send', { timeout: 180000 });
  await student.locator('#chat-form button[type=submit]').click();
  const response = await pending;
  const transportError = await response.finished();
  const reply = (await student.locator('.msg.assistant').last().innerText()).trim();
  check('Completed streamed answer', response.ok() && !transportError && reply.length > 0 && !reply.startsWith('[error'));
  await student.screenshot({ path: `${artifacts}/student.png`, fullPage: true });
  await student.goto(studentURL.href);
  await student.waitForURL('**/chat**');
  check('Conversation survives relaunch', (await student.locator('.msg.assistant').last().innerText()).trim() === reply);

  // Explicit header handles browsers that reject the local Secure cookie.
  const session = await student.evaluate(() => window.SESSION_TOKEN);
  const denied = await learner.request.get(`${tool}/dashboard`, { headers: { 'X-Session-Token': session } });
  check('Learner cannot open instructor dashboard', denied.status() === 403);
  await page.goto(teacherURL.href);
  await page.waitForURL('**/dashboard**');
  const rows = page.locator('tr[data-user]');
  check('One synthetic learner in this disposable placement', await rows.count() === 1);
  const row = rows.first();
  await row.locator('.score').fill('8');
  await row.locator('.feedback').fill('Synthetic smoke-test grade.');
  await row.locator('button.save').click();
  await row.locator('.status').filter({ hasText: 'saved' }).waitFor();
  await page.locator('#send-all').click();
  await page.locator('#send-result').filter({ hasText: 'Sent 1. Failed 0.' }).waitFor();
  check('Mock LMS accepted grade return', true);
  await page.screenshot({ path: `${artifacts}/instructor.png`, fullPage: true });
  const invalid = await instructor.request.post(`${tool}/lti/launch`, { form: { user_id: 'forged', roles: 'Instructor' } });
  check('Unsigned launch rejected', invalid.status() === 401);
  console.log('Finish by checking the test LMS Grades page: expected normalized score 0.8.');
} finally {
  fs.writeFileSync(`${artifacts}/results.json`, JSON.stringify(results, null, 2));
  await browser.close();
}
