class ProductPage {

    getCheckoutButton()
    {
        return cy.get("#navbarResponsive > .navbar-nav > .nav-item > .nav-link")
    }

}

// This line is necessary to make the class available to all other files in the framework
export default ProductPage;
