import { test, expect } from "@playwright/test";

test("navigate to login page", async ({ page }) => {
  await page.goto("https://lawtechai.xyz");
  const loginlink = page.getByRole("link", { name: "Sign in" });
  await loginlink.click();
  await expect(page).toHaveURL("https://lawtechai.xyz/login");
  await expect(page.getByText("Welcome back")).toBeVisible();
});
