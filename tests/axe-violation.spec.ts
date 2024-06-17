import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@chromatic-com/playwright'

// test.describe('homepage', () => {
//   test('should not have any automatically detectable accessibility issues', async ({
//     page,
//   }) => {
//     await page.goto('/')

//     const accessibilityScanResults = await new AxeBuilder({ page }).analyze()

//     expect(accessibilityScanResults.violations).toEqual([])
//   })
// })
