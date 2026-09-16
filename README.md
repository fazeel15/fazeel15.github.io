# fazeel15.github.io

Personal page for Muhammad Fazeel. Plain HTML and CSS, no build step and no dependencies.

## Files

- `index.html` - the whole page
- `style.css` - all styling, light and dark handled with `prefers-color-scheme`
- `404.html` - shown for unknown URLs
- `assets/profile.png` - portrait
- `assets/CV_Muhammad_Fazeel.pdf` - CV linked from the page
- `.nojekyll` - tells GitHub Pages to serve the files as they are

## Publishing

1. Create a public repository named `fazeel15.github.io` on GitHub.
2. Push these files to the default branch:

   ```
   git init
   git add .
   git commit -m "Personal page"
   git branch -M main
   git remote add origin https://github.com/fazeel15/fazeel15.github.io.git
   git push -u origin main
   ```

3. In the repository, open Settings, then Pages, and set Source to "Deploy from a branch", branch `main`, folder `/ (root)`.
4. The page appears at https://fazeel15.github.io within a few minutes.

## Editing

Text lives in `index.html` in plain sections: About, Research, Publications, Projects, Skills, Contact. To add a publication, copy an existing `<li>` in the `.pubs` list and change the text and DOI.

Colours and spacing are set once at the top of `style.css` as variables, so changing `--accent` changes every accent on the page.

## Before you publish

- Swap `assets/CV_Muhammad_Fazeel.pdf` for a general CV if you prefer, since the current file is the version tailored to one application.
- The page shows `muhammad.fazeel@grenoble-inp.org`. Change it in `index.html` if you would rather show a different address; it appears twice, in the sidebar and in the Contact section.
