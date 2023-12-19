import { test } from "@playwright/test";

const { SampleAppPage } = require("../models/sample-app.model");

test.describe.parallel("suite", () => {
  test("Log in test", async ({ page }) => {
    const sampleAppPage = new SampleAppPage(page);

    await sampleAppPage.visit();
    await sampleAppPage.fillUsernameField("John Doe");
    await sampleAppPage.fillPasswordField("pwd");
    await sampleAppPage.clickLoginButton();
    await sampleAppPage.expectedLoginStatus("Welcome, John Doe!");
  });

  test("Incorrect password test", async ({ page }) => {
    const sampleAppPage = new SampleAppPage(page);

    await sampleAppPage.visit();
    await sampleAppPage.fillUsernameField("John Doe");
    await sampleAppPage.fillPasswordField("incorrect");
    await sampleAppPage.clickLoginButton();
    await sampleAppPage.expectedLoginStatus("Invalid username/password");
  });

  test("No username test", async ({ page }) => {
    const sampleAppPage = new SampleAppPage(page);

    await sampleAppPage.visit();
    await sampleAppPage.fillUsernameField("");
    await sampleAppPage.fillPasswordField("pwd");
    await sampleAppPage.clickLoginButton();
    await sampleAppPage.expectedLoginStatus("Invalid username/password");
  });

  test("Log out test", async ({ page }) => {
    const sampleAppPage = new SampleAppPage(page);

    await sampleAppPage.visit();
    await sampleAppPage.fillUsernameField("John Doe");
    await sampleAppPage.fillPasswordField("pwd");
    await sampleAppPage.clickLoginButton();
    await sampleAppPage.expectedLoginStatus("Welcome, John Doe!");
    await sampleAppPage.clickLogoutButton();
    await sampleAppPage.expectedLoginStatus("User logged out.");
  });
});
