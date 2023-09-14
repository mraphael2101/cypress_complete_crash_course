const body = {
    "reply":
        [
            {
                "id": "abc",
                // The `info` property is not defined for this object.
            },
            {
                "id": "abc",
                "info": [
                    {
                        "name": "name1",
                        "age": "21"
                    },
                    {
                        "name": "",
                        "deceased": false,
                        "reasons": [
                            {
                                "first": "dynamic value 1",
                                "second": "dynamic value 2"
                            },
                            {
                                "first": "dynamic value 1",
                                "second": "dynamic value 2"
                            }
                        ]
                    }
                ]
            }
        ]
};

function validateBody(body) {
    // Iterate over the reply objects.
    for (const reply of body.reply) {
        // Check if the info property is defined.
        if (reply.info) {
            // Iterate over the info objects in each reply object.
            for (const info of reply.info) {
                // Check if the name property is blank.
                if (info.name === "") {
                    // Check if the deceased property is false.
                    if (info.deceased === true) {
                        throw new Error("The deceased property must be false if the name property is blank.");
                    }

                    // Check if the reasons property is populated.
                    if (info.reasons.length === 0) {
                        throw new Error("The reasons property must be populated.");
                    }

                    // Iterate over the reasons objects.
                    for (const reason of info.reasons) {
                        // Check if the `first` and `second` keys are present in the reasons object.
                        if ("first" in reason && "second" in reason) {
                            // Do nothing.
                        } else {
                            throw new Error("The reasons object must have the `first` and `second` key value pairs.");
                        }
                    }
                }
            }
        }
    }
}

validateBody(body);
