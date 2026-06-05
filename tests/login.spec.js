import { test, expect } from "@playwright/test";

test("locators, assertions, exercise 1 and 2", async ({ page }) => {
  await page.goto("https://www.automationexercise.com");
  const loginLink = page.getByRole("link", { name: " Signup / Login" });
  const homeLink = page.getByRole("link", { name: "Home" });
  const constactUsLink = page.getByRole("link", { name: "Contact us" });
  const productsLink = page.getByRole("link", { name: "Products" });

  await loginLink.click();
  await expect(page).toHaveURL("https://www.automationexercise.com/login");
  // user can see element
  await expect(
    page.getByRole("heading", { name: "Login to your account" }),
  ).toBeVisible();
  const headingSignup = page.getByRole("heading", {
    name: "New User Signup!",
  });
  await expect(headingSignup).toContainText("New User Signup!");
  await expect(homeLink).toHaveText("Home");
  await expect(constactUsLink).toBeEnabled();
});

test("login is availabe, exercise 3", async ({ page }) => {
  await page.goto("https://www.automationexercise.com");
  const loginLink = page.getByRole("link", { name: " Signup / Login" });
  await loginLink.click();
  await expect(page).toHaveURL("https://www.automationexercise.com/login");
  await expect(
    page.getByRole("heading", { name: "Login to your account" }),
  ).toBeVisible();
  await expect(page.getByText("New User Signup!")).toBeVisible();
  // await expect(page.getByText("Wrong Text")).toBeVisible(); //gives error element not found
});

test("fill signup form", async ({ page }) => {
  await page.goto("https://www.automationexercise.com/login");

  await page.getByPlaceholder("Name").fill("auqid");
  await page.locator('input[data-qa="signup-email"]').fill("auqid@example.com");
  await page.getByRole("button", { name: "Signup" }).click();
  await expect(page.getByText("Enter Account Information")).toBeVisible();
  await expect(page).toHaveURL("https://www.automationexercise.com/signup");
});
