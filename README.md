# beeka.github.io

This repository hosts the static website for beeka.github.io.

## Local preview

To preview the site locally:

```bash
git clone https://github.com/tamasgenbeka553-cyber/beeka.github.io.git
cd beeka.github.io
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Example page structure

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>beeka.github.io</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header>
      <h1>Welcome</h1>
    </header>

    <main>
      <p>This is a simple static page.</p>
    </main>

    <script src="script.js"></script>
  </body>
</html>
```

## Example CSS

```css
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f5f5f5;
  color: #222;
}

header {
  background: #111827;
  color: white;
  padding: 2rem;
  text-align: center;
}
```

## Example JavaScript

```js
const heading = document.querySelector('h1');
if (heading) {
  heading.textContent = 'Hello from beeka.github.io';
}
```

## Notes

- GitHub Pages serves this project as a static site.
- You can update the HTML, CSS, and JavaScript files to customize the page.
- If you want, this README can also be expanded with project-specific documentation, setup instructions, and deployment notes.
