const axios = require('axios');

const url = "https://jsonplaceholder.typicode.com/posts";

const userData = {
    title: "Automation Test",
    body: "Checking for 201 status",
    userId: 1
};

console.log("--- Starting Test ---");

axios.post(url, userData)
  .then(response => {
    // --- THIS IS THE NEW PART (THE ASSERTION) ---
    
    // Check 1: Is the status 201?
    if (response.status === 201) {
        console.log("✅ TEST PASSED: User was created successfully.");
    } else {
        console.error("❌ TEST FAILED: Expected 201 but got " + response.status);
        // This command tells the computer the test failed
        process.exit(1); 
    }

    // Check 2: Did the server return an ID?
    if (response.data.id) {
        console.log(`✅ DATA CHECK PASSED: New ID is ${response.data.id}`);
    } else {
        console.error("❌ DATA CHECK FAILED: No ID returned.");
    }

  })
  .catch(error => {
    console.error("❌ SYSTEM ERROR:", error.message);
  });