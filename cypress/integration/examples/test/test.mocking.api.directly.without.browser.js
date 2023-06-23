describe("Mocking APIs Sample Test Suite", function () {

    it("Test to mock a HTTP API request without Manipulating the Browser", function () {

        // This is like mimicking the request body in PostMan
        cy.request
        (
            'POST',
            "http://216.10.245.166/Library/Addbook.php",
            {
                "name": "Learn Appium Automation with Java",
                "isbn": "bcggsss",
                "aisle": "22s7",
                "author": "John foe"
            }
        ).then(function (response) {
            expect(response.body).to.have.property("Msg", "Successfully added")
            expect(response.status).to.eq(200)
        })

    })

})