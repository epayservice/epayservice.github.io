const { set, add } = require('lodash');

const langs = ['ar', 'co', 'de', 'en', 'es', 'fr', 'ms', 'pl', 'pt', 'ro', 'ru', 'uk', 'vn', 'zh'];

const translations = {};

function addLanguage(item, lang, tKey = '') {
  for(const [key, value] of Object.entries(item)) {
    if (typeof value !== 'object' && tKey) {
      set(translations, `${tKey}.${key}.${lang}`, value);
    } else if ((typeof value !== 'object' && !tKey)) {
      set(translations, `${key}.${lang}`, value);
    } else {
      addLanguage(value, lang, tKey ? `${tKey}.${key}` : key)
    }
  };
}

langs.forEach((lang) => {
  addLanguage(require(`./${lang}.js`), lang);
});

module.exports = translations;