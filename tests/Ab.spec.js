const {test, expect} = require('@playwright/test');

test.describe('Testes de variação A/B', () => {
// Aumenta o tempo limite deste teste específico para evitar falhas de rede lenta
    test.setTimeout(60000);

    test('Deve navegar e validar o conteúdo da página A/B Testing', async ({ page }) => {
    // 1. Acessa a URL aguardando até o carregamento do DOM
    await page.goto('https://the-internet.herokuapp.com/', { waitUntil: 'domcontentloaded' });

    // 2. Clica no link "A/B Testing" utilizando seletor resiliente
    await page.getByRole('link', { name: 'A/B Testing' }).click();

    // 3. Valida a URL de destino
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/abtest');

    // 4. Valida o título principal
    const titulo = page.locator('h3');
    await expect(titulo).toHaveText(/A\/B Test (Variation 1|Control|Variation)/);

    // 5. Valida o parágrafo descritivo
    const textoParagrafo = page.locator('#content .example p');
    await expect(textoParagrafo).toContainText(
      'Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page'
    );
  });
})