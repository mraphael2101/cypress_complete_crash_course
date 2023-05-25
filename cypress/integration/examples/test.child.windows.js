describe("Alternating Window Test Suite", function () {

    // TODO Cypress does not have the capability to control switching
    //  between the different child browser windows. The Cypress way of doing
    //  it is to retrieve the target url of the window that you wish to
    //  navigate to, and to directly hit the url.
    //  Approach 1: Extract the href attribute and visit the url
    //  Approach 2: remove the target attribute and click the button

    it("Theory of alternating Windows Cypress workaround test", function () {
        // rahulshettyacademy.com
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // Approach 1 using JQuery prop() method to get the property value
        // as it is a JQuery method you cannot directly assign the value from
        // the property without resolving the promise
        cy.get('#opentab').then(function (myEl) {
            // Get the property value of
            const url = myEl.prop('href')
            cy.visit(url)   // qaclickacademy.com
            //TODO For security reasons, this will not work if the domain name
            // will change i.e. cross-domains
            // The command was expected to run against origin `https://rahulshettyacademy.com`
            // but the application is at origin `https://www.qaclickacademy.com`.
            cy.get("div.sub-menu-bar a[href*='about']").click()
        })
    })

    it("Alternating Windows Cypress workaround test solution", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('#opentab').then(function (myEl) {
            const url = myEl.prop('href')
            cy.visit(url) // pre-requisite land on another/new domain - happens here
            // cy.origin() arguments = url, anonymous function
            cy.origin(url, () => {
                // Specify the operations that you want to perform on the new domain here
                cy.get("div.sub-menu-bar a[href*='about']").click()
            })

        })
    })

})
