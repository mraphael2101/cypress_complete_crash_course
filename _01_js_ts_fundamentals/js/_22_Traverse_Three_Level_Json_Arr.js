var attendeesParties = [
    {
        "planId": "somevalue1",
        "parties": [
            {
                "attendees": [
                    {
                        "name": "name1",
                    },
                    {
                        "name": "name2",
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
                        "name": "name3",
                    },
                    {
                        "name": "name4",
                    }
                ]
            },
        ]
    }
]

const attParties = [];
for (let i = 0; i < attendeesParties.length; i++) {

    const data = {
        planId: attendeesParties[i].planId,
        names: []
    };

    for (let j = 0; j < attendeesParties[i].parties[0].attendees.length; j++) {
        data.names.push(attendeesParties[i].parties[0].attendees[j].name);
    }

    attParties.push(data);
}

console.log(attParties)

// for (let i = 0; i < myArr.length; i++) {
//     // Level 1
//     console.log(myArr[i].planId);
//     for (let j = 0; j < myArr[i].parties.length; j++) {
//         // Level 2
//         console.log(myArr[i].parties[j].attendees);
//         for (let k = 0; k < myArr[i].parties[j].attendees.length; k++) {
//             // Level 3
//             console.log(myArr[i].parties[j].attendees[k].name);
//         }
//     }
// }

// const planDetails = {};
//
// for (let i = 0; i < myArr.length; i++) {
//     const data = {
//         planId: myArr[i].planId,
//         name: myArr[i].parties[0].attendees[0].name
//     };
//
//     planDetails.planId = data.planId
//     planDetails.name = data.name
//     console.log(planDetails)
// }


