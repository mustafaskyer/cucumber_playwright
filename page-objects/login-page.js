class LoginPage {
  async navigateToLoginPage() {
    await page.goto('https://www.saucedemo.com/')
  }

  async submitLoginForm() {
    await page.fill('#user-name', 'standard_user')
    await page.fill('#password', 'secret_sauce')
    await page.click('#login-button')
  }

  async submitLoginFormWithParams(username, password) {
    await page.fill('#user-name', username)
    await page.fill('#password', password)
    await page.click('#login-button')
  }

  async assertUserLoggedIn() {
    const inventoryPage = await page.url()
    expect(inventoryPage).to.equal('https://www.saucedemo.com/inventory.html')
  }

  async pause(seconds = 1) {
    await page.waitForTimeout(seconds * 1000)
  }
}

export default LoginPage
