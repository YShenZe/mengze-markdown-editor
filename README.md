# MengZe Markdown Editor

**MengZe Markdown Editor** is a Markdown editor built with Vue 3 and Vite. It provides user-friendly editing features, including real-time preview, PDF export, ZIP file generation, and other common Markdown editing capabilities.

## Features

- Real-time preview of Markdown content
- Simple yet powerful editor powered by EasyMDE
- PDF export support
- File saving capabilities
- ZIP file generation
- Modern development stack using Vue 3 and Vite

## Tech Stack

- **Frontend Framework**: Vue 3
- **Styling Framework**: Bootstrap 5
- **Editor**: EasyMDE (based on CodeMirror)
- **Markdown Parsing**: Marked
- **Export Utilities**: jsPDF, FileSaver, JSZip, html2canvas
- **Encryption**: Crypto-JS

## Installation

### Clone Repository

```bash
git clone https://github.com/YShenZe/mengze-markdown-editor.git
cd mengze-markdown-editor
```

### Install Dependencies

```bash
npm install
```

## Development Mode

Run the development server:

```bash
npm run dev
```

## Build

Build for production:

```bash
npm run build
```

## Preview

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
my-markdown-editor/
├── index.html               # HTML template
├── dist/                    # Build output directory (for Pages deployment, can be ignored)
├── src/
│   ├── assets/              # Static assets
│   ├── App.vue              # Main component
│   └── main.js              # Entry file
├── package.json             # Project configuration
└── vite.config.js           # Vite configuration
```

## Dependencies

- `bootstrap` - Frontend styling framework for layout and UI components.
- `bootstrap-icons` - Icon library for Bootstrap.
- `codemirror` - Code editor library for Markdown editing.
- `crypto-js` - Encryption library.
- `easymde` - User-friendly Markdown editor built on CodeMirror.
- `file-saver` - Client-side file saving utility.
- `html2canvas` - Converts HTML elements to Canvas images.
- `jspdf` - PDF generation library.
- `jszip` - ZIP file creation library.
- `marked` - Markdown parser for converting Markdown to HTML.
- `vue` - Frontend JavaScript framework for building UIs.

## Dev Dependencies

- `@vitejs/plugin-vue` - Vite plugin for Vue support.
- `vite` - Modern frontend build tool.

## License

MIT License - See [LICENSE](LICENSE) for details.