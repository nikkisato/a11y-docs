import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

test('page has an H1', async ({ page }) => {
  await page.goto('/')

  const response = await page.waitForSelector('h1')

  expect(response).not.toBeNull()
})

test('page has an H2', async ({ page }) => {
  await page.goto('/')

  const response = await page.waitForSelector('h2')

  expect(response).not.toBeNull()
})

test('page has an H3', async ({ page }) => {
  await page.goto('/')

  const response = await page.waitForSelector('h3')

  expect(response).not.toBeNull()
})

test('page has an H4', async ({ page }) => {
  await page.goto('/')

  const response = await page.waitForSelector('h4')

  expect(response).not.toBeNull()
})

test('page has an H5', async ({ page }) => {
  await page.goto('/')

  const response = await page.waitForSelector('h5')

  expect(response).not.toBeNull()
})

test('page has an H6', async ({ page }) => {
  await page.goto('/')

  const response = await page.waitForSelector('h6')

  expect(response).not.toBeNull()
})
