const { BasePage } = require('./BasePage');

class LoginPage extends BasePage {
  async open() {
    await super.open('/login');
  }

  async login(username, password) {
    await this.fill('#username', username);
    await this.fill('#password', password);
    await this.click('button[type="submit"]');
  }
}

module.exports = { LoginPage };