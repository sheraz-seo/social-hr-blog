# Social HR Software Blog

A clean, professional blogging website focused on HR Software and Payroll Software insights.

## Pages

- `index.html` — Homepage with blog listing and filter tabs
- `post.html` — Sample individual blog post with sidebar
- `about.html` — About the publication
- `contact.html` — Contact form
- `css/style.css` — All styles
- `js/main.js` — Interactions (filters, mobile nav, forms)

## Project Structure

```
social-hr-blog/
├── index.html
├── post.html
├── about.html
├── contact.html
├── css/
│   └── style.css
└── js/
    └── main.js
```

## Deploying to GitHub Pages

1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Set **Source** to `main` branch, root folder `/`
4. Save — your site will be live at `https://<your-username>.github.io/<repo-name>`

## Adding New Blog Posts

Copy `post.html`, rename it (e.g. `payroll-automation.html`), then:
- Update the `<title>` tag
- Change the post title, excerpt, author, and date in the hero section
- Replace the article body content inside `.post-body`
- Add a card for it in `index.html` inside the `#blogGrid` div

## License

© 2025 Social HR Software. All rights reserved.
