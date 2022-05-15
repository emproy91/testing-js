const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/'); // Visitar pagina.
  const title = page.locator('.navbar__inner .navbar__title'); // Localizar la navbar.
  await expect(title).toHaveText('Playwright'); //Buscar este el texto de la etiqueta.
});
 // Correr test con $ npx playwright test.
 // Para más axiones visitar https://playwright.dev/docs/intro
