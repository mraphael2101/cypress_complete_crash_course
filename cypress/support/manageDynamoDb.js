import { getAllData } from '../fixtures/awsDataManagement/CommonDynamoDb';

/**
 * Wrapper method necessary to execute the get all data query and to export
 * variable from cypress.config.ts to cypress/fixtures subdirectory
 * */

export const performDynamoDbQueryOutsideCy_GetAllData = (tableName, accessKeyId, secretAccessKey, sessionToken) => {
    return getAllData(tableName, accessKeyId, secretAccessKey, sessionToken);
}
