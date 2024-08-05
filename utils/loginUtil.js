const { LoginPage } = require('../pages/login');

async function login(page, username, password) {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.login(username, password);
}

module.exports = { login };