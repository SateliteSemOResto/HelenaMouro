# Helena Mouro Portfolio

This is a Vite + React portfolio site designed for GitHub Pages deployment.

## Local development

```bash
npm install
npm run dev
```

## GitHub Pages deployment

1. Push this project to a GitHub repository.
2. In GitHub, open the repository settings.
3. Go to Pages.
4. Set the source to GitHub Actions.
5. The workflow in `.github/workflows/deploy.yml` will build and deploy the site automatically.

The site is configured for GitHub Pages by setting the Vite base path dynamically when `GITHUB_ACTIONS` is present.
