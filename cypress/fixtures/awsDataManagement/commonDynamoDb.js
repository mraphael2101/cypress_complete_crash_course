import {BatchWriteCommand, DynamoDBDocumentClient, ScanCommand} from '@aws-sdk/lib-dynamodb';
import {
    REGION
} from '../../support/constants';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';

/**
 * @function getAllData
 * @description Generic function to instantiate the Dynamo DB client and to perform the select all query
 * @returns void
 * @param tableName
 * @param accessKeyId
 * @param secretAccessKey
 * @param sessionToken
 */
export const getAllData = async (tableName, accessKeyId, secretAccessKey, sessionToken) => {

    const CLIENT = new DynamoDBClient({
        region: REGION,
        credentials: {
            accessKeyId: accessKeyId,
            secretAccessKey: secretAccessKey,
            sessionToken: sessionToken
        }
    });

    const DOC_CLIENT = DynamoDBDocumentClient.from(CLIENT);

    try {
        const scanCommand = new ScanCommand({
            TableName: tableName
        });
        const response = await DOC_CLIENT.send(scanCommand);
        return JSON.stringify(response.Items);
    } catch (err) {
        throw new Error('DB query results not returned during scan. Please check OIDC credentials');
    }
};

/**
 * @function deleteAllData
 * @description Generic function to instantiate the Dynamo DB client and to perform delete all data query
 * @returns void
 * @param args Json object includes the tableName and value, and column name(s) as key labeled as e.g. columnName1 and value
 * @param accessKeyId
 * @param secretAccessKey
 * @param sessionToken
 */
export const deleteAllData = async (args, accessKeyId, secretAccessKey, sessionToken) => {

    const CLIENT = new DynamoDBClient({
        region: REGION,
        credentials: {
            accessKeyId: accessKeyId,
            secretAccessKey: secretAccessKey,
            sessionToken: sessionToken
        }
    });

    const DOC_CLIENT = DynamoDBDocumentClient.from(CLIENT);

    let argsLength = Object.keys(args).length;

    try {
        const command = new ScanCommand({ TableName: `${args.tableName}` });
        let deleteParams;
        await CLIENT.send(command).then(data => {
            if (!data.Items) {
                throw new Error('No data found in response');
            }

            data.Items.forEach((item) => {
                if (argsLength === 2) {
                    deleteParams = {
                        TableName: args.tableName,
                        Key: {
                            [args.columnName1]: item[args.columnName1]
                        }
                    };
                }
                if (argsLength === 3) {
                    deleteParams = {
                        TableName: args.tableName,
                        Key: {
                            [args.columnName1]: item[args.columnName1],
                            [args.columnName2]: item[args.columnName2]
                        }
                    };
                }
                const deleteCommand = new DeleteCommand(deleteParams);
                DOC_CLIENT.send(deleteCommand);
            });
        });
        return 'Deletion completed successfully';
    } catch (error) {
        throw error;
    }
};

/**
 * @function getDataItemValue
 * @description Function to access the property using bracket notation with dynamic keys
 * @returns void
 * @param dataItems
 * @param itemIndex
 * @param propertyIndex
 */
function getDataItemValue(dataItems, itemIndex, propertyIndex) {
    if (0 <= itemIndex && itemIndex < dataItems.length) {
        const dataItem = dataItems[itemIndex];
        const propertyKeys = Object.keys(dataItem);
        if (0 <= propertyIndex && propertyIndex < propertyKeys.length) {
            // return dataItem[propertyKeys[propertyIndex]] as string;
            return dataItem[propertyKeys[propertyIndex]];
        }
    }
}

/**
 * @function insertAllData
 * @description Generic Function to instantiate the Dynamo DB client and to perform an insert all data query
 * dynamically regardless of the structure of each row
 * @returns void
 * @param args Json object includes the tableName and value, rows as DataItem[], and column name(s) as key
 * labeled as e.g. columnName1 and value
 * @param accessKeyId
 * @param secretAccessKey
 * @param sessionToken
 */
// export const insertAllData = async (args: any, accessKeyId: string, secretAccessKey: string, sessionToken: string): Promise<string> => {
//
//     const CLIENT = new DynamoDBClient({
//         region: REGION,
//         credentials: {
//             accessKeyId: accessKeyId,
//             secretAccessKey: secretAccessKey,
//             sessionToken: sessionToken
//         }
//     });
//
//     const DOC_CLIENT = DynamoDBDocumentClient.from(CLIENT);
//
//     let dataItems: DataItem[] = args.rows;
//     let command;
//     let putRequests;
//
//     try {
//         putRequests = args.rows.map((row: any, index: number) => ({
//             PutRequest: {
//              Item: {
//                [args.columnName1]: getDataItemValue(dataItems, index, 0)!,
//                [args.columnName2]: getDataItemValue(dataItems, index, 1)!,
//                [args.columnName3]: getDataItemValue(dataItems, index, 2)!
//              }
//             }
//           }));
//
//         command = new BatchWriteCommand({
//             RequestItems: {
//                 [args.tableName]: putRequests
//             }
//         });
//         await DOC_CLIENT.send(command);
//         return 'Batch insert completed successfully';
//     } catch (error) {
//         throw error;
//     }
// };


/**
 * @function insertAllDataByRowArr
 * @description Generic Function to instantiate the Dynamo DB client and to perform an insert all data query
 * @returns void
 * @param args Json object includes the tableName, and rows as DataItem[]
 * @param accessKeyId
 * @param secretAccessKey
 * @param sessionToken
 */
export const insertAllDataByRowArr = async (args, accessKeyId, secretAccessKey, sessionToken) => {

    const CLIENT = new DynamoDBClient({
        region: REGION,
        credentials: {
            accessKeyId: accessKeyId,
            secretAccessKey: secretAccessKey,
            sessionToken: sessionToken
        }
    });

    try {
        const DOC_CLIENT = DynamoDBDocumentClient.from(CLIENT);
        const putRequests = args.rows.map((row) => ({
            PutRequest: {
                Item: row
            }
        }));
        let command = new BatchWriteCommand({
            RequestItems: {
                [args.tableName]: putRequests
            }
        });
        return await DOC_CLIENT.send(command);
    } catch (error) {
        throw error;
    }
};

export const handleData = async (args, accessKeyId, secretAccessKey, sessionToken) => {
    if (args.rows.length !== 0) {
        await insertAllDataByRowArr(args, accessKeyId, secretAccessKey, sessionToken);
        return 'All data inserted'
    }
    if (args.rows.length === 0) {
        await deleteAllData(args, accessKeyId, secretAccessKey, sessionToken);
        return 'All data erased'
    }
};