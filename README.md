# Lamb-Project-Website
This repo will host the github-pages for the Lamb Project

## Local development

The `hugo-book` theme is a git submodule — a plain `git clone` leaves `themes/hugo-book/` empty and `hugo` will fail with `template for shortcode "button" not found`. Clone with submodules, or fix an existing clone:

```bash
git clone --recurse-submodules git@github.com:Lamb-Project/Lamb-Project-Website.git
# or, if already cloned:
git submodule update --init --recursive
```

Then `hugo server` to preview, or `hugo --minify` to build (matches the GitHub Actions workflow in `.github/workflows/hugo.yml`).
