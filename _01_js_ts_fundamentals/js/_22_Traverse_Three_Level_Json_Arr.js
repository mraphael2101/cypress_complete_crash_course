var myArr = [
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

for (let i = 0; i < myArr.length; i++) {
    // Level 1
    console.log(myArr[i].planId);
    for (let j = 0; j < myArr[i].parties.length; j++) {
        // Level 2
        console.log(myArr[i].parties[j].attendees);
        for (let k = 0; k < myArr[i].parties[j].attendees.length; k++) {
            // Level 3
            console.log(myArr[i].parties[j].attendees[k].name);
        }
    }
}