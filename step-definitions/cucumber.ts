


// import { Given, When, Then } from "@cucumber/cucumber";
// import { expect } from "@playwright/test";
// import { Page } from "playwright";
// import { getPage } from "../hooks/hooks"; // adjust if your hooks path is different

// let page: Page;

// Given("I open the Cucumber website", async function () {
//   page = getPage ? getPage() : this.page;
//   await page.goto("https://cucumber.io/");
// });



// Then("I should see the Cucumber heading", async function () {
//   const heading = page.getByRole("heading", { name: "Cucumber lets you write" }).getByRole("strong");
//   await heading.scrollIntoViewIfNeeded();
//   await expect(heading).toBeVisible();
// });


// When("I click on the {string} link", async function (linkName: string) {
//   const link = page.getByRole("link", { name: linkName });
//   await link.scrollIntoViewIfNeeded();
//   await link.click();
// });

// When("I click on the 10-minute tutorial link", async function () {
//   // Use specific locator to avoid multiple matches
//   const tutorialLink = page.getByRole("link", { name: "📄️ 10-minute tutorial Get" });
//   await tutorialLink.scrollIntoViewIfNeeded();
//   await tutorialLink.click();
// });


// Then("I should see the scenario example text", async function () {
//   const scenarioText = page.getByText(
//     "Scenario: Breaker guesses a word Given the Maker has chosen a word When the"
//   );
//   await scenarioText.scrollIntoViewIfNeeded();
//   await expect(scenarioText).toBeVisible();
// });


// Then("I should see the npm install command", async function () {
//   const npmCode = page.getByRole("code").filter({ hasText: "npm install --save-dev @" });
//   await npmCode.scrollIntoViewIfNeeded();
//   await expect(npmCode).toBeVisible();
// });


// When("I select the {string} tab", async function (tabName: string) {
//   const tab = page.getByRole("tab", { name: tabName });
//   await tab.scrollIntoViewIfNeeded();
//   await tab.click();
// });


// Then("I should see the code example", async function () {
//   const codeExample = page
//     .getByText("const assert = require('assert');const { Given, When, Then } = require('@")
//     .nth(1);
//   await codeExample.scrollIntoViewIfNeeded();
//   await expect(codeExample).toBeVisible();
// });


// Then("I should see the scenario output", async function () {
//   const scenarioOutput = page.getByText("...1 scenario (1 passed)3");
//   await scenarioOutput.scrollIntoViewIfNeeded();
//   await expect(scenarioOutput).toBeVisible();
// });


// When("I toggle the theme", async function () {
//   const themeToggle = page.getByRole("button", { name: "Switch between dark and light" });
//   await themeToggle.scrollIntoViewIfNeeded();
//   await themeToggle.click();
// });

