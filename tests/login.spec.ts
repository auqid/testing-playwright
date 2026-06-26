import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test("Verify Login feature", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.fillLoginForm("admin@lawtech.ai", "X9@kP2!m");
  await loginPage.clickLogin();

  await expect(page).toHaveURL("https://lawtechai.xyz/app/schedule");
  await expect(page).toHaveTitle(/LawTech AI/);
});
