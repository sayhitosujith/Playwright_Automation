// @ts-check
import { test, expect } from '@playwright/test';

test('Login and update resume headline', async ({ page, context }) => {
  await context.tracing.start({ screenshots: true, snapshots: true });

  // Open login page with better waiting
  await page.goto('https://www.naukri.com/nlogin/login', { waitUntil: 'networkidle' });
  await page.waitForTimeout(5000)
  // Define locators
  const UserName = page.locator('//input[@id=\'usernameField\']')
  const Password = page.locator("//input[@id='passwordField']");
  const LoginButton = page.locator("//button[@class='waves-effect waves-light btn-large btn-block btn-bold blue-btn textTransform']");

  // Ensure elements are visible before interacting
  await UserName.waitFor({ state: 'visible', timeout: 60000 });
  await Password.waitFor({ state: 'visible', timeout: 60000 });

  // Fill credentials and login
  await UserName.fill("sayhitosujith@gmail.com");
  await Password.fill("Qw@12345678");
  await LoginButton.click();

  // Wait for profile page to load
  //await page.waitForURL(/profile/, { timeout: 60000 });

  // Debug screenshot after login
  await page.screenshot({ path: 'debug-after-login.png', fullPage: true });

  // Stop tracing
  await context.tracing.stop({ path: 'trace.zip' });
});
