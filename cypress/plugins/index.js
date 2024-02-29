import { getAllData } from '../fixtures/awsDataManagement/CommonDynamoDb';

/**
 * A custom plugin that exists to run the DynamoDb query outside of Cypress
 * in an independent Node.js process, which is necessary as Cypress does not
 * support the OIDC Protocol and therefore the query will not work if executed
 * directly inside Cypress in a conventional manner
 */
// module.exports = (
//     on: (
//     arg0: string,
//     arg1: {
//         performDynamoDbQueryOutsideCypress_GetAllData: (tableName: string, accessKeyId: string, secretAccessKey: string, sessionToken: string) => Promise<string>
//     }
// ) => void,
//     config: any
// ): string => {
//     on('task', {
//         performDynamoDbQueryOutsideCypress_GetAllData: async (tableName: string, accessKeyId: string, secretAccessKey: string, sessionToken: string) => {
//             return await getAllData(tableName, accessKeyId, secretAccessKey, sessionToken);
//         }
//     });
//
//     return config;
// };