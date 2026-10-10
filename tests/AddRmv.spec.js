const { test, expect } = require('@playwright/test');

test.describe('Testes de Adicionar e Remover Elementos', () => {

  test.setTimeout(60000);

  test('Deve adicionar 4 elementos, validar a quantidade e excluí-los um a um', async ({ browser }) => {
    // 1. Cria o contexto forçando o idioma inglês e desativando recursos de tradução/notificação
    const context = await browser.newContext({
      locale: 'en-US',
      extraHTTPHeaders: {
        'Accept-Language': 'en-US,en;q=0.9'
      }
    });

    const page = await context.newPage();

    // Acessa a página principal e navega para Add/Remove Elements
    await page.goto('https://the-internet.herokuapp.com/', {
      waitUntil: 'domcontentloaded',
      timeout: 45000
    });
    
    await expect(page.getByRole('heading', { name: 'Welcome to the-internet' })).toBeVisible();
    await page.getByRole('link', { name: 'Add/Remove Elements' }).click();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/add_remove_elements/');
    await expect(page.getByRole('heading', { name: 'Add/Remove Elements' })).toBeVisible();

    // Mapeia o botão de adicionar utilizando o seu seletor exato
    const botaoAdicionar = page.locator('#content > div > button');

    // 2. Clica 4 vezes para adicionar os elementos com um wait controlado após cada clique
    for (let i = 0; i < 4; i++) {
      await botaoAdicionar.click();
      // Aguarda o tempo necessário para renderizar o objeto sem falhar
      await page.waitForTimeout(300);
    }

    // Mapeia o container onde os botões de exclusão são injetados
    const containerElementos = page.locator('#elements');
    
    // 3. Checa se foram criados exatamente quatro botões de exclusão dentro do container
    const botoesExcluir = containerElementos.locator('button');
    await expect(botoesExcluir).toHaveCount(4, { timeout: 10000 });

    // 4. Exclui os elementos um a um clicando sempre no primeiro botão gerado
    for (let i = 0; i < 4; i++) {
      await page.locator('#elements > button:nth-child(1)').click();
    }

    // 5. Garante que todos foram removidos com sucesso (contador igual a 0)
    await expect(botoesExcluir).toHaveCount(0);

    await context.close();
  });
});