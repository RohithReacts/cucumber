// import { Given, When, Then } from "@cucumber/cucumber";
// import { expect } from "@playwright/test";
// import { getPage } from "../hooks/hooks";

// let page = getPage();

// Given("I open the American Tourister website", async function () {
//   page = this.page;
//   await page.goto("http://localhost:3000/");
// });

// Then("I should see the {string} link", async function (linkName: string) {
//   const link = page.getByRole("link", { name: linkName });
//   await link.scrollIntoViewIfNeeded();
//   await expect(link).toBeVisible();
// });

// When("I click the {string} link", async function (linkName: string) {
//   const link = page.getByRole("link", { name: linkName });
//   await link.scrollIntoViewIfNeeded();
//   await link.click();
// });

// Then("I should see the {string} heading", async function (headingName: string) {
//   const heading = page.getByRole("heading", { name: headingName });
//   await heading.scrollIntoViewIfNeeded();
//   await expect(heading).toBeVisible();
// });

// Then(
//   "I should see the welcome message {string}",
//   async function (welcomeText: string) {
//     const heading = page.getByRole("heading", { name: welcomeText, exact: true });
//     await heading.scrollIntoViewIfNeeded();
//     await expect(heading).toBeVisible();
//   }
// );
