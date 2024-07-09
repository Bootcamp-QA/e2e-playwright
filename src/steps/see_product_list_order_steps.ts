import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'playwright/test';

Then('I should see first product with price {string}', async function (price: string) {
    await expect(this.page.locator('[data-test="inventory-item-price"]').first()).toContainText(price);
})


Then('I should see last product with price {string}', async function (price: string) {
    await expect(this.page.locator('[data-test="inventory-item-price"]').last()).toContainText(price);
})

When('I login with user {string} and password {string}', async function (user: string, password: string) {
    await this.page.locator('[data-test="username"]').fill(user);
    await this.page.locator('[data-test="password"]').fill(password);
    await this.page.locator('[data-test="login-button"]').click();

})

When('I order product list by price descending', async function () {
    await this.page.locator('[data-test="product-sort-container"]').selectOption('lohi');

})


Given('I am on saucedemo page', async function () {
    await this.page.goto('https://www.saucedemo.com/');
})

When('I order product list by price ascending',async function () {
    await this.page.locator('[data-test="product-sort-container"]').selectOption('hilo');
})
