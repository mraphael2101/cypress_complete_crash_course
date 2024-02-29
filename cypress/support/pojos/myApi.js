class MyApi {

    validateTokenIsNotPresentInDynamoDbTable(awsSavedStateForSomeDbTable) {
        let tblToken;
        cy.log(JSON.stringify(awsSavedStateForSomeDbTable));

        cy.readFile(someFileRespPath).then(respObj => {
            let body = respObj.body;
            const token = body['attr.with.dot'];

            cy.wrap(awsSavedStateForSomeDbTable).then(json => {
                const objectValues = Object.values(json);

                for (let i in objectValues) {
                    tblToken = objectValues[i].token;

                    if (token === tblToken) {
                        fail('Test failed as the token remains present in the db table which is under test');
                    }
                }
            });
        });
    };

    call_my_api_with_base_auth() {
        cy.request({
            method: 'POST',
            url: `https://some_url.com`,
            auth: {
                username: 'madeup',
                password: 'madeup2'
            }
        })
    }

}

const myApi = new MyApi();
export default myApi;