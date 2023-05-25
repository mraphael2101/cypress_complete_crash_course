describe("Mocha Hooks Demo Test Suite", function () {

    before(function () {
        // runs once before all tests in the block
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
        cy.get("form input.form-control:nth-child(1)").type('Bob')
        cy.get('select').select('Female')
    })

})
