function removeNamesIfNotInList(attendeeParties: Array<{
    planId: string;
    parties: Array<{
        attendees: Array<{
            name: string;
        }>;
    }>;
}>, namesList: string[]): Array<{
    planId: string;
    names: string[];
}> {
    const planDetails = [];
    for (const party of attendeeParties) {
        const names = [];
        for (const attendee of party.parties[0].attendees) {
            // check if the name is not in the list
            if (!namesList.includes(attendee.name)) {
                names.push(attendee.name);
            }
        }
        // filter out empty names arrays
        if (names.length > 0) {
            planDetails.push({
                planId: party.planId,
                names,
            });
        }
    }
    return planDetails;
}

const attendeeParties3 = [
    {
        planId: "somevalue1",
        parties: [
            {
                attendees: [
                    {
                        name: "anothervalue1",
                    },
                    {
                        name: "anothervalue2",
                    },
                ],
            },
        ],
    },
    {
        planId: "somevalue2",
        parties: [
            {
                attendees: [
                    {
                        name: "anothervalue3",
                    },
                ],
            },
        ],
    },
];

console.log(removeNamesIfNotInList(attendeeParties3, ['anothervalue3']));
