
/* Partial types are types that will eventually become what is specified between the <> braces.
* Until they do, all members of the Partial type will be optional */

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string,
                          description: string,
                          date: Date) : CourseGoal {

    let courseGoal: Partial<CourseGoal> = {};
        courseGoal.title = title;
        courseGoal.description = description;
        courseGoal.completeUntil = date;

        // To return the courseGoal object we must cast the partial object
        return courseGoal as CourseGoal;

}