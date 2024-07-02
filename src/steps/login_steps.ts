import { Given,When,Then } from '@cucumber/cucumber';
import { expect } from 'playwright/test';


Given('the user is on saucelabs login page', async function () {
    await this.page.goto(this.URL);
  
})

When('the user fill username with {string}', async function (username: string) {

    await this.page.locator('[data-test="username"]').fill(username);
  })

When('the user fill password with {string}', async function (password: string) {
    await this.page.locator('[data-test="password"]').fill(password);
})

When('the user press login button', async function () {
    await this.page.locator('[data-test="login-button"]').click();
})

Then('the user should see products page',async function () {
    await expect(this.page.locator('[data-test="title"]')).toBeVisible();
})

Then('the user should see the login error message {string}', async function (errorMessage: string) {
    await expect(this.page.locator('[data-test="error"]')).toContainText(errorMessage);
})




