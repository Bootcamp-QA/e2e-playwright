import { When, Then, Given } from "@cucumber/cucumber";
import { expect } from "playwright/test";

When('the user add to cart {string}', async function (itemname: string) {
  await this.page.locator('[data-test="add-to-cart-'+itemname.toLowerCase().replaceAll(" ","-")+'"]').click();
})

When('the user click on the cart',async function  ()  {
  await this.page.locator('[data-test="shopping-cart-link"]').click();
})


Then('the user should see {string} product on the cart', async function (productName: string)  {
  await expect(this.page.locator('[data-test="inventory-item-name"]')).toContainText(productName);
})

When('the user press checkout', async function () {
  await this.page.locator('[data-test="checkout"]').click();
})

When('the user fill form with name {string}, last name {string} and postal code {string}', async function (name: string, lastname: string, postalcode: string)  {
  await this.page.locator('[data-test="firstName"]').fill(name);
  await this.page.locator('[data-test="lastName"]').fill(lastname);
  await this.page.locator('[data-test="postalCode"]').fill(postalcode);
})

When('the user press continue button', async function () {
  
  await this.page.locator('[data-test="continue"]').click();
})

Then('the user should see product {string} with total price {string}',async function  (productName: string, totalPrice:string) {
  await expect(this.page.locator('[data-test="inventory-item-name"]')).toContainText(productName);
  await expect(this.page.locator('[data-test="total-label"]')).toContainText(totalPrice);
})

Then('the user press finish', async function () {
  await this.page.locator('[data-test="finish"]').click();
  await this.page.locator('[data-test="complete-header"]').click();
})

Then('the user should see the buy complete message {string}',async function  (message: string) {
  await expect(this.page.locator('[data-test="complete-header"]')).toContainText(message);
})


