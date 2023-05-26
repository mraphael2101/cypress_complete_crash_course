import HomePage from "../pageObjects/HomePage";

describe("Test Suite demonstrating Page Objects concept", function () {

    before(function (){
        // Runs once before all tests
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
    })

    it("Test utilising Page Objects", function () {
        const homePage = new HomePage()
        homePage.getEditBox().type("Mark")
    })

})
