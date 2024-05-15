import HomePage from "../../pages/HomePage";
import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import {DYNAMO_DB, SAMPLE_TEST_SUITE} from "../constants";
import myApiInstance from "../pojos/myApi";
const homePage = new HomePage()
const MY_TABLE_NAME = 'some_table_name';

// Mocha hooks
before(async function () {
    // Runs once before all tests in the block
    cy.log("before() -> Runs once before all tests in the block")
})

after(async function () {
    // Runs once after all tests in the block
    cy.log("after() -> Runs once after all tests in the block")
})

beforeEach(async function () {
    // Runs before each test in the block
    cy.log("beforeEach() -> Runs before each test in the block")
})

// Anonymous function syntax with ()=> is more readable than function() cant be used with beforeEach().js
Given('I open the Ecommerce Page', function () {
    cy.visit(Cypress.env('url') + "/angularpractice/")
})

When('I add items to my Cart', function () {
    cy.log("From fixtures -> " + this.data2.name)
    homePage.getEditBox().click()
})

When('I fill in the form details', function (dataTable) {
    dataTable.hashes().forEach((row) => {
        if(row.name !== "name") {
            cy.log(`${row.name} ${row.gender}`);
        }
    });
})

Then(/^I should see a flash message saying (.*) (.*)$/, function (username, password) {
    cy.log(username)
    if(username === 'ts01') {
        cy.log(password);
    }
});

// new cucumber specification for static parameter
Given("a POST Request is submitted to Service for a {string}", function (typeA) {
    cy.log(typeA);
});

let temp;

Given("I demonstrate passing vals after promise is resolved {string}",  (attrVal)=> {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        .then(function ()
        {
            temp = attrVal
            cy.log("internal print " + temp)
        })
        .then(function ()
        {
            cy.log("promise resolved then print " + temp)
        })
});

const getKeysArr = (dataTable, rowIndex) => {
    const keyArr= [''];
    try {
        const jsonKey = dataTable.rows()[rowIndex][1]; // 1 represents the second column
        const parsedKeys = JSON.parse(jsonKey);

        if (parsedKeys.length > 0) {
            parsedKeys.forEach((key: { S: string }) => {
                keyArr.push(key.S);
            });
        }
    } catch (error) {
        throw new Error('Error parsing Key:');
    }
    return keyArr;
}

Then('I verify that the token was removed from the sample table in Dynamo Db', async () => {
    if (DYNAMO_DB()) {
        cy.task('performDynamoDbQueryOutsideCypress_GetAllData', MY_TABLE_NAME).then(resultset => {
            if (resultset !== null && typeof resultset === 'string') {
                myApiInstance.validateTokenIsNotPresentInDynamoDbTable(JSON.parse(resultset));
            }
        }).then(() => {
            cy.log('ALL DATA READ FROM ' + MY_TABLE_NAME);
        });
    }
});

Given('the fictitious table items are configured as per below',
    async (dataTable) =>
    {
        // const items: DataItem2[] = [];
        const rows = dataTable.hashes();

        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            if (
                row.FirstCol !== 'EligibilityType' &&
                row.SecondCol !== 'EligibilityKey' &&
                row.ThirdCol !== 'DateEnabled'
            ) {
                // const item: any = {};
                const item = {};
                item.FirstCol = row.FirstCol;
                item.SecondCol = getKeysArr(dataTable, i);
                item.ThirdCol = row.SecondCol;
                items.push(item);
            }
        }

        if (DYNAMO_DB() && SAMPLE_TEST_SUITE()) {
            if (items.length !== 0) {
                cy.task('performDbQueryOutsideCypress_InsertAllDataAsBatch', {
                    tableName: 'SomeTableName',
                    rows: items,
                    columnName1: 'FirstCol',
                    columnName2: 'SecondCol',
                    columnName3: 'ThirdCol'
                }).then(() => {
                    cy.logger('ALL DATA INSERTED INTO SOMETABLENAME');
                });
            }
        }
    });
Then('I traverse through the datatables in different ways',
    async (dataTable) =>
    {
        /* dataTable.rows() Returns a two-dimensional array of strings, where each inner array represents a row in
        the data table. Each element within the inner array corresponds to a cell value in that particular row.
        Useful when you need to access data in a more structured way, especially if you have multiple columns or want
        to perform operations on specific rows. */
        const rows = dataTable.rows();
        for (const row of rows) {
            console.log(row); // Each row is an array of strings (cell values)
        }

        /* dataTableHashes() Returns an array of objects, where each object represents a row in the data table.
        The object's keys correspond to the header names of the data table, and the values correspond to the cell
        values in that row.
        Ideal when you want to directly access data by column names, making it more readable and easier to work with
        for scenarios involving named columns. */
        const rowObjects = dataTable.hashes();
        for (const rowObject of rowObjects) {
            console.log(rowObject.name, rowObject.age); // Access data by column names
        }
    }
);
