import HomePage from "../../../pages/HomePage";
import ProductPage from "../../../pages/ProductPage";

describe("Test Suite to resolve element overlap exception", function () {

    before(function (){
        // Runs once before all tests
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
    })

    it("Test to resolve element overlap exception", function () {
        const homePage = new HomePage()
        homePage.getEditBox().type("Mark")

        const productPage = new ProductPage()
        productPage.getCheckoutButton().click()

        // Resolve exception by passing the argument {force: true} into the click method
        cy.get("#checkbox2").click({force: true})
    })

    it("Test to demonstrate splitting values", function () {
        const str = "$ 50000"
        var result = str.split(" ")
        cy.log(result[0])
        cy.log(result[1])
        Number(result[1])   // Convert string to number
    })

})
