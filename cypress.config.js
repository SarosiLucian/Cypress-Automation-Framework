const { defineConfig } = require("cypress")
const fs = require('fs-extra')
const path = require('path')
const cucumber = require('cypress-cucumber-preprocessor').default;

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress\\config', `${file}.json`)

  if(!fs.existsSync(pathToConfigFile)) {
    console.log("No custom config file found.")
    return {};
  }

  return fs.readJson(pathToConfigFile)
}

module.exports = defineConfig({
  projectId: 'frjf2a',
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())

      // implement node event listeners here

      const file = config.env.configFile || '' // '' means use nothing

      return getConfigurationByFile(file)
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    //excludeSpecPattern: "cypress/e2e/other/*.js",
    baseUrl: "https://webdriveruniversity.com",
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: false,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json'
    },
    retries: {
      runMode: 1,
      openMode: 1
    },
  },
  env: {
    first_name: "Lucian",
    webdriveruni_homepage: "https://webdriveruniversity.com"
  }
});
