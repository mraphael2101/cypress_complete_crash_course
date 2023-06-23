describe("Asynchronous code in Cy Test Suite", function () {

    // Execute using npx cypress open

    it("Asynchronous Test", async ()=> {
        await cy.log("You are here")
        await cy.log("You are here 2")
    })

})
