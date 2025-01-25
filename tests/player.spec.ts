import { test, expect } from '@playwright/test'

test('deve tocar uma música', async ({ page }) => {
  await page.goto('/')

  const loggedUser = page.locator('.logged-user')
  await expect(loggedUser).toHaveText('Fernando Papito')
})
