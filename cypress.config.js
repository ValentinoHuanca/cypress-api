const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter:"cypress-multi-reporters",
  experimentalInteractiveRunEvents:true,
  screenshotOnRunFailure:false,
  reporterOptions:{
    configFile:'config-report-chrome.json'
  },
  e2e: {
    specPattern:['cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'https://simple-books-api.glitch.me'
  },
  env:{
    token:'b373aff772b7962f8a5f24236959d8f0b407b582c75151b604970821647b111e',
    endpoint:{
      booksList:'books',
      SubmitOrder:'orders'
    }
  }
});
