const { test, expect } = require('@playwright/test');

test('Complete Flight Booking Flow', async ({ page }) => {
  
  // --- PART 1: SEARCH ---
  console.log("1. Searching for flights...");
  await page.goto('https://blazedemo.com/');
  await page.selectOption('select[name="fromPort"]', 'Boston');
  await page.selectOption('select[name="toPort"]', 'London');
  await page.click('input[type="submit"]');

  // --- PART 2: CHOOSE FLIGHT ---
  console.log("2. Choosing the first flight...");
  // This finds the first "Choose This Flight" button and clicks it
  await page.locator('input[type="submit"]').first().click();

  // --- PART 3: FILL PASSENGER DETAILS ---
  console.log("3. Filling out passenger details...");
  // We use .fill() to type into boxes
  await page.fill('#inputName', 'Automation Bot');
  await page.fill('#address', '123 Robot Street');
  await page.fill('#city', 'Tech City');
  await page.fill('#zipCode', '90210');
  await page.fill('#creditCardNumber', '1234 5678 9999');

  // --- PART 4: PURCHASE ---
  console.log("4. Buying the ticket...");
  await page.click('text=Purchase Flight');

  // --- PART 5: VERIFY SUCCESS ---
  // Check if the big header (h1) says "Thank you"
  await expect(page.locator('h1')).toContainText('Thank you for your purchase');
  
  console.log("✅ MISSION ACCOMPLISHED: Ticket Purchased!");
// Verify success
  await expect(page.locator('h1')).toContainText('Thank you for your purchase');
  
  // TAKE A SCREENSHOT
  await page.screenshot({ path: 'booking_success.png' });

  console.log("✅ MISSION ACCOMPLISHED: Ticket Purchased!");
});