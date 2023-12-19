import { test } from "@playwright/test";

const { ProgressBarPage } = require("../models/progress-bar.model");

test("Progress bar 75% check", async ({ page }) => {
  const progressBarPage = new ProgressBarPage(page);

  await progressBarPage.visit();
  await progressBarPage.clickStartBtn();

  while ((await progressBarPage.getProgressValue()) != "75%") {
    console.log(
      `Current percent value: ${await progressBarPage.getProgressValue()}`
    );
  }

  await progressBarPage.clickStopBtn();
});
