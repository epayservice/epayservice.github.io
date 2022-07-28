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

  eleventyConfig.addNunjucksGlobal("getServicesArray", function(servicesItems, availableServicesItems) {
    const services = [];
    availableServicesItems.forEach((el) => {
      services.push(servicesItems[el]);
    });
    return services;
  });

  eleventyConfig.addNunjucksGlobal("getAvailableServicesItems", function(locale) {
    switch (locale) {
      case 'zh': return [
        'accountManagement',
        'bankTransfers',
        'affiliatePayouts',
        'payrollSolutions',
        'localPayments',
        'sendMoneyToCard',
        'cashRemittance'
      ];
      case 'ms', 'vn', 'ar', 'pl': return [
        'accountManagement',
        'bankTransfers',
        'debitCards',
        'affiliatePayouts',
        'payrollSolutions',
        'virtualCards',
        'localPayments',
        'sendMoneyToCard',
        'cashRemittance'
      ];
      default: return [
        'accountManagement',
        'bankTransfers',
        'personalIBAN',
        'personalUSAccount',
        'debitCards',
        'affiliatePayouts',
        'payrollSolutions',
        'virtualCards',
        'localPayments',
        'sendMoneyToCard',
        'cashRemittance'
      ];
    }
  });

  eleventyConfig.addNunjucksGlobal("getOpenApiHref", function(locale) {
    return ['en', 'es', 'de'].includes(locale) ? 'open-api.html' : '../en/open-api.html';
  });

  eleventyConfig.addNunjucksGlobal("getRelativeHref", function(url, link) {
    if (link.startsWith('https://') || link.startsWith('http://')) {
      return link;
    }

    relCount = url.split('/').length - 3

    str = ''

    for(i = 1; i <= relCount; i++) {
      str += '../'
    }

    return str + link
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
