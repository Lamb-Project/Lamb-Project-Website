# LAMB website

Source of **https://lamb-project.org/**, the website of LAMB (Learning Assistants Manager and Builder), in English, Spanish, Catalan and Basque. Built with Hugo and the Hextra theme; every push to `main` is deployed to GitHub Pages by `.github/workflows/hugo.yml`.

The previous website (Hugo Book theme, 2025 to September 2026) is kept unchanged on the branch **`old-website-deprecated`**. It is a backup and is no longer deployed.

## Run it

Requires Hugo extended 0.146.0 or later (the deployment uses 0.155.1) and Python 3.

```bash
bash preview.sh
```

Open http://localhost:18910/en/. `setup.py` downloads the pinned Hextra v0.13.0 archive from its official repository, checks its SHA-256 and installs it under `site/themes/` (ignored by Git). `serve.py` serves `site/public/` on loopback only and tells the browser not to cache, so replaced images show at once. To rebuild while the server runs:

```bash
hugo --source site --minify --destination public
```

## Official and review builds

`site/hugo.yaml` alone builds a **review copy**: every page carries `noindex` and `robots.txt` disallows crawlers, so a preview or a copy on another server is never indexed in place of the official site. The deployment adds `site/official.yaml` (`--config hugo.yaml,official.yaml`), which sets the `lamb-project.org` address, lifts `noindex`, publishes a `robots.txt` with the sitemap and switches the footer label from "Review copy" to "Preview documentation". The workflow refuses to deploy if a page still carries `noindex` or a file listed below is missing.

## Addresses that must keep working

- `site/static/news/news_<lang>.md`: LAMB's Creator fetches its news panel from `https://lamb-project.org/news/` (`LAMB_NEWS_HOME` in the backend). Edit these files to change the news every LAMB installation shows; do not move them.
- Every address of the previous website redirects to its new page. Language editions use `aliases` in the page front matter (for example `/en/tutorial/`, `/en/manual/`, `/en/tool-template/`, `/<lang>/roadmap/`). The old Spanish addresses without a language prefix (`/tutorial/`, `/manual/`, `/developers/`, `/roadmap/`, `/blog/` …) are small redirect pages under `site/static/`.
- `/images/lamb_1.png`, `/images/lamb_icon.png`, `/favicon.ico` and the tool-template smoke test (`/en/tool-template/smoke-test.mjs`) stay for pages elsewhere that link to them. The old manual and tool-template screenshots and the old RSS feeds are not carried over; they are on the backup branch.
- The deployment copies `en/404.html` to the root, because GitHub Pages serves a custom 404 only from `/404.html`. The root address `/` now opens the English edition (the old root was Spanish).
- The blog post of 4 November 2025 is kept in all four languages under `site/content/<lang>/blog/`, as it was published, with a dated note.

## Where things are

- `site/content/<lang>/`: the pages, Markdown with front matter (`title`, `description`, `translationKey`, `weight`). English is the source.
- `site/content/<lang>/guides/0.8/`: the illustrated 0.8 guides. Old guide addresses redirect through `aliases`.
- `site/layouts/`: homepage, footer and shortcodes. `site/i18n/<lang>.yaml`: layout and shortcode text.
- `site/data/documentation.yaml`: the documented version and its status; `site/data/contact.yaml`: the contact mailbox.
- `site/static/images/guides/`: real screenshots of LAMB 0.8 with synthetic data. `screenshot-manifest.json` records each one's capture date, product version, deployed revision and SHA-256.
- `site/static/llms.txt`: the reading index for AI agents.

## Rules the content follows

1. Describe what LAMB actually does in the documented version. Every feature claim should be checkable in the LAMB code; say "depends on the installation" when it does.
2. Screenshots are real captures from a running LAMB with synthetic accounts and data. Never edit, mock or generate product UI, and never show a credential, a real name or a real email.
3. Moodle integration uses standard LTI 1.1 and standard Moodle web services only. Do not document or suggest any Moodle plugin or Moodle-side code.
4. No em-dashes in the text. One `#` heading per page (the title); sections use `##`.
5. The Safe AI page (`safe-ai.md`) is not legal advice and says so. Keep legal statements tied to their sources and dates.
6. LAMB 0.8 is documented as a release candidate (`status: "Preview"` in `site/data/documentation.yaml`) until it is tagged. When it is, change the status and the wording on the availability and guides pages in all four languages.

## Language editions

The site has four editions: English (`content/en/`, the source), Spanish (`content/es/`), Catalan (`content/ca/`) and Basque (`content/eu/`). Each page has the same `translationKey` and path in every edition. Rules for a translated page:

- Every `##`/`###` heading carries the English heading's id as `{#english-id}`, so cross-page and cross-language anchors keep working.
- Internal links use the edition's prefix (`/es/…`); `src` and email `subject` values stay as in English.
- Bold interface labels use LAMB's own string from `frontend/*/src/lib/locales/<lang>.json` when it exists, otherwise the English label shown on screen.
- Layout and shortcode text comes from `site/i18n/<lang>.yaml`; Catalan uses the typographic apostrophe (the theme puts some strings inside single-quoted JavaScript).
- A change to an English page must reach the three other editions.

The Basque edition was machine-translated and reviewed by a model; it needs a native reader. Screenshots and the last-mile diagram are in English in every edition.

## History

Prepared in Marc Alier's workshop (Dick, the LAMB documentation agent) and reviewed on the `redesign-0.8` branch with Juanan Pereira from 17 October 2026; promoted to `main` and lamb-project.org on 19 October 2026.
