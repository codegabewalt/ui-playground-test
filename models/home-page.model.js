export class HomePage {
  constructor(page) {
    this.page = page;
    this.url = page.goto("/home");
    this.linkTags = page.locator("a");
  }

  visit = async () => {
    await this.url;
  };

  getAllLinks = async () => {
    return await this.linkTags.evaluateAll((elements) =>
      elements.map((element) => element.textContent)
    );
  };
}
