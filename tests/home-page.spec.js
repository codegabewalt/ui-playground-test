import { test, expect } from "@playwright/test";

const { HomePage } = require("../models/home-page.model");

test("Navigate to homepage test", async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.visit();

  const allLinks = await homePage.getAllLinks();
  expect(allLinks.indexOf("Click")).toBe(11);
});
