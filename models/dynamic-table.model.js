export class DynamicTablePage {
  constructor(page) {
    this.page = page;
    this.url = page.goto("/dynamictable");
    this.headers = page.locator('css=[role="columnheader"]');
    this.cells = page.locator('css=[role="cell"]');
    this.message = page.locator(".bg-warning");
  }

  visit = async () => {
    await this.url;
  };

  getCpuIndex = async () => {
    const headers = await this.headers.evaluateAll((elements) =>
      elements.map((element) => element.textContent)
    );

    return headers.indexOf("CPU");
  };

  getCpuValue = async () => {
    const content = await this.cells.evaluateAll((elements) =>
      elements.map((element) => element.textContent)
    );

    const row = content.splice(content.indexOf("Chrome"), 5);
    const index = await this.getCpuIndex();

    return row[index];
  };

  getMessage = async () => {
    return await this.message.innerText();
  };
}
