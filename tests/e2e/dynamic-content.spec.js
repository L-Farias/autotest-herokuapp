const { test, expect } = require('../../src/fixtures/baseTest');

test('aguarda o conteúdo dinâmico ser exibido', async ({ dynamicLoadingPage }) => {
  await dynamicLoadingPage.openExample(1);
  await dynamicLoadingPage.start();

  await expect(dynamicLoadingPage.finishMessage).toHaveText('Hello World!', {
    timeout: 10_000,
  });
});

test('carrega conteúdo que é renderizado após iniciar', async ({ dynamicLoadingPage }) => {
  await dynamicLoadingPage.openExample(2);
  await dynamicLoadingPage.start();

  await expect(dynamicLoadingPage.finishMessage).toHaveText('Hello World!', {
    timeout: 10_000,
  });
});