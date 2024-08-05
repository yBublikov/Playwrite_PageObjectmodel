const config = require('../config/config');
exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = page.getByLabel('Email');
        this.password = page.getByLabel('Password');
        this.accept_all_button = page.locator("xpath=//span[text() = 'Accept All']/ancestor::button[1]");
        this.next_button = page.locator("button[data-auto='button']");
        this.login_button = page.getByRole('button', { name: 'Log In' });
        this.mainMenu = page.locator('xpath=//*[@id="page_container"]/div/section/div/header/div/div/span');
    }

    async gotoLoginPage() {
        await this.page.goto(`${config.baseUrl}/login`);
    }

    async login(username, password) {
        if (await this.accept_all_button.isVisible()) {
            await this.accept_all_button.click();
        }
        await this.username.fill(username);
        await this.next_button.click();
        await this.password.fill(password);
        await this.next_button.click();
        await this.mainMenu.waitFor({ state: 'visible' });

    }

}