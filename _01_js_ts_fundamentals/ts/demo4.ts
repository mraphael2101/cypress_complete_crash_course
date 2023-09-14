import { expect } from 'chai';

const data = [
    {
        planId: "somevalue1",
        booked: [
            {
                details: [
                    {
                        name: "mark",
                        age: "21",
                    },
                    {
                        name: "john",
                        age: "24",
                    },
                ],
            },
        ],
    },
    {
        planId: "somevalue2",
        booked: [
            {
                details: [
                    {
                        name: "mark",
                        age: "21",
                    },
                    {
                        name: "john",
                        allocated: false,
                        outcome: {
                            id: "123",
                            statement: "text"
                        }
                    },
                ],
            },
        ],
    },
];

const assertData = (data: any) => {
    expect(data).to.have.length(2);

    for (const plan of data) {
        expect(plan.planId).to.be.oneOf(["somevalue1","somevalue2"]);

        for (const booked of plan.booked) {
            expect(booked.details).to.be.an.instanceof(Array);

            for (const detail of booked.details) {
                expect(plan.planId).to.be.oneOf(["somevalue1","somevalue2"]);
                expect(detail.age).to.be.a.string;
            }

            if (booked.allocated) {
                expect(booked.outcome).to.be.an.instanceof(Object);
                expect(booked.outcome.id).to.equal("123");
                expect(booked.outcome.statement).to.equal("text");
            }
        }
    }
};

assertData(data);
