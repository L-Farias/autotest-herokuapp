const { test, expect } = require('../../src/fixtures/baseTest');
const testData = require('../../src/data/testData.json');
const { createTemporaryFile } = require('../../src/utils/helpers');

test('faz upload de um arquivo', async ({ page }) => {
  const file = await createTemporaryFile(
    testData.files.uploadName,
    testData.files.uploadContent,
  );

  try {
    await page.goto('/upload');
    await page.locator('#file-upload').setInputFiles(file.path);
    await page.locator('#file-submit').click();

    await expect(page.locator('#uploaded-files')).toHaveText(testData.files.uploadName);
  } finally {
    await file.cleanup();
  }
});

test('faz download de um arquivo', async ({ page }) => {
  await page.goto('/download');
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('link', { name: testData.files.downloadName }).click();
  const download = await downloadPromise;

  expect(download.suggestedFilename()).toBe(testData.files.downloadName);
});