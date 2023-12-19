import { expect } from "@playwright/test";

export class SampleAppPage {
  constructor(page) {
    this.page = page;
    this.url = page.goto("/sampleapp");
    this.usernameField = page.getByPlaceholder("User Name");
    this.passwordField = page.getByPlaceholder("********");
    this.loginButton = page.getByRole("button", { name: "Log In" });
    this.logoutButton = page.getByRole("button", { name: "Log Out" });
    this.loginStatus = page.locator("#loginstatus");
  }

  visit = async () => {
    await this.url;
  };

  fillUsernameField = async (username) => {
    await this.usernameField.fill(username);
  };

  fillPasswordField = async (password) => {
    await this.passwordField.fill(password);
  };

  clickLoginButton = async () => {
    await this.loginButton.click();
  };

  async clickLogoutButton() {
    await this.logoutButton.click();
  }

  async expectedLoginStatus(text) {
    await expect(this.loginStatus).toHaveText(text);
  }
}
