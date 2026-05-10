const { test, expect } = require('@playwright/test');

test('Home page loads hostels', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('text=StayBay')).toBeVisible();
  await page.waitForTimeout(3000);
  const checkDetailsBtn = page.locator('text=Check Details').first();
  await expect(checkDetailsBtn).toBeVisible();
});

test('User can navigate to login page', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.click('text=Login');
  await page.waitForTimeout(2000);
  // Using an explicit locator since we modified the UI slightly
  await expect(page.locator('input[placeholder="email"]')).toBeVisible();
});
