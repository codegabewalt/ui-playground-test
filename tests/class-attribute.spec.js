import { test } from "@playwright/test";

const { ClassAttributePage } = require("../models/class-attribute.model");

test("Click primary button", async ({ page }) => {
  page.on("dialog", async (dialog) => {
    console.log(dialog.message());
    await dialog.dismiss();
  });

  const classAttributePage = new ClassAttributePage(page);
  await classAttributePage.visit();
  await classAttributePage.clickPrimaryBtn();
});
