class HomePage
{
    getEditBox()
    {
        return cy.get("input[name='name']:nth-child(2)")
    }

    getGender()
    {
        cy.get("select")
    }

}

// This line is necessary to make the class available to all other files in the framework
export default HomePage;
