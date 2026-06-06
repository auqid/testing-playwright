import { Page } from "@playwright/test";
//exercise 4 - page object model implementation
export class SignupPage {
  constructor(private page: Page) {}
  // private page: Page; --- IGNORE ---
  //constuctor(page:Page){
  // this.page = page; --- IGNORE ---}
  // the above code is a shorthand for the constructor and property declaration in one step. It automatically creates a private
  // property called page and assigns the value passed to the constructor to it.
  async navigate() {
    await this.page.goto("https://automationexercise.com/login");
  }
  async fillSignupForm(name: string, email: string) {
    await this.page.getByPlaceholder("Name").fill(name);
    await this.page.locator('input[data-qa="signup-email"]').fill(email);
  }
  async clickSignup() {
    await this.page.getByRole("button", { name: "Signup" }).click();
  }
}
