const fs = require("fs");
const htmlmin = require("html-minifier");

module.exports = function(eleventyConfig) {
  // Watch
  eleventyConfig.addWatchTarget('./css/index.css')
  eleventyConfig.addWatchTarget('./_tmp/index.css')
  eleventyConfig.addWatchTarget('./tailwind.config.js')

  // Copy `css` to the output
  eleventyConfig.addPassthroughCopy({ './_tmp/index.css': './css/index.css' })

  // Minify HTML
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if( outputPath && outputPath.endsWith(".html") ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }
    return content;
  });

  // Override Browsersync defaults (used only with --serve)
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, browserSync) {
        const content_404 = fs.readFileSync('_site/404.html');

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.writeHead(404, {"Content-Type": "text/html; charset=UTF-8"});
          res.write(content_404);
          res.end();
        });
      },
    },
    ui: false,
    ghostMode: false
  });

  return {
    templateFormats: [
      "md",
      "njk",
      "html"
    ],
    pathPrefix: "/",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: false,
  };
};
