describe("Mocha Hooks Demo Test Suite", function () {

    before(function () {
        // runs once before all tests in the block

        //
        cy.fixture('example').then(function (data) {
            // Assign value to a class scope variable so that it is accessible outside the method
            this.data = data
        })
    })

    after(function () {
        // runs once after all tests in the block
    })

    beforeEach(function () {
        // runs before each test in the block
    })

    afterEach(function () {
        // runs after each test in the block
    })

    it("Sample test case", function () {
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get("input[name=name]:nth-child(2)").type(this.data.name)
        // An alternative css locator which works
        // cy.get("div.form-group input[name=name]").type('Bob')
        cy.get('select').select('Female')
    })

})
