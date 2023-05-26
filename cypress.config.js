const { defineConfig } = require("cypress");

// defaultCommandTimeout: 5000, -> Overrides the default automation wait time globally

module.exports = defineConfig({

  defaultCommandTimeout: 5000,

  env: {
    url: "https://rahulshettyacademy.com"
  },

  retries: {
    runMode: 1,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*/*.js',
    screenshotsFolder: 'cypress/failures/screenshots',
  },
});
