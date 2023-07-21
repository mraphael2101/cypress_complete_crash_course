async function main() {
    // Define an asynchronous function that returns a promise
    async function getUsers() {
        // Make an HTTP request to get a list of users
        const response = await fetch("https://api.example.com/users");

        // Check if the response was successful
        if (response.ok) {
            // Parse the response data
            const users = await response.json();

            // Return the list of users
            return users;
        } else {
            // Throw an error
            throw new Error(response.statusText);
        }
    }

    // Call the getUsers() function and get the promise
    const promise = getUsers();

    // Do something else while the promise is being resolved
    // ...

    // Get the result of the promise
    const users = await promise;

    // Do something with the list of users
    // ...
}

// Call the main() function
main();
