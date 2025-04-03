// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.naukri.com/nlogin/login?utm_source=google&utm_medium=cpc&utm_campaign=Brand&gad_source=1&gclid=CjwKCAjwo6GyBhBwEiwAzQTmc34DfBd9dNPPn_R_W3UozmHxoGFxQRepNJgOcFPHLMUoYhQ2rGv9nBoC5ZYQAvD_BwE', { waitUntil: 'load' });

  const UserName = page.locator("//input[@id='usernameField']");
  const Password = page.locator("//input[@id='passwordField']");
  const LoginButton = page.locator("//button[@class='waves-effect waves-light btn-large btn-block btn-bold blue-btn textTransform']");
  const viewProfile = page.locator("//a[normalize-space()='View profile']");
  const fileInput = page.locator('[class="dummyUpload typ-14Bold"]');
  const ResumeHeadline = page.locator("//div[@class='card mt15']//div//span[@class='edit icon'][normalize-space()='editOneTheme']");
  const ClearText = page.locator("//textarea[@id='resumeHeadlineTxt']");
  const SaveButton = page.locator("//button[normalize-space()='Save']");

  // Increase timeout for filling elements
  await UserName.fill("sayhitosujith@gmail.com", { timeout: 60000 });
  await Password.fill("Qw@12345678", { timeout: 60000 });
  
  // Ensure the login button is visible before clicking
  await LoginButton.waitFor({ state: 'visible', timeout: 60000 });
  await LoginButton.click();

  // Wait for profile to be visible before clicking
  await viewProfile.waitFor({ state: 'visible', timeout: 60000 });
  await viewProfile.click();

  // Add additional waits if necessary
  await page.waitForTimeout(5000);
  await page.mouse.wheel(0, 500); // Scroll down 500 pixels

  await ResumeHeadline.click();
  await ClearText.clear();
  await ClearText.fill("SDET-Professional with Experience of 6.8 years.");
  await SaveButton.click();
  await page.waitForTimeout(5000);
});