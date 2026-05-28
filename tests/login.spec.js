import { test, expect } from "@playwright/test";

test("navigate to login page", async ({ page }) => {
  await page.goto("http://automationexercise.com");
  await page.getByRole("link", { name: " Signup / Login" }).click();
  await expect(page).toHaveURL(/login/);
});
