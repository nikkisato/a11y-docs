import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@chromatic-com/playwright'

test('has Site title', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle(/A11y Docs/)
})
