import 'cypress-iframe'

describe("Handling Frames Test Suite", function () {

    // TODO Cypress has no support by default for handling iframes
    //  (html doc embedded in another html doc). In order to be able to
    //  detect iframe code in your tests install the below dependency in
    //  the root node of the project, and import it as per above
    //  npm install -D cypress-iframe

    it("Switching Frames test", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // Objective is to click on one of the links in the iframe
        // Loads the frameid into the Cypress object
        cy.frameLoaded("#courses-iframe")

        // cy.iframe() // switch to iframe mode
        cy.iframe().find("a[href*='mentorship']")
            .eq(0)
            .click()

        cy.wait(3000)

        cy.iframe().find("div.row div.pricing-container")
            .should('have.length',2)
    })

})
