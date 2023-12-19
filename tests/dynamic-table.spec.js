import { test, expect } from "@playwright/test";

const { DynamicTablePage } = require("../models/dynamic-table.model");

test("Validate dynamic table", async ({ page }) => {
  const dynamicTablePage = new DynamicTablePage(page);

  await dynamicTablePage.visit();

  const expected = `Chrome CPU: ${await dynamicTablePage.getCpuValue()}`;
  const recieved = await dynamicTablePage.getMessage();

  expect(expected).toMatch(recieved);
});
