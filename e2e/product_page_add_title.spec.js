// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://www.naukri.com/nlogin/login?utm_source=google&utm_medium=cpc&utm_campaign=Brand&gad_source=1&gclid=CjwKCAjwo6GyBhBwEiwAzQTmc34DfBd9dNPPn_R_W3UozmHxoGFxQRepNJgOcFPHLMUoYhLGRhD6...', { waitUntil: 'networkidle', timeout: 60000 });

    const UserName = page.locator("//input[@id='usernameField']");
    const Password = page.locator("//input[@id='passwordField']");
    const LoginButton = page.locator("//button[@class='waves-effect waves-light btn-large btn-block btn-bold blue-btn textTransform']");
    const viewProfile = page.locator("//a[normalize-space()='View profile']");
    const fileInput = page.locator('[class="dummyUpload typ-14Bold"]');
    const ResumeHeadline = page.locator("//div[@class='card mt15']//div//span[@class='edit icon'][normalize-space()='editOneTheme']");
    const ClearText = page.locator("//textarea[@id='resumeHeadlineTxt']");
    const SaveButton = page.locator("//button[normalize-space()='Save']");

    await page.waitForTimeout(5000);

    async function retryFill(locator, text, retries = 3) {
        for (let i = 0; i < retries; i++) {
            try {
                await locator.fill(text);
                return;
            } catch (error) {
                if (i === retries - 1) throw error;
                await page.waitForTimeout(5000); // Wait before retrying
            }
        }
    }

    await retryFill(UserName, "sayhitosujith@gmail.com");
    await retryFill(Password, "Qw@12345678");
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