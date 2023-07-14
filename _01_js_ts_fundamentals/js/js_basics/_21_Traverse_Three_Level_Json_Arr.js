var arr = [
    {
        "level1Id": "level1IdVal",
        "level1Entitled": false,
        "trips": [
            {
                "level2Id": "Mark",
                "level2Entitled": false,
                "rides": [
                    {
                        "level3Id": "John",
                        "level3Entitled": true
                    },
                    {
                        "level3Id": "James",
                        "level3Entitled": false
                    }
                ]
            },
            {
                "level2Id": "Peter",
                "level2Entitled": true,
                "rides": [
                    {
                        "level3Id": "Sami",
                        "level3Entitled": true
                    },
                    {
                        "level3Id": "Dora",
                        "level3Entitled": true
                    }
                ]
            }
        ]
    }
]


for (let i = 0; i < arr.length; i++) {
    // Level 1
    console.log(arr[i].level1Id);
    console.log(arr[i].level1Entitled);
    for (let j = 0; j < arr[i].trips.length; j++) {
        // Level 2
        console.log(arr[i].trips[j].level2Id);
        console.log(arr[i].trips[j].level2Entitled);
        for (let k = 0; k < arr[i].trips[j].rides.length; k++) {
            // Level 3
            console.log(arr[i].trips[j].rides[k].level3Id);
            console.log(arr[i].trips[j].rides[k].level3Entitled);
        }
    }
}
