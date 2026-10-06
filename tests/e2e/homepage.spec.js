const { test, expect } = require('../../src/fixtures/baseTest');

test('carrega a página inicial do The Internet', async ({ basePage }) => {
  await basePage.open('/');

  await expect(basePage.locator('h1')).toHaveText('Welcome to the-internet');
  expect(await basePage.pageTitle()).toBe('The Internet');
});