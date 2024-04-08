const {defineConfig} = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
// import * from fs as "fs";
// import * from process as "process";

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
      url: "https://rahulshettyacademy.com",
      IS_ZEPHYR: false,
      DYNAMO_DB: false,
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
//     e2e: {
//         video: false,
//         defaultCommandTimeout: 30000,
//         pageLoadTimeout: 100000,
//         // These variables take precedence over any declared in yaml
//         env: {
//             url: "https://rahulshettyacademy.com"
//         },
//         specPattern: ['cypress/integration/examples/*/*.js', 'cypress/integration/examples/bdd/*.feature'],
//         stepDefinitions: ['cypress/support/step_definitions/*.js'],
//         screenshotsFolder: 'cypress/failures/screenshots',
//         setupNodeEvents(on, config) {
//             const bundler = createBundler({
//                 plugins: [createEsbuildPlugin(config)],
//
//             });
//
//
//           on("task", {
//             performDynamoDbQueryOutsideCypress_GetAllData: async (tableName: string) => {
//               console.log('TASK CALLED IN cypress.config.ts -> performDynamoDbQueryOutsideCy_GetAllData');
//               let filePath;
//               try {
//                 filePath = './credentials.json';
//                 const fileContents = fs.readFileSync(filePath, 'utf-8');
//                 const jsonData = JSON.parse(fileContents);
//
//                 return performDynamoDbQueryOutsideCy_GetAllData(
//                     tableName,
//                     jsonData.AWS_ACCESS_KEY_ID,
//                     jsonData.AWS_SECRET_ACCESS_KEY,
//                     jsonData.AWS_SESSION_TOKEN
//                 );
//               } catch (error) {
//                 filePath = './cypress.env.json';
//                 const fileContents = fs.readFileSync(filePath, 'utf-8');
//                 const jsonData = JSON.parse(fileContents);
//
//                 return performDynamoDbQueryOutsideCy_GetAllData(
//                     tableName,
//                     jsonData.AWS_ACCESS_KEY_ID,
//                     jsonData.AWS_SECRET_ACCESS_KEY,
//                     jsonData.AWS_SESSION_TOKEN
//                 );
//               }
//             }
//           });
//
//           on("task", {
//             performDbQueryOutsideCypress_DeleteAllData: async (args: any) => {
//               console.log('TASK CALLED IN cypress.config.ts -> performDbQueryOutsideCypress_DeleteAllData');
//               let filePath;
//               try {
//                 filePath = './credentials.json';
//                 const fileContents = fs.readFileSync(filePath, 'utf-8');
//                 const jsonData = JSON.parse(fileContents);
//
//                 return performDbQueryOutsideCy_DeleteAllData(
//                     args,
//                     jsonData.AWS_ACCESS_KEY_ID,
//                     jsonData.AWS_SECRET_ACCESS_KEY,
//                     jsonData.AWS_SESSION_TOKEN
//                 );
//               } catch (error) {
//                 filePath = './cypress.env.json';
//                 const fileContents = fs.readFileSync(filePath, 'utf-8');
//                 const jsonData = JSON.parse(fileContents);
//
//                 return performDbQueryOutsideCy_DeleteAllData(
//                     args,
//                     jsonData.AWS_ACCESS_KEY_ID,
//                     jsonData.AWS_SECRET_ACCESS_KEY,
//                     jsonData.AWS_SESSION_TOKEN
//                 );
//               }
//             }
//           });
//
//           on("task", {
//             performDbQueryOutsideCypress_InsertAllDataAsBatch: async (args: any) => {
//               console.log('TASK CALLED IN cypress.config.ts -> performDbQueryOutsideCypress_InsertAllDataAsBatch');
//               let filePath;
//               try {
//                 filePath = './credentials.json';
//                 const fileContents = fs.readFileSync(filePath, 'utf-8');
//                 const jsonData = JSON.parse(fileContents);
//
//                 return performDynamoDbQueryOutsideCy_InsertAllDataAsBatch(
//                     args,
//                     jsonData.AWS_ACCESS_KEY_ID,
//                     jsonData.AWS_SECRET_ACCESS_KEY,
//                     jsonData.AWS_SESSION_TOKEN
//                 );
//               } catch (error) {
//                 filePath = './cypress.env.json';
//                 const fileContents = fs.readFileSync(filePath, 'utf-8');
//                 const jsonData = JSON.parse(fileContents);
//
//                 return performDynamoDbQueryOutsideCy_InsertAllDataAsBatch(
//                     args,
//                     jsonData.AWS_ACCESS_KEY_ID,
//                     jsonData.AWS_SECRET_ACCESS_KEY,
//                     jsonData.AWS_SESSION_TOKEN
//                 );
//               }
//             }
//           });
//
//           on("task", {
//             performDbQueryOutsideCypress_InsertAllDataAsBatchByRowArr: async (args: any) => {
//               console.log('TASK CALLED IN cypress.config.ts -> performDynamoDbQueryOutsideCy_InsertAllDataAsBatchByRowArr');
//               let filePath;
//               try {
//                 filePath = './credentials.json';
//                 const fileContents = fs.readFileSync(filePath, 'utf-8');
//                 const jsonData = JSON.parse(fileContents);
//
//                 return performDynamoDbQueryOutsideCy_InsertAllDataAsBatchByRowArr(
//                     args,
//                     jsonData.AWS_ACCESS_KEY_ID,
//                     jsonData.AWS_SECRET_ACCESS_KEY,
//                     jsonData.AWS_SESSION_TOKEN
//                 );
//               } catch (error) {
//                 filePath = './cypress.env.json';
//                 const fileContents = fs.readFileSync(filePath, 'utf-8');
//                 const jsonData = JSON.parse(fileContents);
//
//                 return performDynamoDbQueryOutsideCy_InsertAllDataAsBatchByRowArr(
//                     args,
//                     jsonData.AWS_ACCESS_KEY_ID,
//                     jsonData.AWS_SECRET_ACCESS_KEY,
//                     jsonData.AWS_SESSION_TOKEN
//                 );
//               }
//             }
//           });
//
//
//             on("file:preprocessor", bundler);
//             addCucumberPreprocessorPlugin(on, config);
//
//             return config;
//         }
//     },
//
// })