import { expect, test } from '@playwright/test'

test('has skip link', async ({ page }) => {
  await page.goto('localhost:3000')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/A11y Docs/)
})

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/')

  // Click the get started link.
  await page.getByRole('link', { name: 'Skip To Main Content' }).click()

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole('heading', { name: 'Installation' }),
  ).toBeVisible()
})
