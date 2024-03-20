const common = `
--require setup/hooks.js
--require setup/assertions.js
--require step-definitions/**/*.step.js
`

export default `${common} features/**/*.feature`
