describe("Web Tables Test Suite", function () {

    // TODO Scan the table for a particular column to find the text by parsing
    // all the column values using the css locator and traverse through the list.
    // Access the sibling using the next() method,and assign the value by
    // resolving the promise

    it("Test to parse WebTables", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get("tr td:nth-child(2)").each(($el1, index, $list) => {

            const text = $el1.text()

            if (text.includes('Python')) {

                // Traverse to the immediately following sibling using the next() method
                // The next() method returns a Jquery object and if you attach it to Cypress it will not
                // be able to resolve the promise, so you cannot just assign the text() method using
                // cy.get("tr td:nth-child(2)").eq(index).next().text()

                cy.get("tr td:nth-child(2)")
                    .eq(index)
                    .next()
                    .then(function (price) {
                        const priceText = price.text()
                        expect(priceText).to.equal('25')
                    })
            }

        })
    })

})

