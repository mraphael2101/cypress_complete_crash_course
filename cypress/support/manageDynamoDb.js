import {deleteAllData, getAllData, handleData} from '../fixtures/awsDataManagement/CommonDynamoDb';

/**
 * Wrapper method necessary to execute the get all data query and to export
 * variable from cypress.config.ts to cypress/fixtures subdirectory
 * */
export const performDynamoDbQueryOutsideCy_GetAllData = (tableName, accessKeyId, secretAccessKey, sessionToken) => {
    return getAllData(tableName, accessKeyId, secretAccessKey, sessionToken);
}

/**
 * Wrapper method necessary to execute the delete all data query and to export
 * variable from cypress.config.ts to cypress/fixtures subdirectory
 * */
export const performDbQueryOutsideCy_DeleteAllData = (args, accessKeyId, secretAccessKey, sessionToken) => {
    return deleteAllData(args, accessKeyId, secretAccessKey, sessionToken);
}

/**
 * Wrapper method necessary to execute the insert all data as batch query and to export
 * variable from cypress.config.ts to cypress/fixtures subdirectory
 * */
// export const performDynamoDbQueryOutsideCy_InsertAllDataAsBatch = (args: any, accessKeyId: string, secretAccessKey: string, sessionToken: string) => {
//     return insertAllData(args, accessKeyId, secretAccessKey, sessionToken);
// }

/**
 * Wrapper method necessary to execute the insert all data as batch query and to export
 * variable from cypress.config.ts to cypress/fixtures subdirectory
 * */
export const performDynamoDbQueryOutsideCy_InsertAllDataAsBatchByRowArr = (args, accessKeyId, secretAccessKey, sessionToken) => {
    return handleData(args, accessKeyId, secretAccessKey, sessionToken);
}