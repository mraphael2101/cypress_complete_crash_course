import HomePage from "../../pages/HomePage";
import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";

const homePage = new HomePage()

// Anonymous function syntax with ()=> is more readable than function() cant be used with beforeEach().js
Given('I open the Ecommerce Page', function () {
    cy.visit(Cypress.env('url') + "/angularpractice/")
})

When('I add items to my Cart', function () {
    // cy.log("From fixtures -> " + this.data2.name)
    // homePage.getEditBox().click()
})

When('I fill in the form details', function (dataTable) {
    // 2D Array [1][0]  == 2nd row, 1st column
    cy.log(dataTable.rawTable[1][0])
    cy.log(dataTable.rawTable[1][1])
})
Then(/^I should see a flash message saying (.*) (.*)$/, function (username, password) {
    cy.log(username)
    if(username === 'ts01') {
        cy.log(password)
    }
});

// new cucumber specification for static parameter
Given("a POST Request is submitted to Service for a {string} typeA", function (typeA) {
    cy.log(typeA)
    cy.pause()
});

// Old cucumber specification for static parameter
// Given(/^A POST Request is submitted to Service for a "([^"]*)" typeA$/, function (typeA) {
//     cy.log(typeA)
//     cy.pause()
// });

Given('I fill in the form details diff',  (datatable)=> {
    var dtInput = datatable.hashes()
    for(let i = 0; i < datatable.length; i++) {
        let name = dtInput[i].name;
        let gender = dtInput[i].gender;
        cy.log(name)
        cy.log(gender)
    }
});
Given(/^I demonstrate passing vals between promises$/, function () {

});

var temp;

Given("I demonstrate passing vals after promise is resolved {string}",  (attrVal)=> {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        .then(function ()
        {
            temp = attrVal
            cy.log("internal print " + temp)
        })
        .then(function ()
        {
            cy.log("promise resolved then print " + temp)
            cy.pause()
        })
});
