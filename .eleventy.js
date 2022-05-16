const i18n = require('eleventy-plugin-i18n');
const translations = require('./src/data/i18n');
const Nunjucks = require('nunjucks');

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/**/*.pdf");
  eleventyConfig.addPassthroughCopy("src/CNAME");

  eleventyConfig.addPlugin(i18n, {
    translations,
    fallbackLocales: {
      '*': 'en'
    }
  });

  eleventyConfig.addFilter('log', value => {
    console.log(value);
  });

  const nunjucksEnvironment = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader("src/includes"), // we need to pass in our includes dir here
    {
      lstripBlocks: true,
      trimBlocks: true
    }
  );

  eleventyConfig.setLibrary("njk", nunjucksEnvironment);

  return {
    addPassthroughCopy: true,
    markdownTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"],
    dir: {
      input: "src",
      output: "_site",
      includes: "includes",
      layouts: "layouts",
      data: "data"
    }
  }
}