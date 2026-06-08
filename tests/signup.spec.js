import { test, expect } from "@playwright/test";
import { SignupPage } from "../pages/SignupPage";

//exercise 5 - page object model implementation
//page specific code is moved to a separate class (SignupPage) which encapsulates the interactions with the signup page.
test("signup page test", async ({ page }) => {
  const signupPage = new SignupPage(page);
  await signupPage.navigate();
  await signupPage.fillSignupForm("auqid", "auqid6969@example.com");
  await signupPage.clickSignup();
  await expect(page).toHaveURL("https://automationexercise.com/signup");
});
