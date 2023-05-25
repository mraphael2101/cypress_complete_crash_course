describe("Parameterised Test Data from Json files using each command Test Suite", function () {

    before(function () {
        // runs once before all tests in the block

        //
        cy.fixture('example').then(function (data) {
            // Assign value to a class scope variable so that it is accessible outside the method
            this.data = data
        })
    })

    it("Parameterised Test Data from Json files using each command Test", function () {
        cy.visit("https://rahulshettyacademy.com/angularpractice/")

    })

})
