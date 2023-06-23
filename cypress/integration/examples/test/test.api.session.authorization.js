describe("Test Suite to inject token/cookie into your Browser's local storage" +
    "before visiting the url", function () {

    it("Test to demonstrate utilising a JWT Session Token", function () {

        // Once you call the method the promise is resolved
        cy.LoginAPI().then(function () {

            cy.visit("https://rahulshettyacademy.com/client",
                {
                    onBeforeLoad: function ()
                    {
                        window.localStorage.setItem('token', Cypress.env('token'))
                    }
                }
           );
        })

    })

})
