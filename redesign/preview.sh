#!/usr/bin/env bash
set -euo pipefail
task_dir="$(cd "$(dirname "$0")" && pwd)"
python3 "$task_dir/setup.py"
hugo --source "$task_dir/site" --minify --destination public --cacheDir "$task_dir/runtime/hugo-cache"
exec python3 "$task_dir/serve.py" 18910
