const axios = require('axios');

const url = "https://reqres.in/api/users?page=2";

console.log("Sending request...");

axios.get(url)
  .then(response => {
    // If successful:
    console.log(`Status Code: ${response.status}`);
    console.log("Data received:");
    console.log(response.data);
  })
  .catch(error => {
    // If failed:
    console.error("Error:", error);
  });