// const dir = '/Users/markraphael/Documents/workspace_javascript/cypress_bdd/cypress_complete_crash_course/cypress/fixtures/rewr';
//
// /** cy.readFile reads a JSON file in Cypress and returns a string by default, not an object.
//  * Only use JSON.parse on the result if it's an object, or it will cause an error.
//  * If you pass an encoding argument of ‘utf8’ to cy.readFile, it will return a parsed JSON object */
//
// function readJsonFile(filePath) {
//     // return cy.readFile(filePath).then((json) => {   // returns a string
//     return cy.readFile(filePath, 'utf8').then((json) => {    // returns an object
//         return json;
//     }, (err) => {
//         console.error(err);
//     });
// }
//
// function writeJsonFile(filePath, json) {
//     return cy.writeFile(filePath, JSON.stringify(json)).then(() => {
//     }, (err) => {
//         console.error(err);
//     });
// }
//
// it('read and write out either a JSON object or the file contents as a string', () => {
//     readJsonFile(dir + '/archived.json')
//         .then((json) => {
//             let obj;
//             if (typeof json === 'object') {
//                 obj = json;
//             } else {
//                 obj = JSON.parse(json);
//             }
//
//             const newJson = { name: 'John', age: 30 };
//
//             cy.log(obj)
//
//             writeJsonFile(dir + '/derived.json', obj);
//         });
// });

const dir = '/Users/markraphael/Documents/workspace_javascript/cypress_bdd/cypress_complete_crash_course/cypress/fixtures/rewr';

/** cy.readFile reads a JSON file in Cypress and returns a string by default, not an object.
 * Only use JSON.parse on the result if it's an object, or it will cause an error.
 * If you pass an encoding argument of ‘utf8’ to cy.readFile, it will return a parsed JSON object */

function readJsonFile(filePath) {
    return cy.readFile(filePath, 'utf8').then((json) => {
        // return JSON.parse(json);
        return {
            name: json.name,
            age: json.age
        };
    }, (err) => {
        console.error(err);
    });
}

function writeJsonFile(filePath, json) {
    return cy.writeFile(filePath, JSON.stringify(json)).then(() => {
    }, (err) => {
        console.error(err);
    });
}

it('read and write out either a JSON object or the file contents as a string', () => {
    readJsonFile(dir + '/archived.json')
        .then((json) => {
            cy.log(json);

            const newJson = { name: 'John', age: 30 };

            writeJsonFile(dir + '/derived.json', newJson);
        });
});

