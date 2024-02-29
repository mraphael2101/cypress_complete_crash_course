const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
// import fs from "fs";
// import process from "process";

async function setupNodeEvents(on, config) {
  // implement node event listeners here which are loaded before every test run
  await preprocessor.addCucumberPreprocessorPlugin(on, config)
  on("file:preprocessor", browserify.default(config))
  return config // return this object just in case it is modified by the plugin
}

module.exports = defineConfig({

  defaultCommandTimeout: 5000,
  // These variables take precedence over any declared in a yaml file
  env: {
    url: "https://rahulshettyacademy.com"
  },

  retries: {
    runMode: 1,
  },

  e2e: {
    setupNodeEvents,
    specPattern: ['cypress/integration/examples/*/*.js', 'cypress/integration/examples/bdd/*.feature'],
    stepDefinitions: ['cypress/support/step_definitions/*.js'],
    screenshotsFolder: 'cypress/failures/screenshots',
  },

});


// export default defineConfig({
//   e2e: {
//     video:false,
//     defaultCommandTimeout: 30000,
//     pageLoadTimeout:100000,
//     // These variables take precedence over any declared in yaml
//     env: {
//       url: "https://rahulshettyacademy.com"
//     },
//     specPattern: ['cypress/integration/examples/*/*.js', 'cypress/integration/examples/bdd/*.feature'],
//     stepDefinitions: ['cypress/support/step_definitions/*.js'],
//     screenshotsFolder: 'cypress/failures/screenshots',
//     setupNodeEvents(on, config) {
//       const bundler = createBundler({
//         plugins: [createEsbuildPlugin(config)],
//
//       });
//
//
//       on("task", {
//         performDynamoDbQueryOutsideCypress_GetAllData: async (tableName: string) => {
//           console.log('performQueryOutsideCypress_GetAllData TASK CALLED IN cypress.config.ts')
//           let fileContents = fs.readFileSync(`./cypress.env.json`, 'utf-8');
//           if (fileContents) {
//             const jsonData = JSON.parse(fileContents);
//             // console.log(jsonData.AWS_ACCESS_KEY_ID)
//             // console.log(jsonData.AWS_SECRET_ACCESS_KEY)
//             // console.log(jsonData.AWS_SESSION_TOKEN)
//             return performDynamoDbQueryOutsideCy_GetAllData(tableName, jsonData.AWS_ACCESS_KEY_ID, jsonData.AWS_SECRET_ACCESS_KEY, jsonData.AWS_SESSION_TOKEN);
//           } else {
//             return performDynamoDbQueryOutsideCy_GetAllData(tableName, process.env.AWS_ACCESS_KEY_ID!, process.env.AWS_SECRET_ACCESS_KEY!, process.env.AWS_SESSION_TOKEN!);
//           }
//         }
//       });
//
//       on('task', {
//         getCypressBookingDataValue: async ()=> {
//           return getCypressBookingDataValue(process.env.CYPRESS_BOOKING_DATA!)
//         }
//       });
//
//       on("file:preprocessor", bundler);
//       addCucumberPreprocessorPlugin(on, config);
//
//       return config;
//     }
//   },
//
// })