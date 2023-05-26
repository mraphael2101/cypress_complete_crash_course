describe("Demonstrating cy.pause() and cy.debug()", function () {

    it("Use cy.pause() with the TestRunner", function () {
        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        cy.pause()

        cy.log("You are here")

    })

    it("Explore cy.debug()", function () {
        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        cy.debug()

        cy.log("You are here")

    })

    it("Standard debugging in WS", function () {
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        const browsers = ["Chrome", "Firefox", "Safari"]
        browsers.forEach((val, index, arr) => {
            cy.log(val);
            cy.log(index);
            cy.log(arr);
        })
    })

})
