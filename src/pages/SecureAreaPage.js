const { BasePage } = require('./BasePage');

class SecureAreaPage extends BasePage {
  get heading() {
    return this.page.getByRole('heading', { name: 'Secure Area' });
  }

  get flashMessage() {
    return this.page.locator('#flash');
  }

  get logoutButton() {
    return this.page.getByRole('link', { name: 'Logout' });
  }
}

module.exports = { SecureAreaPage };