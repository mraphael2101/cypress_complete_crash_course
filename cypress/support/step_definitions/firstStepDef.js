import HomePage from "../../pages/HomePage";
import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";

const homePage = new HomePage()

// From Cucumber
// Before({tags: '@cukehook'}, ()=> {
// })
//
// After({tags: '@cukehook'}, ()=> {
// })

// Mocha hooks
before(async function () {
    // Runs once before all tests in the block
    cy.log("before() -> Runs once before all tests in the block")
})

after(async function () {
    // Runs once after all tests in the block
    cy.log("after() -> Runs once after all tests in the block")
})

beforeEach(async function () {
    // Runs before each test in the block
    cy.log("beforeEach() -> Runs before each test in the block")
})

// Anonymous function syntax with ()=> is more readable than function() cant be used with beforeEach().js
Given('I open the Ecommerce Page', function () {
    cy.visit(Cypress.env('url') + "/angularpractice/")
})

When('I add items to my Cart', function () {
    // cy.log("From fixtures -> " + this.data2.name)
    // homePage.getEditBox().click()
})

When('I fill in the form details', function (dataTable) {
    dataTable.hashes().forEach((row) => {
        cy.log(`${row.name} ${row.gender}`);
    });
})

Then(/^I should see a flash message saying (.*) (.*)$/, function (username, password) {
    cy.log(username)
    if(username === 'ts01') {
        cy.log(password);
    }
});

// new cucumber specification for static parameter
Given("a POST Request is submitted to Service for a {string}", function (typeA) {
    cy.log(typeA);
});

// Old cucumber specification for static parameter
// Given(/^A POST Request is submitted to Service for a "([^"]*)" typeA$/, function (typeA) {
//     cy.log(typeA)
//     cy.pause()
// });


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
        })
});
