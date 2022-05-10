module.exports = config => {

  // Set directories to pass through to the dist folder
  config.addPassthroughCopy('./src/css/');
  config.addPassthroughCopy('./src/images/');

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