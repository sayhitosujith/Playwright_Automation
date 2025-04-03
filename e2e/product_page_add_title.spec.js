import { test, expect } from '@playwright/test';

test('Login Test', async ({ page }) => {
  await page.goto('https://www.naukri.com/nlogin/login', { waitUntil: 'networkidle' });

  await page.waitForSelector('//input[@id="usernameField"]', { timeout: 60000 }); // Ensure field exists

  const UserName = page.locator('//input[@id="usernameField"]');
  const Password = page.locator('//input[@id="passwordField"]');
  const LoginButton = page.locator("//button[contains(text(),'Login')]");

  await expect(UserName).toBeVisible();
  await UserName.fill("sayhitosujith@gmail.com");

  await expect(Password).toBeVisible();
  await Password.fill("Qw@12345678");

  await expect(LoginButton).toBeEnabled();
  await LoginButton.click();

  await page.waitForLoadState('networkidle'); // Ensure login completes
});
