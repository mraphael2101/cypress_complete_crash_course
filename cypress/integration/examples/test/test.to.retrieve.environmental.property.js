describe("Test Suite to read properties from cypress.config.js file ", function () {

    //TODO Test from CLI with the below command:
    // npx cypress run --spec cypress/integration/examples/test/test.to.retrieve.environmental.property.js --env url=https://www.google.com --headed --browser chrome


    before(function () {
        // Define the environment variable as an object inside the cypress.config.js file
        // like follows:
        // env: {
        //     url: "https://rahulshettyacademy.com"
        // },
        cy.visit(Cypress.env('url'))
    })

    it("Sample test", function () {
        // do something
    })

})
