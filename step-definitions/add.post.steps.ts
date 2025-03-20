import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { Browser, Page, chromium } from 'playwright';
import { expect } from '@playwright/test';
import AddPost from '../pages/AddPost';
import LoginPage from '../pages/LoginPage';
import DashBoardPage from '../pages/DashboardPage';
const config = require('../config'); 

let addPost: AddPost;
let loginPage: LoginPage;
let dashboard: DashBoardPage;
let page: Page;

Given('I am on the dashboard', async function(baseUrl : string , username : string , password : string )  {
    loginPage = new LoginPage(this.page);
    await loginPage.goto(baseUrl);
    await loginPage.login(username,password);
    dashboard = new DashBoardPage(this.page);
    await dashboard.ClicOnAddPost();
    addPost = new AddPost(this.page);
  })



  When('I write the title {string} in  input field', async function (s: string) {
  const randomSuffix = Math.floor(Math.random() * 10000); // Génère un nombre aléatoire entre 0 et 9999
  const titreAvecRandom = `${s}_${randomSuffix}`;
  process.env.TITRE_RANDOM = titreAvecRandom;
  
  await addPost.SaisirTitre(titreAvecRandom);
})

When('I write the content {string} in text area', async function(s: string)  {
  await addPost.SaisirContent(s);
})


When('I Click on Save button', async function()   {
    await addPost.CliqueSurSave()
  })

Then('I am redirect to Dashboard', async function() {
 const isDashboardVisible = await loginPage.isDashboardVisible();
 expect(await this.page.isVisible('.dashboard'));
})
  


