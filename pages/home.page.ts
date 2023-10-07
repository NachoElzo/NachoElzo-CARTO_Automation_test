import {Page, Locator, expect} from '@playwright/test'
import {userCredentials} from '../data/credentials'


export class HomePage {
    readonly page:Page; 
    readonly cartoLogo:Locator;
    readonly emailUserBox:Locator;
    readonly passwordBox:Locator;
    readonly continueButton:Locator;
    readonly workSpaceAppLabel:Locator;

    
    constructor(page:Page){
        this.page=page;
        this.cartoLogo = page.getByRole('link', { name: 'CARTO' });
        this.emailUserBox = page.getByLabel('Email address');
        this.passwordBox = page.getByLabel('Password');
        this.continueButton = page.getByRole('button', { name: 'Continue', exact: true });
        this.workSpaceAppLabel = page.getByText('Workspace');


    }

    navigateToHomePage = async()=>{
        await this.page.goto('/');
        await expect(this.cartoLogo).toBeVisible();

    }

    loginToCarto = async()=>{
        await this.emailUserBox.fill(userCredentials.username);
        await this.passwordBox.fill(userCredentials.password);
        await this.continueButton.click();
        await this.page.waitForURL('https://pinea.app.carto.com/');
        await this.workSpaceAppLabel.waitFor();
    }


}
export default HomePage;