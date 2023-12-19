import { test } from "@playwright/test";

const { TextInputPage } = require("../models/text-input.model");

test("Name button update test", async ({ page }) => {
  const textInputPage = new TextInputPage(page);
  const updateText = "I have been updated!";

  await textInputPage.visit();
  await textInputPage.fillNewBtnName(updateText);
  await textInputPage.clickUpdatingBtn();
  await textInputPage.expectedBtnText(updateText);
});
