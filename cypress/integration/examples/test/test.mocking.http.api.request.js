describe("Mocking APIs Sample Test Suite", function () {

    it("Test to mock a HTTP API request", function () {

        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")

        // Request object:
        // Cypress will listen for this call to be made on the browser and intercept it
        // Cypress will then modify the url
        cy.intercept(
            'GET',
            'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
            (req) => {
                req.url = "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malholtra"

                // Initiates the request on the server
                req.continue((res) => {
                        // Manipulate the response here e.g. validate the response
                        // expect(res.statusCode).to.equal(403)
                    }
                )
            },
        ).as('dummyUrl')

        // Test Step
        // Click on the button to make the url call happen
        cy.get("button[class='btn btn-primary']").click()

        cy.wait('@dummyUrl')

    })

})
