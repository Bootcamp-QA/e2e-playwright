import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "playwright/test";

Given('I am on the playwright homepage', async function () {
    await this.page.goto('https://playwright.dev/');
});


When('I click on docs menu', async function () {
    // Mobile. VIEWPORT
    if (process.env.VIEWPORT === 'mobile') {
        await this.page.getByLabel('Toggle navigation bar').click();
        await this.page.getByRole('link', { name: 'Docs' }).click();

    }
    else {
        //Desktop VIEWPORT
        await this.page.getByRole('link', { name: 'Docs' }).click();
    }
});

Then('I should see docs title', async function ()  {
    await expect(this.page.getByRole('heading', { name: 'Installation' })).toBeVisible();
    
})
