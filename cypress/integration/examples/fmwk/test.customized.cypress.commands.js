describe("Cypress Custom Commands Test Suite", function () {

    //TODO Cypress comes with its own API for creating custom commands and overwriting existing commands
    // There are two API available for adding custom commands:
    // Cypress.Commands.add() used to add a custom command or when writing tests
    // Cypress.Command.overwrite() overrides an existing built-in Cypress command or reserved internal function
    // Refer to https://docs.cypress.io/api/cypress-api/custom-commands
    // Reference support/commands.js where the function is located

    it("Test demonstrating how to call a Cypress custom command", function () {
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.selectProduct('Blackberry')
    })

})
