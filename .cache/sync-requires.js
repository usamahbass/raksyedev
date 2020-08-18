const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/mronoyy/Desktop/bass_dev/raksyedev/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/mronoyy/Desktop/bass_dev/raksyedev/src/pages/404.js"))),
  "component---src-pages-kategori-js": hot(preferDefault(require("/home/mronoyy/Desktop/bass_dev/raksyedev/src/pages/kategori.js"))),
  "component---src-pages-kontak-js": hot(preferDefault(require("/home/mronoyy/Desktop/bass_dev/raksyedev/src/pages/kontak.js"))),
  "component---src-template-blog-jsx": hot(preferDefault(require("/home/mronoyy/Desktop/bass_dev/raksyedev/src/template/blog.jsx"))),
  "component---src-template-blog-list-jsx": hot(preferDefault(require("/home/mronoyy/Desktop/bass_dev/raksyedev/src/template/blog-list.jsx"))),
  "component---src-template-tags-jsx": hot(preferDefault(require("/home/mronoyy/Desktop/bass_dev/raksyedev/src/template/tags.jsx")))
}

