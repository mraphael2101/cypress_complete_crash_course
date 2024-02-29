import myApiInstance from "../pojos/myApi";

describe("API Test suite", function () {

    it("Call an api with base authentication", function () {

        myApiInstance.call_my_api_with_base_auth();

    })

})