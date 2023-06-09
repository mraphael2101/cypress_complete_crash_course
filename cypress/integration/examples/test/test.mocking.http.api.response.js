describe("Mocking APIs Sample Test Suite", function () {

    it("Test to mock a HTTP API response", function () {

        // Test Step 1
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")

        // Request object:
        // Cypress will listen for this call to be made on the browser and intercept it
        cy.intercept(
            {
                method: 'GET',
                url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
            },

        // Response object:
        // Then you either send the real response or the mocked one. In this case we will return
        // the mocked one
            {
                statusCode: 200,
                body:
                    [
                        {
                            "book_name": "RestAssured with Java",
                            "isbn": "RSU",
                            "aisle": "2301"
                        }
                    ]
            }).as('bookretrievals').should(({request, response}) => {
                // Validate if mocked response has one row/record plus the header
                cy.get('tr').should('have.length', response.body.length + 1)
            })

        // Test Step 2
        cy.get("button[class='btn btn-primary']").click()
        cy.wait('@bookretrievals')
        cy.get('p').should('have.text', 'Oops only 1 Book available')

    })

})
