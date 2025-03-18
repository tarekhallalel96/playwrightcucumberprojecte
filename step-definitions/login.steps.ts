import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { Browser, Page, chromium } from 'playwright';
import { LoginPage } from '../pages/LoginPage';
import { expect } from '@playwright/test';

let browser: Browser;
let page: Page;
let loginPage: LoginPage;

Before(async function () {
  console.log("Démarrage du navigateur...");
  
 
});

// After(async function () {
//   console.log(" Fermeture du navigateur...");
  
// });

Given('I open the login page {string}', async function (url: string) {
  loginPage = new LoginPage(this.page);
  console.log(`🔗 Navigation vers : ${url}`);
  await loginPage.goto(url);
});

When('I login with username {string} and password {string}', async function (username: string, password: string) {
  console.log(` Connexion avec : ${username} / ${password}`);
  await loginPage.SaisirUsername(username);
  await loginPage.SaisirPassword(password);
  await loginPage.clicSurLogin();
  //await loginPage.login(username, password);
});

Then('I should be redirected to the dashboard', async function () {
  console.log(" Vérification de la présence du dashboard...");
  const isDashboardVisible = await loginPage.isDashboardVisible();
  expect(isDashboardVisible).toBeTruthy();
  
});

Then('I should see an error message', async function () {
  console.log("Vérification du message d'erreur...");
  const errorMessage = await loginPage.elements.errorMessage().textContent();
  console.log(` Message affiché : ${errorMessage}`);
  expect(errorMessage).toContain(" Please enter the correct username and password for a staff account. Note that both fields may be case-sensitive."); // Adapter si le message est différent
});
