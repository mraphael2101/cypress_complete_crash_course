function getDateAsStringBasedOnPastTense(pastTense: string): string {
    let sysdate = new Date();
    let currentYear = sysdate.getFullYear();
    let currentMonth = sysdate.getMonth() + 1;
    let currentDay = sysdate.getDate();

    let newDay = currentDay;

    if(pastTense === 'TODAY') {
        // Do nothing
    }
    else if (pastTense === 'BEFORE TODAY') {
        newDay--;
    }
    else if (pastTense === 'AFTER TODAY') {
        newDay++;
    }
    else {
        // throw an exception
    }

    let newMonth = currentMonth;
    let newYear = currentYear;
    let daysInMonth = new Date(currentYear, currentMonth, 0).getDate();

    if(newDay > daysInMonth) {
        newMonth++;
        newDay = newDay - daysInMonth;

        // If the new month is December, increment the year and set the month to January (index 0)
        if(newMonth > 11) {
            newYear++;
            newMonth = 0;
        }
    }

    // If the new day is less than or equal to 0 decrement the month and set the days to be equal to the no of days the prevous month
    if(newDay <= 0) {
        newMonth--;

        // If the month is at index 0 i.e. January, decrement the year and set the month to index 11 i.e. November
        if(newMonth < 0) {
            newYear--;
            newMonth = 11;
        }

        let daysInPreviousMonth = new Date(newYear, newMonth + 1, 0).getDate();
        newDay = daysInPreviousMonth + newDay;
    }

    let yearString = String(newYear);
    let monthString = String(newMonth);
    let dayString = String(newDay);

    console.log(`${yearString}-${monthString}-${dayString}`);
    return `${yearString}-${monthString}-${dayString}`;
}

getDateAsStringBasedOnPastTense("Before today".toUpperCase());
getDateAsStringBasedOnPastTense("After today".toUpperCase());
getDateAsStringBasedOnPastTense("Today".toUpperCase());
