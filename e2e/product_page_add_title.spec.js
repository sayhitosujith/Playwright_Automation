import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.naukri.com/nlogin/login?utm_source=google&utm_medium=cpc&utm_campaign=Brand&gad_source=1&gclid=CjwKCAjwo6GyBhBwEiwAzQTmc34DfBd9dNPPn_R_W3UozmHxoGFxQRepNJgOcFPHLMUoYhkc3FFd1BoCq3kQAvD_BwE');

  const UserName = page.getByPlaceholder("Enter Email ID / User"); 
  const Password = page.locator('[id="passwordField"]');
  const LoginButton = page.locator("//button[@class='waves-effect waves-light btn-large btn-block btn-bold blue-btn textTransform']");
  const viewProfile = page.locator("//a[normalize-space()='View profile']");
  const ResumeHeadline = page.locator("//div[@class='card mt15']//div//span[@class='edit icon'][normalize-space()='editOneTheme']");
  const ClearText = page.locator("//textarea[@id='resumeHeadlineTxt']");
  const SaveButton = page.locator("//button[normalize-space()='Save']");

  await UserName.fill("sayhitosujith@gmail.com", { timeout:30000 });
  await Password.fill("Qw@12345678");
  await LoginButton.click();

  await viewProfile.waitFor({ state: 'visible', timeout:30000 });
  await viewProfile.click();

  await page.mouse.wheel(0, 500); // Scroll down 500 pixels

  await ResumeHeadline.click();

  await ClearText.clear();
  await ClearText.fill("SDET-Professional with Experience of 6.8 years."),{ timeout:40000 };

  await SaveButton.click();
});