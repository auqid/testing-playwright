import { test, expect } from "@playwright/test";

//exercise 1 - hooks implementation
//this version is better because hooks helps us avoid code repetition and makes our tests cleaner and more maintainable.
//  We can easily navigate to the home page before each test without having to write the same code multiple times.
test.beforeEach(async ({ page }) => {
  await page.goto("https://automationexercise.com");
});

test("home page loads", async ({ page }) => {
  await expect(page).toHaveTitle(/Automation Exercise/);
});

test("login link visible", async ({ page }) => {
  await expect(
    page.getByRole("link", {
      name: " Signup / Login",
    }),
  ).toBeVisible();
});

//exercise 2 - fixture exploration
//fixtures are created by playwright and passed to the test function as arguments.
//if playwright didnt have fixtures we would have to create and manage them ourselves.
// test("fixture exploration", async ({ page }) => {
//   console.log(typeof page); //object
// });
