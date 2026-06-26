import { Page } from "@playwright/test";

export class LoginPage {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto("https://www.lawtechai.xyz/login");
    await this.page
      .getByRole("button", { name: "Continue to Sign In" })
      .click();
  }

  async fillLoginForm(email: string, password: string) {
    await this.page.getByRole("textbox", { name: "Email address" }).fill(email);
    await this.page.getByRole("textbox", { name: "Password" }).fill(password);
  }

  async clickLogin() {
    await this.page
      .getByRole("button", { name: "Continue", exact: true })
      .click();
  }
}
