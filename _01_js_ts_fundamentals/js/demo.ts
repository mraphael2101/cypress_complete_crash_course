function getPlanDetails(attendeeParties: Array<{
    planId: string;
    parties: Array<{
        attendees: Array<{
            name: string;
        }>;
    }>;
}>): {
    [planId: string]: string[];
} {
    const planDetails = {};
    for (const party of attendeeParties) {
        const names = [];
        for (const attendee of party.parties[0].attendees) {
            names.push(attendee.name);
        }
        planDetails[party.planId] = names;
    }
    return planDetails;
}

const attendeeParties = [
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

console.log(getPlanDetails(attendeeParties));
