import { DynamoDBDocumentClient, ScanCommand } from '@aws-sdk/lib-dynamodb';
import {
    REGION
} from '../../support/constants';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';

/**
 * Code to instantiate the Dynamo DB client and to perform the query using Scan Command
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
        throw new Error('DB Query Results not returned during scan');
    }
};

