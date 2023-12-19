export class ScrollbarPage {
  constructor(page) {
    this.page = page;
    this.url = page.goto("/scrollbars");
    this.hidingBtn = page.locator("#hidingButton");
  }

  visit = async () => {
    await this.url;
  };

  clickHidingBtn = async () => {
    await this.hidingBtn.click();
  };
}
