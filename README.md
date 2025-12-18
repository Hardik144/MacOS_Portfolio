# macOS Portfolio

A minimal macOS-style portfolio built with React + Vite. Windows are implemented as draggable, focusable panels powered by a central window store, allowing content like articles, images, and text files to open in floating app-like windows.

## Project Overview

This repository implements a macOS-inspired portfolio interface with draggable application windows including Finder, Safari, Photos, Terminal, Resume, Article reader, and Preview. The UI is component-driven, with each window wrapped in a `WindowWrapper` HOC and registered in a central `WINDOW_CONFIG` for programmatic control.

The app serves as a personal portfolio showcase demonstrating UI/UX design patterns and small utilities within a desktop metaphor.

## Features

- Draggable, focusable windows with z-index management
- Central window store for opening, closing, and focusing windows with optional payload data
- Markdown article rendering with articles stored in `src/content/articles`
- Image gallery with preview window functionality
- Text and Image file windows for content display
- Dock and navigation bar for window management
- Welcome screen and window controls

## Technology Stack

- **React (Vite)** - Fast build tool and development server
- **Zustand** - Lightweight state management for window store
- **Immer** - Immutability patterns for state updates
- **React Markdown** - Markdown rendering for articles
- **GSAP / Draggable** - Drag and focus behavior via WindowWrapper HOC
- **Plain CSS** - Minimal styling in `src/index.css` with assets in `public/`

## Project Structure

```
src/
├── components/
│   ├── Dock.jsx
│   ├── Navbar.jsx
│   ├── Welcome.jsx
│   ├── WindowControls.jsx
│   └── index.js
├── constants/
│   └── index.js              # WINDOW_CONFIG, articles list, gallery data
├── content/
│   └── articles/             # Markdown articles (.md files)
│       ├── cropcare-ai.md
│       ├── macos-portfolio.md
│       └── pefi.md
├── hoc/
│   └── WindowWrapper.jsx     # HOC for drag + focus behavior
├── store/
│   ├── location.js
│   └── window.js             # Central window store (Zustand)
├── windows/
│   ├── App.jsx               # Individual window components
│   ├── index.css
│   └── ...other windows
├── App.jsx                   # Main app entry, mounts all windows
├── main.jsx                  # React entry point
└── index.css                 # Global styles

Root files:
├── public/                   # Static assets and icons
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## Running Locally

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Serve the production build locally:

```bash
npx serve dist
```

## Development Notes

### Importing Markdown Articles

The project uses Vite's raw loader to import markdown files as strings:

```js
import exampleMd from '../content/articles/example.md?raw'
```

### Static Assets

Icons and static assets are stored in the `public/` folder and referenced by path.

### Window Components

All window components are rendered in `App.jsx` so they exist in the DOM. To open a window programmatically or via user action, call the window store's `openWindow(key, data)` method.

## Adding a New Window

Follow these steps to add a new window to the portfolio:

1. **Create the component** in `src/windows/MyWindow.jsx`

2. **Wrap with WindowWrapper** using the existing pattern:
   ```js
   export default WindowWrapper(MyWindow, 'mywindow')
   ```

3. **Register in WINDOW_CONFIG** in `src/constants/index.js`:
   ```js
   WINDOW_CONFIG = {
     mywindow: {
       title: 'My Window',
       // ... other config
     }
   }
   ```

4. **Export from windows** in `src/windows/index.js` (if applicable)

5. **Mount in App.jsx** by importing and including the component

6. **Open programmatically** using:
   ```js
   openWindow('mywindow', { /* optional data */ })
   ```

## Window Store API

The central window store (`src/store/window.js`) exposes these methods:

### `openWindow(key, data)`
Opens the window with the specified key and stores optional data on the window's state. Increments z-index to bring the window forward.

### `closeWindow(key)`
Closes the window with the specified key.

### `focusWindow(key)`
Brings a window to the front by incrementing its z-index without changing open state.

Window components read their payload from `WINDOW_CONFIG[key].data` or directly from the window store depending on implementation.

## Content Management

### Articles

Markdown articles are stored in `src/content/articles/` and imported as raw strings. Article metadata (title, slug, hero image, tags) is defined in `src/constants/index.js`:

```js
export const ARTICLES = [
  {
    title: 'My Article',
    slug: 'my-article',
    hero: '/path/to/image.jpg',
    tags: ['tag1', 'tag2']
  }
]
```

### Gallery and Photos

Image metadata is stored in `src/constants/index.js` via `gallery` and `photosLinks` arrays. The Photos window uses these lists to render thumbnails and open Preview windows on click.

## Styling and Assets

Global styles are in `src/index.css`. The project maintains minimal styling to emulate a clean macOS aesthetic. Window-specific styles use IDs like `#article`, `#photos`, and `#preview`.

When modifying styles, ensure consistency with the existing macOS-inspired design language.

## Contributing

Contributions are welcome. To contribute:

1. Fork the repository and create a feature branch
2. Follow the existing window pattern when adding features (WindowWrapper + WINDOW_CONFIG + export + mount in App.jsx)
3. Keep styling consistent and avoid global CSS conflicts
4. Test window drag, focus, and z-index behavior
5. Submit a pull request with a clear description of changes

## License

This project is provided under the MIT License.

---

**Note:** This is a personal portfolio project demonstrating modern React patterns and UI/UX design. It is not affiliated with or endorsed by Apple Inc.