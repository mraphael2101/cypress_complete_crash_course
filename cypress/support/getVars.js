/**
 * Wrapper method necessary to export variable from cypress.config.ts to
 * cypress/support subdirectory
 */

export const getCypressSomeVarValue = (someVar) => {
    return someVar;
}