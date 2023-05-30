
// By doing this the data2 property will implicitly become available in the step definition file

beforeEach(function () {
    // Executes before each and every scenario
    cy.fixture('example').then(function (data2) {
        this.data2 = data2
    })
})
