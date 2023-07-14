const getDate = (date: string): string => {
    const today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    const year = today.getFullYear();

    if (date === "TODAY") {
        day = today.getDate();
        month = today.getMonth() + 1;
    } else if (date === "BEFORE TODAY") {
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        day = yesterday.getDate();
        month = yesterday.getMonth() + 1;
    } else if (date === "AFTER TODAY") {
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        day = tomorrow.getDate();
        month = tomorrow.getMonth() + 1;
    }

    return `${day}/${month}/${year}`;
};

console.log("[ Today's Date ] " + getDate("TODAY"));
console.log("[ Today's Date - 1 ] " + getDate("BEFORE TODAY"));
console.log("[ Tomorrows Date ] " + getDate("AFTER TODAY"));
