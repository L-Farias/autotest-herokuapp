const { test: base, expect } = require('@playwright/test');
const { BasePage } = require('../pages/BasePage');
const { DynamicLoadingPage } = require('../pages/DynamicLoadingPage');
const { LoginPage } = require('../pages/LoginPage');
const { SecureAreaPage } = require('../pages/SecureAreaPage');

const test = base.extend({
  basePage: async ({ page }, use) => {
    await use(new BasePage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  dynamicLoadingPage: async ({ page }, use) => {
    await use(new DynamicLoadingPage(page));
  },
  secureAreaPage: async ({ page }, use) => {
    await use(new SecureAreaPage(page));
  },
});

module.exports = { test, expect };