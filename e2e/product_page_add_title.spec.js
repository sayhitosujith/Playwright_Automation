import { test, expect } from '@playwright/test';

test('Login and update resume headline', async ({ page }) => {
  // Wait until network requests are idle
  await page.goto('https://www.naukri.com/nlogin/login', { waitUntil: 'networkidle' });

  // Define locators
  const UserName = page.locator('input#usernameField');
  const Password = page.locator('input#passwordField');
  const LoginButton = page.locator('button:has-text("Login")');

  // Debugging: Check if the field is visible
  const isUserNameVisible = await UserName.isVisible();
  console.log(`Username field visible? ${isUserNameVisible}`);

  if (!isUserNameVisible) {
    throw new Error("Username field is not visible. Check selector or page loading issue.");
  }

  // Ensure fields are visible before interacting
  await expect(UserName).toBeVisible({ timeout: 60000 });
  await expect(Password).toBeVisible();
  await expect(LoginButton).toBeVisible();

  // Login Process
  await UserName.fill("sayhitosujith@gmail.com");
  await Password.fill("Qw@12345678");
  await LoginButton.click();

  // Wait for profile page to load
  await page.waitForURL(/profile/, { timeout: 60000 });
  await expect(page).toHaveURL(/profile/);
});
