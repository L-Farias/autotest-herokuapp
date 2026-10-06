const { BasePage } = require('./BasePage');

class DynamicLoadingPage extends BasePage {
  get finishMessage() {
    return this.page.locator('#finish h4');
  }

  async openExample(example) {
    await this.open(`/dynamic_loading/${example}`);
  }

  async start() {
    await this.click('#start button');
  }
}

module.exports = { DynamicLoadingPage };