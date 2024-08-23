const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter:"cypress-multi-reporters",
  experimentalInteractiveRunEvents:true,
  screenshotOnRunFailure:false,
  reporterOptions:{
    configFile:'config-report-chrome.json'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'https://simple-books-api.glitch.me'
  },
  env:{
    endpoint:{
      books:'books',
      SubmitOrder:'orders'
    }
  }
});
