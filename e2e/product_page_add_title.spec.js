// @ts-check
import { test, expect } from '@playwright/test';

test('Login and update resume headline', async ({ page }) => {
  // Go to login page
  await page.goto('https://www.naukri.com/nlogin/login');

  // Define locators
  const UserName = page.locator('#usernameField');
  const Password = page.locator('#passwordField');
  const LoginButton = page.getByRole('button', { name: 'Login' }); // More reliable
  const viewProfile = page.getByRole('link', { name: 'View profile' });
  const ResumeHeadline = page.locator('.edit.icon'); // Simplified
  const ClearText = page.locator('#resumeHeadlineTxt');
  const SaveButton = page.getByRole('button', { name: 'Save' });

  // Login Process
  await UserName.waitFor({ state: 'visible' });
  await UserName.fill("sayhitosujith@gmail.com");
  await Password.fill("Qw@12345678");
  await LoginButton.click();

  // Wait for successful login
  await page.waitForURL('https://www.naukri.com/mnjuser/profile', { timeout: 60000 });

  // Verify login success
  await expect(page).toHaveURL('https://www.naukri.com/mnjuser/profile');

  // Navigate to Profile
  await viewProfile.click();
  await ResumeHeadline.waitFor({ state: 'visible' });
  await ResumeHeadline.click();

  // Update Resume Headline
  await ClearText.fill("SDET-Professional with Experience of 6.8 years.");
  await SaveButton.click();

  // Verify update success (You can add assertions here)
});
