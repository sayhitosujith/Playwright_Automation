// @ts-check
import { test, expect } from '@playwright/test';

test('Login and update resume headline', async ({ page }) => {
  // Open login page
  await page.goto('https://www.naukri.com/nlogin/login?utm_source=google&utm_medium=cpc&utm_campaign=Brand&gad_source=1&gclid=CjwKCAjwo6GyBhBwEiwAzQTmc34DfBd9dNPPn_R_W3UozmHxoGFxQRepNJgOcFPHLMUoYhEwNErtOxoC6a0QAvD_BwE&gclsrc=aw.ds', { waitUntil: 'domcontentloaded' });

  // Pause to ensure page loads completely
  await page.waitForTimeout(5000); // Temporary debug step

  // Debug: Capture screenshot to check if the field is present
  await page.screenshot({ path: 'debug-page.png', fullPage: true });

  // Define locators
  const UserName = page.locator("//input[@id='usernameField']");
  const Password = page.locator("//input[@id='passwordField']");
  const LoginButton = page.locator("//button[@class='waves-effect waves-light btn-large btn-block btn-bold blue-btn textTransform']")

  // Check if the username field is present
  const isUserNameVisible = await UserName.isVisible();
  console.log(`Username field visible: ${isUserNameVisible}`);

  if (!isUserNameVisible) {
    throw new Error("Username field is not visible. Check selector or page loading issue.");
  }

  // Login Process
  await UserName.fill("sayhitosujith@gmail.com");
  await Password.fill("Qw@12345678");
  await LoginButton.click();

  // Wait for successful login
  await page.waitForLoadState('networkidle');

  // Debug: Capture screenshot after login
  await page.screenshot({ path: 'debug-after-login.png', fullPage: true });

  // Verify login success
 // await expect(page).toHaveURL(/profile/);
});
