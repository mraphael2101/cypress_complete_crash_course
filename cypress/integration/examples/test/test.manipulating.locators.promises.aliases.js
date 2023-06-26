describe('First test suite', function () {

    it('Test demonstrating a Standard Chai Assertion', function () {
        // Test steps go here
        expect(true).to.equal(true)
        const str = 'abc'
        expect(str.includes('abc')).to.be.true
    })

    it('Test to manipulate locators incl Traversing through ele arrays', function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        // unlike Selenium, get() is used like findElement()
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)   // implicit wait
        // jquery selector with chai assertion
        cy.get('.product:visible').should('have.length',4)

        // parent child chaining
        // find() Finds the descendent DOM elements with the given selector
        cy.get('.products').find('.product').should('have.length', 4)

        // eq(2) -> Identifies the element in the list at index position 2
        cy.get('.products').find('.product')
            .eq(2)
            .contains('ADD TO CART')
            .click()

        // How to traverse through an array in Cypress
        cy.get('.products').find('.product')
            .each(($el, index, $list) => {

                // Use .text() to return the text
                const textVeg = $el.find('h4.product-name').text()

                if(textVeg.includes('Cashews')) {
                    // $el is a promise which we are not resolving. Hence, the click method is deprecated
                    // $el.find('button').click()
                    // The promise is resolved by using the wrap method which is used to resolve it
                    cy.wrap($el).find('button').click()
                }

            })

        // ERROR: if you attempt to assign the element to a variable in js, then cypress will get confused,
        // and it will not be accepted as a valid assignment
        // const logo = cy.get('.brand')
        // cy.log(logo.text())

        // SOLUTION: You must resolve the promise yourself as follows if you are assigning a value to a js variable
        // The resolved promise is assigned to the variable logoelement inside the function
        const logo = cy.get('.brand').then(function (logoelement) {
            // text() is only accessible from inside the promise function
            cy.log(logoelement.text())
        })

        // ERROR:
        // cy.log("Prints the obj reference " + logo)
        // NOTE: What you are trying to achieve is considered an antipattern in cypress. Generally you should do
        // everything you want to do with that variable inside the .then(). Make sure to use Syntax like:
        // .then() => {all your code in here}


        // ERROR: Not possible in Cypress
        // cy.log(cy.get('.brand').text())

    })

    it("Test to resolve promises for non-Cypress methods", function () {

        // In order to control the execution order for JavaScript's console.log() method
        // you have to manually resolve the promise of the previous step yourself
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
            .then(function () {
                cy.log("A. DevTools console logging occurred in the web browser")
            }).then(function () {
                cy.log("B. DevTools console logging occurred in the web browser")
            })
    })

    it("Test to extract element text", function () {

        // If the text contains a non-breaking space entity &nbsp; then use the Unicode
        // character \u00a0 instead of &nbsp;.
        cy.get('div').should('have.text', 'Hello\u00a0world')

        // You can also use the cy.contains command which handles the non-breaking space entities
        cy.contains('div', 'Hello world')

        cy.get('div').should(($div) => {
            const text = $div.text()

            expect(text).to.match(/foo/)
            expect(text).to.include('foo')
            expect(text).not.to.include('bar')
        })

        // Example 2
        cy.get('div')
            .invoke('text')
            .then((text1) => {
                // do more work here

                // click the button which changes the div's text
                cy.get('button').click()

                // grab the div again and compare its previous text
                // to the current text
                cy.get('div')
                    .invoke('text')
                    .should((text2) => {
                        expect(text1).not.to.eq(text2)
                    })
            })

    })

    it("Test case with an example of using alias", function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

        // Rather than repeating the assignment operation multiple times
        // we are doing it once and then reusing the variable like follows
        cy.get('.products').as('productsLocator')
        cy.get('@productsLocator')
    })

    it("Test with basic chai assertions", function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.brand').as('brandLocator')
        // With assertions all promises are automatically handled
        cy.get('@brandLocator').should("have.text", "GREENKART")
        // As it is an image and a single element the length is 1
        cy.get('@brandLocator').should("have.lengthOf", 1)
    })


})
