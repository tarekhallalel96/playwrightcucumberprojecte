import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { Browser, Page, chromium } from 'playwright';
import { DashBoardPage } from '../pages/DashboardPage';
import { expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';

let page: Page;
let dashboard: DashBoardPage;
let loginPage: LoginPage;

Given('I Connect on the dashboard', async function () {
    loginPage = new LoginPage(this.page);
    await loginPage.goto("http://192.168.1.95:9091/admin/login/?next=/admin/");
    await loginPage.login("testeur_integration", "testeur_qa");
    
    // Crée un objet dashboard après la connexion
    dashboard = new DashBoardPage(this.page);
});
When('When I click on AddPost',async () => {
    // Write code here that turns the phrase above into concrete actions
    await dashboard.ClicOnAddPost();
  })

Then('I should be redirected to the AddPost page',async function () {
  // Write code here that turns the phrase above into concrete actions
  const addPage = await dashboard.elements.getTitlePost().textContent();
   
  // Attendre que l'élément soit visible
  await expect(addPage).toContain("Add post");
})




