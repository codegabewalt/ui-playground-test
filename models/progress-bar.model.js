export class ProgressBarPage {
  constructor(page) {
    this.page = page;
    this.url = page.goto("/progressbar");
    this.startBtn = page.locator("#startButton");
    this.stopBtn = page.locator("#stopButton");
    this.progressBar = page.locator("#progressBar");
  }

  visit = async () => {
    await this.url;
  };

  clickStartBtn = async () => {
    await this.startBtn.click();
  };

  clickStopBtn = async () => {
    await this.stopBtn.click();
  };

  getProgressValue = async () => {
    return await this.progressBar.innerText();
  };
}
