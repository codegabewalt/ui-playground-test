import { test } from "@playwright/test";

const { ScrollbarPage } = require("../models/scrollbars.model");

test("Click hidden button", async ({ page }) => {
  const scrollbarPage = new ScrollbarPage(page);

  await scrollbarPage.visit();
  await scrollbarPage.clickHidingBtn();
});
