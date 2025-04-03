import { test, expect } from '@playwright/test';

test('Login Test', async ({ page }) => {
  await page.goto('https://www.naukri.com/nlogin/login', { waitUntil: 'networkidle' });

  await page.waitForSelector('//input[@id="usernameField"]', { timeout: 60000 }); // Ensure field exists

  const UserName = page.locator('//input[@id="usernameField"]').waitFor({ state: 'visible', timeout: 60000 });;
  const Password = page.locator('//input[@id="passwordField"]').waitFor({ state: 'visible', timeout: 60000 });;
  const LoginButton = page.locator("//button[@class='waves-effect waves-light btn-large btn-block btn-bold blue-btn textTransform']").waitFor({ state: 'visible', timeout: 60000 });;

  await UserName.fill("sayhitosujith@gmail.com");

  await Password.fill("Qw@12345678");

  await LoginButton.click();

  await page.waitForLoadState('networkidle'); // Ensure login completes
});
