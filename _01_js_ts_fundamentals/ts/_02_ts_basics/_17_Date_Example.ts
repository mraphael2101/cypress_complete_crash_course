
function convertStringToDate(strDate: string): void {
    const [month, day, year] = strDate.split('/');
    try {
        var dateEnabled: Date = new Date(day + "/" + month + "/" + year);
        console.log(dateEnabled.toDateString())
    } catch (error) {
        console.log(error);
    }
}

convertStringToDate("30/10/2023")
