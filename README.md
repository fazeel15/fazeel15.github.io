# fazeel15.github.io

Personal site of Muhammad Fazeel: data scientist, LLM agents and applied deep learning. Plain HTML, CSS and a few lines of JavaScript. No build step, no dependencies, no folders.

## Files

- `index.html`: home page (about, experience, projects, education, skills, publications, certifications, volunteer work, contact)
- `cv.html`: the full CV as a web page, with a print stylesheet for A4
- `CV_Muhammad_Fazeel.pdf`: the CV as a downloadable PDF, linked from both pages
- `style.css`: all styling, light and dark (follows the system setting, with a manual toggle)
- `script.js`: theme toggle, mobile menu, footer year
- `profile.jpg`: portrait
- `favicon.svg`: site icon
- `404.html`: shown for unknown URLs
- `robots.txt`, `sitemap.xml`: for search engines
- `.nojekyll`: tells GitHub Pages to serve the files exactly as they are

## Publishing

1. Create a public repository named `fazeel15.github.io` (or open the existing one).
2. Put every file from this folder at the root of the repository, replacing the old files, and push to the default branch.
3. In the repository, open Settings, then Pages, and set Source to "Deploy from a branch", branch `main`, folder `/ (root)`.
4. The site appears at https://fazeel15.github.io within a few minutes.

## Editing

- Text lives in `index.html` and `cv.html` in plain sections. Keep both in sync when a role or project changes.
- To add a publication, copy an existing `<li>` in the `.pubs` list and change the year, title, authors and DOI.
- Colours, fonts and spacing are variables at the top of `style.css`. Changing `--accent` recolours the whole site.
- When you replace the CV PDF, keep the file name `CV_Muhammad_Fazeel.pdf` so the links keep working.
