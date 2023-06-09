import HomePage from "../../../pages/HomePage";
import ProductPage from "../../../pages/ProductPage";

describe("Test Suite demonstrating Page Objects concept", function () {

    before(function (){
        // Runs once before all tests
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
    })

    it("Test utilising Page Objects", function () {
        const homePage = new HomePage()
        homePage.getEditBox().type("Mark")

        const productPage = new ProductPage()
        productPage.getCheckoutButton().click()

        // Overrides the default timeout at a test case level
        Cypress.config('defaultCommandTimeout', 8000)
    })

})
