describe("Mouse Over Test Suite", function () {

    // TODO JQuery has a function to trigger a mouse over event as Cypress
    //  does not support the feature itself.
    //  The show() method in JQuery is used to display hidden and selected
    //  methods

    it("Mouse over with Cypress test", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // Returns/displays the hidden elements associated to that specific element
        // For it to work, the invoke method needs to be applied to the immediate parent
        // of the hidden elements. It cannot be a grandparent
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include','top')

    })

})
