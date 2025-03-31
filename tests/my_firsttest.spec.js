const {test, expect} = require('@playwright/test') 

test('My first test', async ({ page }) => {
  await page.goto('https://google.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Google');
})