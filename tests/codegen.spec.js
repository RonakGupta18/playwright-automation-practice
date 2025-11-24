import { test, expect } from '@playwright/test';

test('Complete Checkout Flow', async ({ page }) => {
  // 1. Go to the site
  await page.goto('https://www.saucedemo.com/');

  // 2. Login
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // 3. Add Backpack to Cart
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  
  // 4. Go to Cart
  await page.locator('[data-test="shopping-cart-link"]').click();
  
  // 5. Checkout
  await page.locator('[data-test="checkout"]').click();

  // 6. Fill Information
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('John');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('Doe');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('12345');
  await page.locator('[data-test="continue"]').click();
  
  // 7. Finish
  await page.locator('[data-test="finish"]').click();
  
  // --- VERIFICATION (This is the new part) ---
  // This ensures the "Thank you" message is visible
  await expect(page.getByText('Thank you for your order!')).toBeVisible();
});