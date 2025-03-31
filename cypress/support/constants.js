
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
        return Cypress.env('DYNAMO_DB');
    }
}

export const MY_FIRST_TEST_STEP = () => {
    if (Cypress) {
        return Cypress.env('MY_FIRST_TEST_STEP');
    }
}

export const SAMPLE_TEST_SUITE = () => {
    if (Cypress) {
        return Cypress.env('SAMPLE_TEST_SUITE');
    }
}
