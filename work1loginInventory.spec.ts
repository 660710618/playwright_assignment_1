import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  //assert URL
  await expect(page).toHaveURL(/inventory.html/);
  //assert Products visible
  await expect(page.locator('[data-test="title"]')).toBeVisible();
  //assert 6 Products count
  await expect(page.locator('.inventory_item')).toHaveCount(6);
});