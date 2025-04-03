

// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  // await page.goto('http://localhost:2221/');

  // const addToBasketButton = page.locator('[data-qa="product-button"]').first()
  // const basketCounter = page.locator('[data-qa="header-basket-count"]')

  // await addToBasketButton.waitFor()
  // await expect(addToBasketButton).toHaveText("Add to Basket")
  // await expect(basketCounter).toHaveText("0")

  // await addToBasketButton.click()

  // await expect(addToBasketButton).toHaveText("Remove from Basket")
  // await expect(basketCounter).toHaveText("1")

  await page.goto('https://www.naukri.com/nlogin/login?utm_source=google&utm_medium=cpc&utm_campaign=Brand&gad_source=1&gclid=CjwKCAjwo6GyBhBwEiwAzQTmc34DfBd9dNPPn_R_W3UozmHxoGFxQRepNJgOcFPHLMUoYhEwNErtOxoC6a0QAvD_BwE&gclsrc=aw.ds');
  await page.waitForTimeout(8000)

  const UserName = page.locator('[id="usernameField"]')
  await page.waitForTimeout(8000)

  const Password = page.locator('[id="passwordField"]')
  await page.waitForTimeout(8000)
  
  const LoginButton = page.locator("//button[@class='waves-effect waves-light btn-large btn-block btn-bold blue-btn textTransform']")
  const viewProfile = page.locator("//a[normalize-space()='View profile']") 
  const fileInput = page.locator('[class="dummyUpload typ-14Bold"]');
  const ResumeHeadline = page.locator("//div[@class='card mt15']//div//span[@class='edit icon'][normalize-space()='editOneTheme']");
  const ClearText = page.locator("//textarea[@id='resumeHeadlineTxt']")
  const SaveButton = page.locator("//button[normalize-space()='Save']")

  await UserName.fill("sayhitosujith@gmail.com")
  await Password.fill("Qw@12345678")
  await LoginButton.click()

  await page.waitForTimeout(5000)
  await viewProfile.click()
  await page.waitForTimeout(5000)
  await page.mouse.wheel(0, 500); // Scroll down 500 pixels
  // await fileInput.click()
  // await fileInput.setInputFiles("C:/Users/Sujith/Downloads/Resume.pdf");
    // await page.waitForTimeout(5000)
    await ResumeHeadline.click()
    await ClearText.clear()
    await ClearText.fill("SDET-Professional with Experience of 6.8 years.")
    await SaveButton.click()
    await page.waitForTimeout(5000)
})