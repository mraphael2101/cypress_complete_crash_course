try {
    // Do something
}
catch(err) {
    throw new TypeError("Data mismatch due to either a Production Defect or an Environment Issue");
}
finally {
    console.log("Do something");
}