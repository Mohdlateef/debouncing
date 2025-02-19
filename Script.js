let userinput = document.getElementById("input")


// Variable to keep track of the timeout ID
let debounceTimer;

userinput.addEventListener("input", (e) => {
    // Clear the previous timeout if the user keeps typing
    clearTimeout(debounceTimer);

    // Set a new timeout, this will execute only after the user stops typing for 2 seconds
    debounceTimer = setTimeout(() => {
        console.log("clicked");
        console.log(e.target.value);
    }, 2000); // Delay of 2 seconds (2000ms)
});