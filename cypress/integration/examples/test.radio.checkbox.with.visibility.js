describe("Manipulating Form Elements Test Suite", function () {

    it("Test to select a Checkbox option", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // Validate if the checkbox was checked
        // Validate if the value of the checkbox is value1
        cy.get('#checkBoxOption1').check()
            .should('be.checked')
            .and('have.value', 'option1')

        cy.get('#checkBoxOption1').uncheck()
            .should('not.be.checked')

        // To select multiple checkboxes you have to identify the common locator
        // or property for all the checkboxes
        cy.get("input[type='checkbox']").check(['option2','option3'])
    })

    it("Test to select a static Drop-down menu option", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get("select[id='dropdown-class-example']")
            .select('option2')
            .should('have.value', 'option2')
    })

    it("Test to select a dynamic Drop-down menu option" +
        "looks like a textfield with a listbox as you type", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#autocomplete').type('ind')

        cy.get(".ui-menu-item div").each(($el, index, $list) => {
            if($el.text() === "India") {
                cy.wrap($el).click()
            }
        })

        cy.get('#autocomplete').should('have.value', 'India')

    })

    it("Handling visible and invisible elements", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // Using chai assertions
        cy.get("#displayed-text").should("be.visible")
        cy.get("#hide-textbox").click()
        cy.get("#displayed-text").should("not.be.visible")
        cy.get("#show-textbox").click()
        cy.get("#displayed-text").should("be.visible")
    })

    it("Test to select a Radio button", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // Validate if the radio option was checked
        // Validate if the value of the radio option is radio2
        cy.get("input[value='radio2']").check().should('be.checked')
    })

})
