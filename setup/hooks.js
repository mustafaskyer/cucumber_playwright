const playwright = require('playwright')
const { Before, After, BeforeAll, AfterAll } = require('@cucumber/cucumber')

BeforeAll(async function () {
  console.log('BeforeAll')
  global.browser = await playwright.chromium.launch({
    headless: false,
  })
})

AfterAll(async function () {
  console.log('AfterAll')
  await global.browser.close()
})

Before(async function () {
  console.log('Create new context and page')
  global.context = await global.browser.newContext()
  global.page = await global.context.newPage()
})

After(async function () {
  console.log('Close context and page')
  await global.page.close()
  await global.context.close()
})
