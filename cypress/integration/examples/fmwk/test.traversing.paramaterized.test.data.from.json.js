/// <reference types="cypress" />

describe("Traverse Parameterised Test Data from Json file Suite", function () {

    before(function () {
        // runs once before all tests in the block

        cy.fixture('example2').then(function (data2) {
            // Assign value to a class scope variable so that it is accessible outside the method
            this.data2 = data2
        })
    })

    it("Traverse through Parameterised Test Data from Json", function () {
        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        // cy.pause()
        // cy.debug()

        cy.get("body > app-root > app-navbar > div > nav > ul > li:nth-child(2) > a").click()

        this.data2.productName.forEach(function (element) {
            cy.selectProduct(element)
        })

    })

})
