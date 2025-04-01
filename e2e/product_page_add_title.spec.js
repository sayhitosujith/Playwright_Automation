// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:2221/');

  const addToBasketButton = page.locator('[data-qa="product-button"]').first()
  await addToBasketButton.waitFor()
  await addToBasketButton.click()


  expect(addToBasketButton).toHaveText("Remove from Basket")
});

