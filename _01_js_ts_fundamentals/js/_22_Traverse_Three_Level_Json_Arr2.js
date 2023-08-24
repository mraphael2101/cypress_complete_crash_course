var body = {
    "attendeeParties": [
        {
            "planId": "somevalue1",
            "parties": [
                {
                    "attendees": [
                        {
                            "name": "anothervalue1",
                        }
                    ]
                },
            ]
        },
        {
            "planId": "somevalue2",
            "parties": [
                {
                    "attendees": [
                        {
                            "name": "anothervalue2",
                        }
                    ]
                },
            ]
        }
    ]
}

const planDetails = {};

for (let i = 0; i < body.attendeeParties.length; i++) {
    const data = {
        planId: body.attendeeParties[i].planId,
        name: body.attendeeParties[i].parties[0].attendees[0].name
    };

    planDetails.planId = data.planId
    planDetails.name = data.name
    console.log(planDetails)
}


