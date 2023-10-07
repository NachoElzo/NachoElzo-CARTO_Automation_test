import { Page, Locator, Browser } from '@playwright/test'

export class AppPage {
    readonly page: Page;
    readonly locator: Locator;
    readonly mapsLeftMenu: Locator;
    readonly retailDataSetMap: Locator;
    readonly dataSet:Locator;
    readonly customDataQuery:Locator;
    readonly browser:Browser;

    constructor(page: Page,) {
        this.page = page;
        this.mapsLeftMenu = page.getByRole('link', { name: 'Maps' });
        this.retailDataSetMap = page.getByRole('img', { name: 'Retail dataSet' });
        this.dataSet = page.getByLabel('dataset-list-item-action-icon');
        this.customDataQuery = page.getByText('Custom Query (SQL)');
    }

    openCreatedMap = async () => {
        await this.mapsLeftMenu.waitFor();
        await this.mapsLeftMenu.click();
        const newPagePromise = this.page.waitForEvent('popup');
        await this.retailDataSetMap.click();
        const newPage = await newPagePromise;
        await newPage.getByLabel('dataset-list-item-action-icon').click();
        await newPage.getByText('Open SQL Editor').click();
        await newPage.getByRole('button', { name: 'Run' }).click();
        await newPage.getByLabel('close-sql-editor').click();
        newPage.getByRole('button', { name: 'Zoom in' }).dblclick; 
    }
}
