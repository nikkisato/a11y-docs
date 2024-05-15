import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

test('page has an H1', async ({ page }) => {
  await page.goto('/')

  const response = await page.waitForSelector('h1')

  expect(response).not.toBeNull()
})
