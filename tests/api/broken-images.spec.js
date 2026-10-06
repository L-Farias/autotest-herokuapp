const { test, expect } = require('@playwright/test');

test('detecta imagens quebradas na página de exemplo', async ({ request, baseURL }) => {
  const pageResponse = await request.get('/broken_images');
  expect(pageResponse.ok()).toBeTruthy();

  const html = await pageResponse.text();
  const imageSources = [...html.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)].map(
    (match) => match[1],
  );
  expect(imageSources.length).toBeGreaterThan(0);

  const origin = baseURL ?? 'https://the-internet.herokuapp.com';
  const imageResponses = await Promise.all(
    imageSources.map(async (source) => {
      try {
        return await request.get(new URL(source, origin).toString());
      } catch {
        return null;
      }
    }),
  );

  expect(imageResponses.some((response) => response === null || !response.ok())).toBeTruthy();
});