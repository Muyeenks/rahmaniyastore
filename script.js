// Wait for the webpage to fully load before running the script
document.addEventListener("DOMContentLoaded", function() {
    
    // Find the H2 element where we want to put our greeting
    const greetingElement = document.getElementById("dynamic-greeting");
    
    // Get the current time
    const currentHour = new Date().getHours();
    let greetingText = "Welcome to Rahmaniyastore";

    // Determine the greeting based on the hour
    if (currentHour < 12) {
        greetingText = "Good Morning! Welcome to Rahmaniyastore";
    } else if (currentHour < 18) {
        greetingText = "Good Afternoon! Welcome to Rahmaniyastore";
    } else {
        greetingText = "Good Evening! Welcome to Rahmaniyastore";
    }

    // Update the text on the website
    greetingElement.innerText = greetingText;
});