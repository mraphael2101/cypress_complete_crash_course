
describe('Ecommerce test suite', function () {

    it('Add product to basket and cart checkout', function () {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.products').as('productLocator')

        // Parent child chaining
        // The find('locator') method works by searching and filtering on the cy.get('locator') method
        cy.get('@productLocator').find('.product')
            .each(($el, index, $list) => {
                const textVeg = $el.find('h4.product-name').text()

                if (textVeg.includes('Cashews')) {
                    cy.wrap($el).find('button').click()
                }
        })

        cy.get('.cart-icon > img').click()
        cy.wait(1000)
        cy.get('.cart-preview > .action-block > button').click()

    })

})
