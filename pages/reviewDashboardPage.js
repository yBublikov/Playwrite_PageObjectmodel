const config = require('../config/config');
class reviewDashboardPage {
    constructor(page) {
        this.page = page;
        this.actionsButtonLocator = this.page.locator('button', { hasText: 'Actions' });
        this.downloadReportLocator = this.page.locator('li[role="menuitem"]:has(div:has-text("Download Report"))');
        this.scheduleReportLocator = this.page.locator('li[role="menuitem"]:has(div:has-text("Schedule Report"))');
    }

    async goto() {
        await this.page.goto(`${config.baseUrl}/reviews/dashboard`);
        await this.page.waitForTimeout(1000)
    }

    async isAt() {
        const isVisible = await this.actionsButtonLocator.isVisible();
        return isVisible;
    }

    async clickActionsButton() {
         await this.actionsButtonLocator.waitFor({ state: 'visible' });
         await this.actionsButtonLocator.click();
}

   async clickActionsButton() {
          await this.actionsButtonLocator.waitFor({ state: 'visible' });
          await this.actionsButtonLocator.click();
      }

      async clickDownloadReport() {
          await this.downloadReportLocator.waitFor({ state: 'visible' });

          // click download report
          await this.downloadReportLocator.click();

          // wait for modal window
          const headerLocator = this.page.locator('h6', { hasText: 'Download Report' });
          await headerLocator.waitFor({ state: 'visible' });

          // chekc header of modal window
          const isHeaderVisible = await headerLocator.isVisible();
          if (!isHeaderVisible) {
              throw new Error('Header "Download Report" is not visible.');
          }
      }

      async clickScheduleReport() {
          await this.scheduleReportLocator.waitFor({ state: 'visible' });
          await this.scheduleReportLocator.click();
      }
}

module.exports = { reviewDashboardPage };