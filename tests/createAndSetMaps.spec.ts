import { test, Page } from '@playwright/test'
import { HomePage } from '../pages/home.page'
import { AppPage } from '../pages/app.page'

let homePage: HomePage;
let appPage: AppPage;

test.beforeEach('Navigate to Cartos page and Login', async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigateToHomePage();
    await homePage.loginToCarto();
    appPage = new AppPage(page);
})
test('Open map with retail as data set and search stores revenues', async ({ page }) => {
    appPage = new AppPage(page);
    console.log('Creating a new instance of app page');

    await test.step('Open map with retail as data set', async () => {
        await appPage.openCreatedMap();
    })
})



