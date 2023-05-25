describe("Test suite to navigate the browser", function () {

    it("Browser Navigation Test and Assert on Page", function () {
        cy.visit("http://qaclickacademy.com/practice.php")

        cy.get('#opentab').invoke('removeAttr', 'target').click()

        // Gets the current url of the active page and asserts to see if it contains
        cy.url().should('include', 'qaclickacademy')

        cy.go("back")
    })

})
