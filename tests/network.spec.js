import { test, expect } from "@playwright/test";
//exercise 7 - network monitoring

test("network monitor", async ({ page }) => {
  console.log("Monitoring network requests...............");
  page.on("response", (response) => {
    //event listener for network responses
    console.log(response.status(), response.url());
  });
  await page.goto("https://automationexercise.com");
});
