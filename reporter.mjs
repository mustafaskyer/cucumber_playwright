import reporter from 'cucumber-html-reporter'
const options = {
  theme: 'bootstrap',
  jsonFile: 'cucumber-report.json',
  output: 'reports/cucumber-report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  metadata: {
    'App Version': '1.0.0',
    'Test Environment': 'STAGING',
    Browser: 'Chrome  54.0',
    Platform: 'Windows 10',
    Parallel: 'Scenarios',
    Executed: 'Remote',
  },
}

reporter.generate(options)
