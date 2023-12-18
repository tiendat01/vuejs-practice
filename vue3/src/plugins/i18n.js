// plugin frame

// plugins/i18n.js
export default {
  install: (app, options) => {
    // Plugin code goes here
    // inject a globally available $translate() method
    app.config.globalProperties.$translate = key => {
      // retrieve a nested property in `options`
      // using `key` as the path
      return key.split('.').reduce((o, i) => {
        if (o) return o[i];
      }, options);
    };

    // provide/inject
    app.provide('i18n', options);
  },
};
