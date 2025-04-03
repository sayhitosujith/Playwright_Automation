// @ts-check
import { test, expect } from '@playwright/test';

test('Login and update resume headline', async ({ page }) => {
  // Open login page
  await page.goto('https://www.naukri.com/nlogin/login', { waitUntil: 'load' });

  // Define locators
  const UserName = page.locator('#usernameField');
  const Password = page.locator('#passwordField');
  const LoginButton = page.locator('button:has-text("Login")'); // More reliable selector
  const ProfileMenu = page.locator('a:has-text("View profile")');
  const ResumeHeadline = page.locator('span:has-text("editOneTheme")');
  const ClearText = page.locator('#resumeHeadlineTxt');
  const SaveButton = page.locator('button:has-text("Save")');

  // Login Process
  await UserName.waitFor({ state: 'visible', timeout: 30000 });
  await UserName.fill("sayhitosujith@gmail.com");
  await Password.fill("Qw@12345678");
  await LoginButton.click();

  // Wait for successful login
  await page.waitForLoadState('networkidle'); // Wait until all requests are finished

  // Navigate to Profile
  await ProfileMenu.waitFor({ state: 'visible', timeout: 30000 });
  await ProfileMenu.click();

  // Scroll to resume section
  await page.mouse.wheel(0, 500);
  
  // Click Edit Resume Headline
  await ResumeHeadline.waitFor({ state: 'visible', timeout: 30000 });
  await ResumeHeadline.click();

  // Clear and enter new headline
  await ClearText.waitFor({ state: 'visible' });
  await ClearText.fill("SDET-Professional with 6.8 years of experience.");
  await SaveButton.click();

  // ✅ Verify update success
  await expect(SaveButton).not.toBeVisible();
});
