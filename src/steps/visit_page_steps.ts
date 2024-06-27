import { When } from '@cucumber/cucumber';


When('I navigate to main page', async function () {
  await this.page.goto(this.URL);
});

When('I click on menu {string}', async function (menuName: string) {
  await this.page.getByRole('link', { name: menuName }).click();
})
