module.exports = {
  "browsersync": {
    "files": [
      "./src/_compiled/styles.css",
      "./src/_compiled/*.js",
      "./src/*.html"
    ],
    // "server": "src", // use this if it IS a static site
    "proxy": "https://local.ar.test/", // use this if it's NOT a static site, ex: app.mysite.dev
    "notify": false,
    "open": false
  },
  "templatePath": "/*.html" // Relative to the src directory
}
