const { test, expect } = require('../../src/fixtures/baseTest');
const testData = require('../../src/data/testData.json');

test('realiza login válido e abre a área segura', async ({ loginPage, secureAreaPage }) => {
  await loginPage.open();
  await loginPage.login(testData.login.username, testData.login.validPassword);

  await expect(secureAreaPage.heading).toBeVisible();
  await expect(secureAreaPage.flashMessage).toContainText('You logged into a secure area!');
});

test('exibe erro para senha inválida', async ({ loginPage }) => {
  await loginPage.open();
  await loginPage.login(testData.login.username, testData.login.invalidPassword);

  await expect(loginPage.locator('#flash')).toContainText('Your password is invalid!');
});