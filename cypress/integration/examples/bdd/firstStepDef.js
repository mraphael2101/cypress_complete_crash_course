/// <reference types="Cypress" />
import HomePage from "../../../pages/HomePage";
import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";

const homePage = new HomePage()

// Anonymous function syntax with ()=> is more readable than function() cant be used with beforeEach().js
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
