# AIMeta Press

Independent static portal for **aimeta.press**. An AI-powered local information network, starting in Halifax. News, grocery deals, fuel prices, housing and everyday city life.

Based on the shared pixel / voxel design language of [aimeta.website](https://github.com/aimeta-website/aimeta-website.github.io): pixel accents, Inter body text, thick borders, offset shadows and cube branding. The content is adapted into a dedicated brand homepage with its own navigation and metadata.

## Files

- `index.html`: brand homepage, current project links and clearly labelled plans.
- `404.html`: custom not-found page.
- `css/style.css`, `js/main.js`: responsive styles and accessible mobile navigation.
- `favicon.svg`: brand-colour cube icon.
- `CNAME`, `.nojekyll`, `robots.txt`, `sitemap.xml`: custom-domain and discovery files.

## Preview

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000`. No build tools, package installation or backend required. Google Fonts is optional; system fonts are used if it cannot load. All content remains visible without JavaScript.

## GitHub Pages

In this repository, open **Settings → Pages**. Set **Source** to **Deploy from a branch**, then select **main** and **/ (root)**. Set the custom domain to **aimeta.press** and enable HTTPS after GitHub verifies the domain. DNS must point the domain to GitHub Pages; committing `CNAME` alone does not change DNS or enable Pages.

The same files can be served by IIS, Nginx or any static host. On IIS, copy the repository content into the site root, enable Static Content, use `index.html` as the default document and map `.svg` to `image/svg+xml` if needed. Configure the host to use `404.html` for missing pages; no URL rewrite or SPA fallback is required.

## Editing

Edit copy and project links in `index.html`, colours and layout in `css/style.css`. Keep concepts and planned services labelled as such. The independent portal links to existing subdomain applications; their source and deployments are separate.
