const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter:"cypress-multi-reporters",
  experimentalInteractiveRunEvents:true,
  screenshotOnRunFailure:false,
  reporterOptions:{},
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
