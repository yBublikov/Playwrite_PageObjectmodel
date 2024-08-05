import { test, expect } from '@playwright/test';
import { login } from '../../utils/loginUtil';
import { reviewDashboardPage } from '../../pages/reviewDashboardPage';

test('go to review and check page title', async ({ page }) => {

   //login
  await login(page, 'y.bublikov@profitsoft.ua', 'Yuri765');

  // creating instance of dashboard
   const dashboard = new reviewDashboardPage(page);

  // Переходим на страницу дашборда
  console.log('Navigating to the dashboard...');
   await dashboard.goto();

   // check we on review dashboard
   const isAtDashboard = await dashboard.isAt();
   console.log(`Is at dashboard: ${isAtDashboard}`);
   expect(await dashboard.isAt()).toBe(true);

  //try to click on action button
  console.log('Clicking the action button...');
   await dashboard.clickActionsButton();

  //try to click on action button
    console.log('Clicking the download report...');
    await dashboard.clickDownloadReport();
});