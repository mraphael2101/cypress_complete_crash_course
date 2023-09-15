function getPlanDetails2(attendeeParties: Array<{
    planId: string;
    parties: Array<{
        attendees: Array<{
            name: string;
        }>;
    }>;
}>): Array<{
    planId: string;
    names: string[];
}> {
    const planDetails = [];
    for (const party of attendeeParties) {
        const names = [];
        for (const attendee of party.parties[0].attendees) {
            names.push(attendee.name);
        }
        planDetails.push({
            planId: party.planId,
            names,
        });
    }
    return planDetails;
}

const attendeeParties2 = [
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

console.log(getPlanDetails2(attendeeParties2));
