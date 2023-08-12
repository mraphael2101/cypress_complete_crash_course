// const dir = '/Users/markraphael/Documents/workspace_javascript/cypress_bdd/cypress_complete_crash_course/cypress/fixtures/rewr';
//
// function readJsonFiles(filePath1, filePath2) {
//     return cy.readFile(filePath1, 'utf8').then((json1) => {
//         return cy.readFile(filePath2, 'utf8').then((json2) => {
//             return {
//                 json1: json1,
//                 json2: json2
//             };
//         });
//     });
// }
//
// it('read and write out either a JSON object or the file contents as a string', () => {
//     readJsonFiles(dir + '/archived.json', dir + '/derived.json')
//         .then((results) => {
//             const json1 = results.json1;
//             const json2 = results.json2;
//
//             console.log('json1:', json1);
//             console.log('json2:', json2);
//         });
// });

const dir = '/Users/markraphael/Documents/workspace_javascript/cypress_bdd/cypress_complete_crash_course/cypress/fixtures/rewr';

function readJsonFiles(filePath1, filePath2) {
    const json1 = cy.readFile(filePath1, 'utf8').then((data) => {
        return data;
    });

    const json2 = cy.readFile(filePath2, 'utf8').then((data) => {
        return data;
    });

    return {
        json1: json1,
        json2: json2
    };
}

it('read and write out either a JSON object or the file contents as a string', () => {
    const results = readJsonFiles(dir + '/archived.json', dir + '/derived.json');

    cy.log('The promise has resolved');
    cy.log('json1:', results.json1);
    cy.log('json2:', results.json2);
});


