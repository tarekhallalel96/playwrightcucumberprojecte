import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { Browser, Page, chromium } from 'playwright';
import { expect } from '@playwright/test';
import AddPost from '../pages/AddPost';
import LoginPage from '../pages/LoginPage';
import DashBoardPage from '../pages/DashboardPage';

let addPost: AddPost;
let loginPage: LoginPage;
let dashboard: DashBoardPage;
let page: Page;

Given('I am on the dashboard', async function()  {
    loginPage = new LoginPage(this.page);
    //const titre = await this.addPost.TitrePostPage(); // Appelle la fonction pour récupérer le titre
    await loginPage.goto("http://192.168.1.95:9091/admin/login/?next=/admin/");
    await loginPage.login("testeur_integration", "testeur_qa");

    
    
    dashboard = new DashBoardPage(this.page);
    await dashboard.ClicOnAddPost();

    addPost = new AddPost(this.page);
    //expect(titre).toBe('Add Post'); // Vérifie si le titre est bien "Add Post"
  })



  When('I write the title {string} in  input field', async function (s: string) {
  // Write code here that turns the phrase above into concrete actions
  const randomSuffix = Math.floor(Math.random() * 10000); // Génère un nombre aléatoire entre 0 et 9999
  const titreAvecRandom = `${s}_${randomSuffix}`;

  await addPost.SaisirTitre(titreAvecRandom);
})

When('I write the content {string} in text area', async function(s: string)  {
  // Write code here that turns the phrase above into concrete actions
  await addPost.SaisirContent(s);
})


When('I Click on Save button', async function()   {
    // Write code here that turns the phrase above into concrete actions
    await addPost.CliqueSurSave()
  })

Then('I am redirect to Dashboard', async () => {
  // Write code here that turns the phrase above into concrete actions
 const isDashboardVisible = await loginPage.isDashboardVisible();
   expect(isDashboardVisible).toBeTruthy();
})
  


