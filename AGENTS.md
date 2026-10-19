# Agents working on the LAMB website

This repository is the official website: every push to `main` is published at https://lamb-project.org/. Read [README.md](README.md) first, in particular "Rules the content follows" and "Addresses that must keep working".

- Propose changes on a branch or pull request unless the maintainers ask you to push to `main`.
- Build with `bash preview.sh` and check that every page still builds before committing. To see the official build, add `--config hugo.yaml,official.yaml`; never put `official.yaml`'s settings into `hugo.yaml`.
- Do not move or delete `site/static/news/`, the redirect pages under `site/static/` or the `aliases` in page front matter.
- Leave the branch `old-website-deprecated` as it is: it is the backup of the previous site.
