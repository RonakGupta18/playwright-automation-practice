const { test, expect } = require('@playwright/test');

// --- CONFIGURATION START ---
// This tells Playwright to wait 1 second (1000ms) between every action
test.use({
  launchOptions: { slowMo: 1000 },
});
// --- CONFIGURATION END ---

test('Complete User Flow (Login -> Shop -> Logout)', async ({ page }) => {
  // 1. Login
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('.title')).toHaveText('Products');

  // 2. Shop
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page.locator('[data-test="item-4-title-link"]')).toHaveText('Sauce Labs Backpack');

  // 3. Logout
  await page.locator('#react-burger-menu-btn').click();
  // We keep this small pause to let the menu animation finish
  await page.waitForTimeout(1000); 
  await page.locator('[data-test="logout-sidebar-link"]').click();
  
  // 4. Verify we are back at login
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();
});