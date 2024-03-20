import { Given, Then, When, defineStep } from '@cucumber/cucumber'
import LoginPage from '../page-objects/login-page'

const page = new LoginPage()

Given('I am on the login page', async function () {
  // page.goto('https://www.saucedemo.com/')
  await page.navigateToLoginPage()
})

When('I login with valid credentials', async function () {
  // await page.fill('#user-name', 'standard_user')
  // await page.fill('#password', 'secret_sauce')
  // await page.click('#login-button')
  await page.submitLoginForm()
})

Then('I should be redirected to the inventory page', async function () {
  // const inventoryPage = await page.url()
  // expect(inventoryPage).to.equal('https://www.saucedemo.com/inventory.html')
  await page.assertUserLoggedIn()
})

defineStep('I Want to wait for 5 seconds', async () => {
  page.pause(5)
})

defineStep(
  /^I Fill the login form with "([^"]*)" and "([^"]*)"$/,
  async function (username, password) {
    await page.submitLoginFormWithParams(username, password)
  },
)
