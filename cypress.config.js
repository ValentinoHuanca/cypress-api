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
    token:'eeceae6310c0c43f20f35663ce1b22bf43a52a433fb57e85e456af51af9285e0',
    endpoint:{
      books:'books',
      SubmitOrder:'orders',
      apiClients:'api-clients'
    }
  }
});
