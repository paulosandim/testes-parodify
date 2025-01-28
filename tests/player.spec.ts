import { test, expect } from '@playwright/test'

test('deve tocar uma música', async ({ page }) => {

  const song = {
    title: 'Bughium'
  }

  await page.goto('/')

  const loggedUser = page.locator('.logged-user')
  await expect(loggedUser).toHaveText('Fernando Papito')

  const songCard = page.locator('.song').filter({hasText: song.title})

  const play = songCard.locator('.play')
  await play.click()

  // await page.click('section > div > div:nth-child(1) > div > button')
  await page.waitForTimeout(5000)
})
