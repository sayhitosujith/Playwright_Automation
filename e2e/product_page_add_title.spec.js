// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:2221/');

  const addToBasketButton = page.locator('div').filter({ hasText: /^499\$Add to Basket$/ }).getByRole('button')
 await addToBasketButton.click()
});

