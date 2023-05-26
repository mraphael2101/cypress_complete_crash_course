describe("Test Suite to ", function () {

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
