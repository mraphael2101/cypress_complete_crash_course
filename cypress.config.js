const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // implement node event listeners here which are loaded before every test run
  await preprocessor.addCucumberPreprocessorPlugin(on, config)
  on("file:preprocessor", browserify.default(config))
  return config // return this object just in case it is modified by the plugin
}

module.exports = defineConfig({

  defaultCommandTimeout: 5000,

  env: {
    url: "https://rahulshettyacademy.com"
  },

  retries: {
    runMode: 1,
  },

  e2e: {
    setupNodeEvents,
    // Runs the unit tests
    // specPattern: 'cypress/integration/examples/*/*.js',
    // Runs the bdd tests
    specPattern: 'cypress/integration/examples/bdd/*.feature',

    screenshotsFolder: 'cypress/failures/screenshots',
  },

});

// defaultCommandTimeout: 5000, -> Overrides the default automation wait time globally
