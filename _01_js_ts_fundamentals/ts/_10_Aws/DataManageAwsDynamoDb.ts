import {
  BatchWriteItemCommand,
  CreateTableCommand, DeleteTableCommand,
  DescribeTableCommand,
  DynamoDBClient
} from '@aws-sdk/client-dynamodb';
import {
  BatchWriteCommand,
  DeleteCommand,
  ScanCommand,
  DynamoDBDocumentClient, PutCommand
} from '@aws-sdk/lib-dynamodb';
var tableName1 = 'table1'
var region = 'eu-west-1'
var accessKeyId = 'madeup'
var secretAccessKey = 'madeup'
const client = new DynamoDBClient({
  region: region,
  credentials: {
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey
  }
});
const docClient = DynamoDBDocumentClient.from(client);

export interface Row {
  SomeType: string;
  AnotherType: string;
}

const table1Params = {
  TableName: tableName1,
};

export const getAllTable1Records = async () => {
  const scanCommand = new ScanCommand({
    ProjectionExpression: '#Column1, Column2, Column3',
    ExpressionAttributeNames: { '#Column1': 'Column1' },
    TableName: tableName1
  });
  const response = await docClient.send(scanCommand);
  console.log(JSON.stringify(response.Items));
  return JSON.stringify(response.Items);
};

export const writeAllDataToAwsDynamoDb = async (rows: Row[], tableName: string) => {
  const putRequests = rows.map(row => ({
    PutRequest: {
      Item: row
    }
  }));
  const command = new BatchWriteCommand({
    RequestItems: {
      [tableName]: putRequests
    }
  });
  return await docClient.send(command);
};

export const removeAllTable1Records = async () => {
  const command = new ScanCommand(table1Params);
  client.send(command).then((data) => {
    data.Items?.forEach((item) => {
      const deleteParams = {
        TableName: tableName1,
        Key: {
          Column1: item.Column1,
          // Column2: item.Column2
        }
      };
      const deleteCommand = new DeleteCommand(deleteParams);
      docClient.send(deleteCommand);
    })
  }).catch((error) => {
    console.error(error);
  });
};

export const insertAllTable1Records = async (rows: Row[]) => {
  const putRequests = rows.map(row => ({
    PutRequest: {
      Item: {
        'Column1': row.SomeType,
        'Column2': row.AnotherType,
      }
    }
  }));
  const command = new BatchWriteCommand({
    RequestItems: {
      [tableName1]: putRequests
    }
  });
  return await docClient.send(command);
};

export async function waitForTableToBeCreated(tableName: string): Promise<void> {
  while (true) {
    try {
      await docClient.send(new DescribeTableCommand({ TableName: tableName }));
      break;
    } catch (error) {
      if ((error as Error).name !== 'ResourceNotFoundException') {
        throw error;
      }
    }
    await new Promise((resolve) => setTimeout(resolve, 8000));
  }
}

export const createSomeTable = async () => {

  const input = {
    AttributeDefinitions: [
      {
        AttributeName: 'SomeType',
        AttributeType: 'S'
      },
      {
        AttributeName: 'AnotherType',
        AttributeType: 'S'
      }
    ],
    KeySchema: [
      {
        AttributeName: 'SomeType',
        KeyType: 'HASH'
      },
      {
        AttributeName: 'AnotherType',
        KeyType: 'RANGE'
      }
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1
    },
    TableName: tableName1
  };

  try {
    const command = new CreateTableCommand(input);
    const response = await client.send(command);
    console.log(response);

    if (response.TableDescription?.TableStatus! !== "CREATING") {
      throw new Error(`HTTP error: ${response.TableDescription?.TableStatus}`);
    }
  } catch (error) {
    console.error(`Something went wrong when creating the table: ${error}`);
  }

};

export const insertSingleTable1Record = async (column1Val: string, column2Val: string) => {

  const putCommand = new PutCommand({
    TableName: tableName1,
    Item: {
      SomeType: column1Val,
      AnotherType: column2Val,
    }
  });

  try {
    const response = await docClient.send(putCommand);
    console.log(response);

    if (response.$metadata.httpStatusCode !== 200) {
      throw new Error(`HTTP error: ${response.$metadata.httpStatusCode}`);
    }
  } catch (error) {
    console.error(`Error when inserting value into Data Table: ${error}`);
  }

};

export const removeSingleTable1Record = async (column1Val: string, column2Val: string) => {

  const deleteCommand = new DeleteCommand({
    TableName: tableName1,
    Key: {
      SomeType: column1Val,
      AnotherType: column2Val
    }
  });

  const response = await docClient.send(deleteCommand);
  console.log(response);

};

export const deleteTable = async () => {

  const command = new DeleteTableCommand({
    TableName: tableName1
  });

  const response = await client.send(command);
  console.log(response);

};
