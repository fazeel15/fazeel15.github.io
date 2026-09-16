# fazeel15.github.io

Personal page for Muhammad Fazeel. Plain HTML and CSS, no build step and no dependencies.

## Files

Everything sits at the root of the repository; there are no folders.

- `index.html` - home page
- `cv.html` - the full CV, as a page rather than a PDF
- `style.css` - all styling for both pages, light and dark handled with `prefers-color-scheme`
- `404.html` - shown for unknown URLs
- `profile.png` - portrait
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

## Notes

The CV is `cv.html`, not a PDF. If someone asks for a PDF, open that page and print it to PDF; a print stylesheet drops the navigation and colours so it comes out clean.

The email address `muhammad.fazeel@grenoble-inp.org` appears twice in `index.html` and once in `cv.html`. Change all three if you switch address.
