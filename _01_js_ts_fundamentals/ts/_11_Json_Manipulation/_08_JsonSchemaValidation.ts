import chai from 'chai';
import chaiJsonSchema from 'chai-json-schema';
chai.use(chaiJsonSchema);

/** @author Mark Raphael
 *  @function validateJsonResponseContract
 *  @description Contract checking enforced to ensure the integrity and consistency of the data:
 *  -> Presence of the required fields
 *  -> Absence of unexpected fields
 *  -> Nesting of objects and arrays according to the agreed json structure */

const sampleBody = {
    "reply":
        [
            {
                "id": "abc",
                "info": [
                    {
                        "name": "name1",
                        "age": "21"
                    }
                ]
            },
            {
                "id": "abc",
                "info": [
                    {
                        "name": "name5",
                        "age": "27"
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

function validateJsonResponseContract(sampleBody) {
    let someSchema = {
        type: 'array', // type of the schema is array which means that the schema must be an array of objects
        required: ['reasons'], // required property specifies the names of the properties that must be present in each object in the array. In this case, reasons
        properties: {
            // properties property defines the properties of each object in the array. in this case, reasons
            errors: {
                // reasons property is an array of objects that has the following properties
                type: 'array',
                minItems: 1,
                items: {
                    type: 'object',
                    required: ['first', 'second'],
                    properties: {
                        first: { type: 'string' },
                        second: { type: 'string' }
                    }
                }
            }
        }
    }

    for (const reply of sampleBody.reply) {
        if (!reply.id || reply.id.trim() === '') {
            throw new Error("The id property must be defined and cannot be an empty string.");
        }
        if (reply.info) {
            for (const info of reply.info) {
                if (
                    info.name === undefined ||
                    info.name === "" ||
                    info.name === null
                ) {
                    if (info.deceased === true) {
                        throw new Error("The deceased property must be false if the name property is blank.");
                    }

                    if (info.reasons.length === 0) {
                        throw new Error("The reasons property must be populated.");
                    }

                    for (const reason of info.reasons) {
                        if ("first" in reason && "second" in reason) {
                            assert.jsonSchema(info.reasons, someSchema);
                        } else {
                            throw new Error("The reasons object must have the `first` and `second` key value pairs.");
                        }
                    }
                }
            }
        }
    }
}

validateJsonResponseContract(sampleBody);
