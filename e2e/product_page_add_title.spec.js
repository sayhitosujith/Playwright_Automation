import { test, expect } from '@playwright/test';

test('Login Test', async ({ page }) => {
  try {
    await page.goto('https://www.naukri.com/nlogin/login', { waitUntil: 'networkidle' });

    // Wait for username field to be visible with an increased timeout
    await page.waitForSelector('//input[@id="usernameField"]', { timeout: 90000 });

    const UserName = page.locator('//input[@id="usernameField"]').waitFor({ state: 'visible', timeout: 90000 });
    const Password = page.locator('//input[@id="passwordField"]').waitFor({ state: 'visible', timeout: 90000 });
    const LoginButton = page.locator("//button[@class='waves-effect waves-light btn-large btn-block btn-bold blue-btn textTransform']").waitFor({ state: 'visible', timeout: 90000 });

    await UserName.fill("sayhitosujith@gmail.com");
    await Password.fill("Qw@12345678");
    await LoginButton.click();

    await page.waitForLoadState('networkidle'); // Ensure login completes

  } catch (error) {
    // Capture screenshot on error
    await page.screenshot({ path: 'error-screenshot.png' });
    console.error('Test failed', error);
    throw error; // Rethrow to ensure the test fails
  }
});