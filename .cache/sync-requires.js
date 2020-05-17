const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/hofheins/Desktop/Stevens Things/zorg/react-tailwind-starter-plate/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/hofheins/Desktop/Stevens Things/zorg/react-tailwind-starter-plate/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/hofheins/Desktop/Stevens Things/zorg/react-tailwind-starter-plate/src/pages/index.js"))),
  "component---src-pages-page-2-tsx": hot(preferDefault(require("/Users/hofheins/Desktop/Stevens Things/zorg/react-tailwind-starter-plate/src/pages/page-2.tsx")))
}

