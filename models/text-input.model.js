import { expect } from "@playwright/test";

export class TextInputPage {
  constructor(page) {
    this.page = page;
    this.url = page.goto("/textinput");
    this.newBtnName = page.locator("#newButtonName");
    this.updatingBtn = page.locator("#updatingButton");
  }

  visit = async () => {
    await this.url;
  };

  fillNewBtnName = async (text) => {
    await this.newBtnName.fill(text);
  };

  clickUpdatingBtn = async () => {
    await this.updatingBtn.click();
  };

  expectedBtnText = async (text) => {
    await expect(this.updatingBtn).toHaveText(text);
  };
}
