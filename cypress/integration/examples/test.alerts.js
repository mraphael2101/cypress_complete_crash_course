describe("Manipulating Alert Popups", function () {

    it("Test to handle and dismiss Alert Popups", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // Cypress implicitly dismisses the popup after it appears (a standard functionality)
        cy.get('#alertbtn').click()
        cy.get("[value='Confirm']").click()

        // Returns a string which is assigned to the str variable
        cy.on('window:alert', (str) => {
            // Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm', (str) => {
            // Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

    })

})
