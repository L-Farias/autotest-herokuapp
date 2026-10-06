class BasePage {
  constructor(page) {
    this.page = page;
  }

  async open(path = '/') {
    await this.page.goto(path);
  }

  locator(selector) {
    return this.page.locator(selector);
  }

  async click(selector) {
    await this.locator(selector).click();
  }

  async fill(selector, value) {
    await this.locator(selector).fill(value);
  }

  async textContent(selector) {
    return this.locator(selector).textContent();
  }

  async pageTitle() {
    return this.page.title();
  }
}

module.exports = { BasePage };