
export const ENV = () => {
    if (Cypress) {
        return Cypress.env('TEST_ENV');
    }
}

export const IS_ZEPHYR = () => {
    if (Cypress) {
        return Cypress.env('IS_ZEPHYR');
    }
}

export const DYNAMO_DB = () => {
    if (Cypress) {
        return Cypress.env('CYPRESS_DYNAMO_DB');
    }
}