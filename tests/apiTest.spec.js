import { test, expect } from "@playwright/test";
//exercise 6 - API testing
//we can use the request fixture to make API calls and validate responses without needing a browser context.
// This allows us to test our backend APIs directly and ensure they are working as expected.
test("api test", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts/1",
  );
  expect(response.status()).toBe(200);
  const users = await response.json();
  expect(users).toHaveProperty("id", 1);
});

test("api test with post request", async ({ request }) => {
  const response = await request.post(
    "https://jsonplaceholder.typicode.com/posts",
    {
      data: {
        title: "foo",
        body: "bar",
        userId: 1,
      },
    },
  );
  expect(response.status()).toBe(201); //201 is the status code for successful resource creation
  const post = await response.json(); //parse the response body as JSON
  expect(post).toHaveProperty("title", "foo"); //validate that the response contains the expected title
});
