import {ENV, IS_ZEPHYR, MY_FIRST_TEST_STEP} from "./constants";

/**
 * @function getTestPlanData
 * @description function used to get the test urls that is defined in the Zephyr test plan
 **/
export const getTestPlanData = () => {
    cy.logger('GET TEST PLAN DATA FROM ZEPHYR');
    cy.fixture(TEST_DATA_FIXTURE).then(response => {
        cy.fixture(CONFIG_FIXTURE).then(config => {
            if (IS_ZEPHYR()) {
                const url = config.zephyr_config.baseUrl + 'v2/testplans/' + TEST_PLAN() + '?projectKey=' + PROJECT_NAME() + '&maxResults=100';
                let header = {
                    Authorization: ZEPHYR_TOKEN()
                }
                let payload = '';
                cy.getServiceRequest(url, payload, header, GET, true).
                then((response) => {
                    expect(response.status).to.eq(200);
                    const html = response.body.objective;
                    const jsonTables = new HtmlTableToJson(html);
                    const ary = [];
                    const obj = {};

                    cy.logger('TEST ENV IS :-' + ENV());

                    for (let m = 0; m < jsonTables._results[0].length; m++) {
                        const key = jsonTables._results[0][m].SERVICE_NAME;
                        const value = jsonTables._results[0][m][ENV()];
                        obj[key] = value;
                        ary.push(obj);
                    }
                    writeResponseDataToJsonInTestCase(JSON.stringify(obj), PRECONDITION, false);
                });
            } else {
                writeResponseDataToJsonInTestCase(JSON.stringify(response), PRECONDITION, false);
            }
        });
    });
};

export const updateTestExecutionStatus = (status, statusArray) => {
    if (Cypress.env(MY_FIRST_TEST_STEP()) !== 'git') {
        cy.fixture(CONFIG_FIXTURE).then(config => {
            if (IS_ZEPHYR()) {
                cy.logger('UPDATE TEST EXECUTION DATA IN ZEPHYR');
                var exeStatus;
                var testcaseKey = getTestName();
                var apiUrl = config.zephyr_config.baseUrl + 'v2/testexecutions?projectKey=' + PROJECT_NAME();
                var reportUrl = config.github.report_url + RUN_NUMBER();
                var actualResult = ' Report URL : ' + reportUrl;
                if (status === 'passed') {
                    exeStatus = 'Pass';
                }
                if (status === 'failed') {
                    exeStatus = 'Fail';
                }

                let header = {
                    Authorization: ZEPHYR_TOKEN()
                }
                var testArray = [];
                var obj = {};
                var exeStatus1 = 'Pass';
                for (var q = 0; q < statusArray.length; q++) {
                    var status1 = statusArray[q]
                    if (status1 === 'passed') {
                        exeStatus1 = 'Pass';
                    }
                    if (status1 === 'failed') {
                        exeStatus1 = 'Fail';
                    }
                    obj['statusName'] = exeStatus1
                    obj['actualResult'] = actualResult
                    testArray.push(obj)
                }
                let body = {
                    projectKey: PROJECT_NAME(),
                    testCaseKey: testcaseKey,
                    testCycleKey: testCycleKeyMap.testcycleKey,
                    statusName: exeStatus,
                    comment: actualResult,
                    executedById: config.zephyr_config.executedby_id,
                    assignedToId: config.zephyr_config.executedby_id,
                    testScriptResults: testArray
                }
                cy.getServiceRequest(apiUrl, body, header, POST, true).
                then((response) => {
                    expect(response.status).to.eq(201);
                });
            }
        });
    }
}

export const getTestName = () => {
    const tags = window.testState.pickle.tags.map(tag => tag.name);
    return tags[0].split('=')[1];
};

export const getTestDataJsonPath = (fileName) => {
    const testCaseKey = getTestName();
    const testCycleKey = testCycleKeyMap.testcycleKey;
    return TEMP_TESTDATA_DYNAMIC_PATH + testCycleKey + '/' + testCaseKey + '/' + fileName + '.json';
};

export const getServiceRequest = (payload, methodType, fileName) => {
    cy.readFile(`cypress/userData/${OAUTH}.json`).then(token => {
        const header = {
            Authorization: token.Authorization
        }

        getServiceURL(fileName).then((url) => {
            cy.getServiceRequest(url, payload, header, methodType, false).
            then((response) => {
                writeResponseDataToJsonInTestCase(response, fileName, true);
            });
        });
    });
}

/**
 * @function getDbTableNamePrefix
 * @description Derives the prefix of the DynamoDB Table-Name based on the Environment variable
 * @returns void
 */
export const getDbTableNamePrefix = () => {
    let value = ENV().toLowerCase();
    return value.replace('env_', '');
}