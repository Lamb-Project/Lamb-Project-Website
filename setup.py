#!/usr/bin/env python3
"""Install the pinned official Hextra archive locally; no Git or global changes."""
import hashlib, io, os, pathlib, tarfile, urllib.request
root=pathlib.Path(__file__).resolve().parent
revision='adf732f8d97cb8e149d4aba232a449d41cd9e38c'
expected='b1ea7893a46f70b922d5c6a5c4daf164d6d1a7d0be162ea8de7e3fc996d91446'
target=root/'site/themes/hextra'
if (target/'theme.toml').exists():
    print('Theme already present. Pinned source: Hextra v0.13.0, '+revision)
else:
    url='https://api.github.com/repos/imfing/hextra/tarball/'+revision
    headers={'User-Agent':'LAMB-local-website-preview'}
    if os.environ.get('GITHUB_TOKEN'): headers['Authorization']='Bearer '+os.environ['GITHUB_TOKEN']   # CI: avoids the anonymous API rate limit
    with urllib.request.urlopen(urllib.request.Request(url,headers=headers),timeout=60) as response:
        data=response.read()
    if hashlib.sha256(data).hexdigest()!=expected:
        raise SystemExit('Archive checksum differs; inspect the source before installation.')
    # Extract into a sibling folder and rename only when complete, so a failure never leaves a
    # half-installed theme that a later run would mistake for an installed one.
    staging=target.with_name(target.name+'.partial')
    if staging.exists():
        raise SystemExit('Remove the incomplete '+str(staging)+' and run again.')
    staging.mkdir(parents=True)
    skipped=[]
    with tarfile.open(fileobj=io.BytesIO(data),mode='r:gz') as archive:
        for member in archive.getmembers():
            parts=pathlib.PurePosixPath(member.name).parts[1:]
            if not parts: continue
            if '..' in parts or pathlib.PurePosixPath(member.name).is_absolute():
                raise SystemExit('Unsafe archive member: '+member.name)
            if member.issym() or member.islnk():
                skipped.append('/'.join(parts)); continue   # links are never created (the archive has CLAUDE.md -> AGENTS.md)
            dest=staging.joinpath(*parts)
            if member.isdir(): dest.mkdir(parents=True,exist_ok=True)
            elif member.isfile():
                dest.parent.mkdir(parents=True,exist_ok=True)
                dest.write_bytes(archive.extractfile(member).read())
    if not (staging/'theme.toml').exists():
        raise SystemExit('Archive did not contain theme.toml; nothing installed.')
    staging.rename(target)
    print('Installed verified Hextra v0.13.0 at '+str(target)+(' (links skipped: '+', '.join(skipped)+')' if skipped else ''))
