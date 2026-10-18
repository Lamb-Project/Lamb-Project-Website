# LAMB website redesign (0.8 proposal)

A proposed new LAMB website, in English, built with Hugo and the Hextra theme. It lives in this folder on the `redesign-0.8` branch so it can be reviewed and changed without touching the current site: the site at the repository root and its GitHub Pages deployment (which runs only on pushes to `main`) are unchanged.

Review copy: **https://wasabi.essi.upc.edu/lamb-website/** (updated by Marc's side; it may lag this branch).

## Run it

Requires Hugo extended 0.146.0 or later (tested with 0.155.1) and Python 3.

```bash
bash redesign/preview.sh
```

Open http://localhost:18910/en/. `setup.py` downloads the pinned Hextra v0.13.0 archive from its official repository, checks its SHA-256 and installs it under `site/themes/` (ignored by Git). `serve.py` serves `site/public/` on loopback only and tells the browser not to cache, so replaced images show at once. To rebuild while the server runs:

```bash
hugo --source redesign/site --minify --destination public
```

Note for a later merge: the repository's deployment workflow pins Hugo 0.139.0, which is too old for this theme. Merging means updating that workflow and deciding how this folder replaces the current site.

## Where things are

- `site/content/en/`: the pages, Markdown with front matter (`title`, `description`, `translationKey`, `weight`). English only for now; Spanish, Catalan and Basque are planned, and `translationKey` links the future translations.
- `site/content/en/guides/0.8/`: the illustrated 0.8 guides. Old guide addresses redirect through `aliases`.
- `site/layouts/`: homepage, footer and shortcodes. `contact-link` renders nothing while `site/data/contact.yaml` has no recipients (the contact addresses are hidden for now, at Marc's request).
- `site/static/images/guides/`: real screenshots of LAMB 0.8 with synthetic data. `screenshot-manifest.json` records each one's capture date, product version, deployed revision and SHA-256.
- `site/static/llms.txt`: the reading index for AI agents.

## Rules the content follows

1. Describe what LAMB 0.8 actually does. Every feature claim should be checkable in the LAMB code; say "depends on the installation" when it does.
2. Screenshots are real captures from a running LAMB 0.8 with synthetic accounts and data. Never edit, mock or generate product UI, and never show a credential, a real name or a real email.
3. Moodle integration uses standard LTI 1.1 and standard Moodle web services only. Do not document or suggest any Moodle plugin or Moodle-side code.
4. No em-dashes in the text. One `#` heading per page (the title); sections use `##`.
5. The Safe AI page (`safe-ai.md`) is not legal advice and says so. Keep legal statements tied to their sources and dates.
6. The pages carry `noindex`: this is a proposal, not the published site.

## Status

Prepared by Marc Alier's workshop (Dick, the LAMB documentation agent) for review by Juanan Pereira, 17 October 2026. Two further guides, connecting LAMB and Moodle, and working with LAMB LEGATUS, are being written and checked and will be added to this branch.

## Language editions

Since 18 October 2026 the site has four editions: English (`content/en/`, the source), Spanish (`content/es/`), Catalan (`content/ca/`) and Basque (`content/eu/`). Each page has the same `translationKey` and path in every edition. Rules for a translated page:

- Every `##`/`###` heading carries the English heading's id as `{#english-id}`, so cross-page and cross-language anchors keep working.
- Internal links use the edition's prefix (`/es/…`); `src` and email `subject` values stay as in English.
- Bold interface labels use LAMB's own string from `frontend/*/src/lib/locales/<lang>.json` when it exists, otherwise the English label shown on screen.
- Layout and shortcode text comes from `site/i18n/<lang>.yaml`; Catalan uses the typographic apostrophe (the theme puts some strings inside single-quoted JavaScript).
- A change to an English page must reach the three other editions. `verify.mjs` checks every edition; the journeys run on `/en/`.

The Basque edition was machine-translated and reviewed by a model; it needs a native reader. Screenshots and the last-mile diagram are in English in every edition.
