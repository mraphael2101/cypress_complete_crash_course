// const dir = '/Users/markraphael/Documents/workspace_javascript/cypress_bdd/cypress_complete_crash_course/cypress/fixtures/rewr';
const dir = '/Users/mark.raphael/Documents/javascript_workspace/cypress_complete_crash_course/cypress/fixtures/rewr';

function readJsonFiles(filePath1, filePath2) {
    const json1 = cy.readFile(filePath1, 'utf8').then((data) => {
        return cy.wrap(data);
    });

    const json2 = cy.readFile(filePath2, 'utf8').then((data) => {
        return cy.wrap(data);
    });

    return {
        json1: json1,
        json2: json2
    };
}

it('read and write out either a JSON object or the file contents as an object', () => {
    const results = readJsonFiles(dir + '/archived.json', dir + '/derived.json');

    cy.log('The promise has resolved');

    results.json1.then(data => {
        cy.log(data.name);
        cy.log(data.age);
        cy.log(data.city);
    })
});


