describe("Manipulating Browser Tabs", function () {

    //TODO Cypress does not have any knowledge about the different tabs which are
    // open in a web browser like Selenium does
    // IMPORTANT invoke method

    it("Test to alternate from Parent to a new Child tab", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // Standard behaviour of the button is to open a new browser tab
        // Demonstrated by clicking on the html ele which has a
        // target = "_blank" and href = "url"
        cy.get('#opentab').click()
    })


    it("Test to manipulate the DOM by removing a attr value to open " +
        "content in Parent tab", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // Inspect the href attribute to verify the link and that a target attribute is present e.g.
        // <a id="opentab" href="https://www.qaclickacademy.com" target="_blank" xpath="1">Open Tab</a>
        // which will open a new child tab if clicked on

        // Cypress is capable of changing the DOM to remove attribute values such
        // as target = "_blank". It has a function called invoke(functionName)
        // which accepts JQuery arguments such as .removeAttr()

        // The impact of the below is that it will change the behaviour of
        // where the window is opened i.e., the main window instead of a new tab

        if(cy.get('#opentab').invoke('attr', 'target').should('contain', '_blank')) {
            cy.log("Condition evaluates to true")
            cy.get('#opentab').invoke('removeAttr', 'target').click()
        }

    })

})
