import { When, Then, Given } from "@cucumber/cucumber";
import { expect } from "playwright/test";


Given('the user is on contactList page', async function () {
    await this.page.goto('https://thinking-tester-contact-list.herokuapp.com/contactList');
    await this.context.clearCookies();
  })

When('the user login with user {string} and password {string}',  async function (user: string, password:string) {
    await this.page.getByRole('button', { name: 'Logout' }).click();
    await this.page.getByPlaceholder('Email').fill('reyes2@gmail.com');
    await this.page.getByPlaceholder('Password').fill('password');
    await this.page.getByRole('button', { name: 'Submit' }).click();
})

When('the user press add contact button', async function () {
    await this.page.getByRole('button', { name: 'Add a New Contact' }).click();
})

When('the user fill random first name', async function () {
    const randomNumber:number = Math.round(Math.random() * 99999);
    this.randomName = 'Reyes' + randomNumber;
    await this.page.getByPlaceholder('First Name').fill(this.randomName);
})

When('the user fill random last name', async function () {
    const randomNumber:number = Math.round(Math.random() * 99999);
    this.randomLastName = 'Cuesta' + randomNumber;
    await this.page.getByPlaceholder('Last Name').fill(this.randomLastName);
})

Then('the user should see new contact name and last name added',async function () {
    const fullName = this.randomName +" "+ this.randomLastName;
    await expect(this.page.locator('#myTable')).toContainText(fullName);
})




When('the user add the new contact', async function ()  {
    await this.page.getByRole('button', { name: 'Submit' }).click();
})



