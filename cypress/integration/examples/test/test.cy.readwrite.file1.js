/** cy.readFile reads a JSON file in Cypress and returns a string by default, not an object.
 * Only use JSON.parse on the result if it's an object, or it will cause an error.
 * If you pass an encoding argument of ‘utf8’ to cy.readFile, it will return a parsed JSON object */

const dir = '/Users/markraphael/Documents/workspace_javascript/cypress_bdd/cypress_complete_crash_course/cypress/fixtures/rewr';

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

            const newJson = {name: 'John', age: 30};

            writeJsonFile(dir + '/derived.json', newJson);
        });
});

