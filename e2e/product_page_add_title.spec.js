// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.naukri.com/nlogin/login?utm_source=google&utm_medium=cpc&utm_campaign=Brand&gad_source=1&gclid=CjwKCAjwo6GyBhBwEiwAzQTmc34DfBd9dNPPn_R_W3UozmHxoGFxQRepNJgOcFPHLMUoYh');
  
  const UserName = page.locator("[id='usernameField']");
  const Password = page.locator('[id="passwordField"]');
  const LoginButton = page.locator("//button[@class='waves-effect waves-light btn-large btn-block btn-bold blue-btn textTransform']");
  const viewProfile = page.locator("//a[normalize-space()='View profile']");
  const fileInput = page.locator('[class="dummyUpload typ-14Bold"]');
  const ResumeHeadline = page.locator("//div[@class='card mt15']//div//span[@class='edit icon'][normalize-space()='editOneTheme']");
  const ClearText = page.locator("//textarea[@id='resumeHeadlineTxt']");
  const SaveButton = page.locator("//button[normalize-space()='Save']");

  await UserName.waitFor({ state: 'visible', timeout: 60000 }); // Wait for the element to be visible
  await UserName.fill("sayhitosujith@gmail.com", { timeout: 60000 }); // Increase timeout to 60 seconds
  
  await Password.waitFor({ state: 'visible', timeout: 60000 }); // Wait for the element to be visible
  await Password.fill("Qw@12345678", { timeout: 60000 }); // Increase timeout to 60 seconds
  
  await LoginButton.click();
  
  await page.waitForTimeout(5000);
  await viewProfile.click();
  await page.waitForTimeout(5000);
  await page.mouse.wheel(0, 500); // Scroll down 500 pixels

  await ResumeHeadline.click();
  await ClearText.clear();
  await ClearText.fill("SDET-Professional with Experience of 6.8 years.");
  await SaveButton.click();
  await page.waitForTimeout(5000);
});