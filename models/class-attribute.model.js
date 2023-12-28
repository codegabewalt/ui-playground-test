import { expect } from "@playwright/test";

export class ClassAttributePage {
  constructor(page) {
    this.page = page;
    this.url = page.goto("/classattr");
    this.primaryBtn = page.locator(".btn-primary");
  }

  visit = async () => {
    await this.url;
  };

  clickPrimaryBtn = async () => {
    await this.primaryBtn.click();
  };
}
