import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";
import * as createBundler from "@bahmutov/cypress-esbuild-preprocessor";

import { defineConfig } from "cypress";

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );
  return config;
}

export default defineConfig({
  defaultCommandTimeout: 30000,
  requestTimeout: 30000,
  responseTimeout: 60000,
  pageLoadTimeout: 90000,
  numTestsKeptInMemory: 3,
  chromeWebSecurity: false,
  screenshotsFolder: "test-results/screenshots",
  videosFolder: "test-results/videos",
  fixturesFolder: "cypress/fixtures",
  viewportWidth: 1920,
  viewportHeight: 1200,
  watchForFileChanges: false,
  screenshotOnRunFailure: true,
  video: false,
  videoCompression: 8,
  retries: {
    runMode: 0,
    openMode: 0,
  },
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/tests/**/*.feature",
    baseUrl: "https://test-business.vntrip.vn",
  },
  env: {
    type: "dev" || "test" || "uat",
    url: "vntrip.vn",
  },
});

//cypress run --env type=test
