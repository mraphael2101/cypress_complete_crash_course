// const dir = '/Users/markraphael/Documents/workspace_javascript/cypress_bdd/cypress_complete_crash_course/cypress/fixtures/rewr';
const dir = '/Users/mark.raphael/Documents/javascript_workspace/cypress_complete_crash_course/cypress/fixtures/rewr';

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
        .then((response) => {
            if (typeof response.body === 'object') {
                // response.body is a JSON object
                // use JSON.stringify to convert it to a string
                const jsonString = JSON.stringify(response.body);
            } else if (typeof response.body === 'string') {
                // response.body is a string
                // use JSON.parse to convert it to an object
                const jsonObject = JSON.parse(response.body);
            }
        });

});
