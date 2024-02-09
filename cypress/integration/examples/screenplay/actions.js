import { Actor } from 'cypress-screenplay';
import { HomePage, LoginPage, SearchResultsPage } from '';

export const navigateTo = (page: any) => {
    return new Cypress.Action('Navigate to', async (actor: Actor) => {
        await cy.visit(page.url);
    });
};

export const login = (username: string, password: string) => {
    return new Cypress.Action('Login', async (actor: IActor) => {
        await cy.get('input[name="username"]').type(username);
        await cy.get('input[name="password"]').type(password);
        await cy.get('button[type="submit"]').click();
    });
};

export const searchForItem = (item: string) => {
    return new Cypress.Action('Search for item', async (actor: IActor) => {
        await cy.get('input[type="search"]').type(item);
        await cy.get('button[type="submit"]').click();
    });
};
