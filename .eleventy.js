module.exports = function(eleventyConfig) {
  // Return your Object options:
  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: "docs"
    }
  }
};