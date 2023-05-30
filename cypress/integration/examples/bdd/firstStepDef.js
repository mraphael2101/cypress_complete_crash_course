import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pageObjects/HomePage";
import ProductPage from "../pageObjects/ProductPage";
const homePage = new HomePage()
const productPage = new ProductPage()

// Anonymous function syntax with ()=> is more readable than function()
Given('I open the Ecommerce Page', function () {

    // implicitly made available from the beforeEach.js file
    //data2.name
    cy.visit(Cypress.env('url') + "/angularpractice/")
})

When('I add items to my Cart', function () {
    homePage.getEditBox().click()
})

When('I fill in the form details', function (dataTable) {
    // 2D Array [1][0]  == 2nd row, 1st column
    cy.log(dataTable.rawTable[1][0])
    cy.log(dataTable.rawTable[1][1])
})
