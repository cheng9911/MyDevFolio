# Jincheng Sun — personal research website

Personal website: https://www.jcsun.cc/

Static HTML, CSS and JavaScript hosted by the existing GitHub Pages workflow.
No build step, external JavaScript CDN or font service is required.

## Preview

```bash
python3 -m http.server 8766 --bind 127.0.0.1
```

Open http://127.0.0.1:8766/.

## Content and maintenance

- `index.html`: biography, research directions, public projects, demonstrations and selected scholarly work.
- `projects.html`: 14 project/subtopic roles, experimental platforms and public repositories.
- `publications.html`: four papers, two manuscripts under review, and ten patent records with dated status labels.
- `style.css`: responsive page layouts and Hallmark design record.
- `assets/css/tokens.css`: Almanac palette, fonts and spacing.
- `assets/css/base.css`, `assets/css/fonts.css`: shared foundation and local font loading.
- `script.js`: accessible mobile navigation and project filtering.
- `assets/img/research/`: actual project stills and robot rendering. Sources are recorded in `CONTENT_SOURCES.md` and `THIRD_PARTY_NOTICES.md`.

Keep the distinction between public project material and work in progress. Do not
add unpublished numerical results, manuscript files or unconfirmed acceptance
claims to this public repository. Acceptance, review and patent states carry an explicit reference date. Update them
from owner-provided evidence or a public publication record, not from project plans.

Videos use native playback controls and `preload="none"`. Poster frames keep the
page useful without downloading the video. The navigation, research descriptions,
project list and patent disclosures remain available without JavaScript.

## Deployment

The existing `.github/workflows/static.yml` (or equivalent Pages workflow) deploys
the repository on a push to `master`. Preserve `CNAME` (`www.jcsun.cc`). The new
page uses relative local asset paths and also works under a project subpath.

Historical HTML pages and assets remain in the repository. They are not used by
the new homepage. No credentials, private source files or local environment paths
are needed for the site.

## License

The original MIT license remains in `LICENSE`. Local Hanken Grotesk and Newsreader
fonts are licensed under the SIL Open Font License; licenses ship beside the
font files. Additional asset attribution is in `THIRD_PARTY_NOTICES.md`.

## Current site
Five static pages: homepage, research route, 14-project catalogue, complete 13-video archive, and publications/patents. Taste contact-sheet direction uses local experiment frames and self-hosted Libre Franklin. Native video/details and direct clip links work without JavaScript; enhanced previews support Escape and focus restoration, with reduced-motion support.
