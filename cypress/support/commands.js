// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
// please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************


// This is a common function that can be reused across tests
Cypress.Commands.add('selectProduct', (productName) => {
    cy.get('h4.card-title')
        .each(($el, index, $list) => {
            if($el.text().includes(productName)) {
                cy.get('button.btn-info')
                    .eq(index)
                    .click()
            }
        })
})

// How to make the Login API call extract the response token
Cypress.Commands.add("LoginAPI", () => {
    cy.request(
        "POST",
        "https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            "userEmail":"rahulshetty@gmail.com",
            "userPassword":"Iamking@00"
        }
    ).then(function (response) {
        expect(response.status).to.eq(200);

        // Make the variable global by using the Cypress environment variable value
        Cypress.env('token', response.body.token);
    })
})

/**
 * @description This Method is used to call the api request
 * @param methodType methodType of the request
 * @param isFail if its enabled, method will fail depending on the status code
 */
Cypress.Commands.add(
    'getServiceRequest',
    (serviceUrl, payload, headers, methodType, isFail) => {
        const parameters = {
            method: methodType,
            url: serviceUrl,
            timeout: 200000,
            headers: headers,
            failOnStatusCode: isFail
        };
        if (methodType === 'POST' || methodType === 'PUT') {
            parameters['body'] = payload;
        }
        cy.request(parameters).then(response => {
            return response;
        });
    }
);

Cypress.Commands.add('logger', message => {
    cy.task('log', message);
});