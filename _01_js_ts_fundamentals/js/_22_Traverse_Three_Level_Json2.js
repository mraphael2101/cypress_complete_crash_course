// var body: {
//     "attendeeParties": [
//         {
//             "planId": "somevalue1",
//             "parties": [
//                 {
//                     "attendees": [
//                         {
//                             "name": "anothervalue1",
//                         }
//                     ]
//                 },
//             ]
//         },
//         {
//             "planId": "somevalue2",
//             "parties": [
//                 {
//                     "attendees": [
//                         {
//                             "name": "anothervalue2",
//                         }
//                     ]
//                 },
//             ]
//         }
//     ]
// }


var attendeeParties =
[
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



const planDetails = {};

for (let i = 0; i < myArr.length; i++) {
    const data = {
        planId: myArr[i].planId,
        name: myArr[i].parties[0].attendees[0].name
    };

    planDetails.planId = data.planId
    planDetails.name = data.name
    console.log(planDetails)
}


