const { test, expect } = require('@playwright/test');

test('Create a new user using API', async ({ request }) => {
  
  // 1. Define our data
  const userData = {
    title: 'Playwright Automation',
    body: 'This request was sent by Playwright Test Runner',
    userId: 1
  };

  // 2. Send the POST request
  // Notice we use 'request' which Playwright gives us automatically
  const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: userData
  });

  // 3. The Assertion (The "Check")
  // Instead of "if status == 201", we write this:
  expect(response.status()).toBe(201);

  // 4. Validate the data
  const responseBody = await response.json();
  console.log("Server Response:", responseBody);

  // Check if the server gave us an ID back
  expect(responseBody.id).toBeDefined();
});