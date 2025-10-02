import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { Page } from "playwright";
import { getPage } from "../hooks/hooks";

let page: Page;

// ---------- Base Navigation ----------

Given("I open the portfolio website", async function () {
  page = getPage ? getPage() : this.page;
  await page.goto("http://localhost:3000/");
});

// ---------- Section Navigation ----------

When("I click on {string} link", async function (linkName: string) {
  const link = page.getByRole("link", { name: linkName, exact: true });
  await link.scrollIntoViewIfNeeded();
  await link.click();
});

Then("I should see the {string} link visible", async function (linkName: string) {
  const link = page.getByRole("link", { name: linkName, exact: true });
  await expect(link).toBeVisible();
});

Then("I should see the {string} heading", async function (heading: string) {
  const headingLocator = page.getByRole("heading", { name: heading });
  await headingLocator.scrollIntoViewIfNeeded();
  await expect(headingLocator).toBeVisible();
});

Then("I should see the {string} image", async function (altText: string) {
  const image = page.getByRole("img", { name: altText });
  await image.scrollIntoViewIfNeeded();
  await expect(image).toBeVisible();
});

// ---------- Services Menu ----------

When("I open Services and click {string}", async function (menuItem: string) {
  const servicesButton = page.getByRole("button", { name: "Services" });
  await servicesButton.scrollIntoViewIfNeeded();
  await servicesButton.click();

  const menuOption = page.getByRole("menuitem", { name: menuItem });
  await menuOption.scrollIntoViewIfNeeded();
  await menuOption.click();
});

Then("I should see the {string} text", async function (expectedText: string) {
  const textLocator = page.getByText(expectedText, { exact: false });
  await textLocator.scrollIntoViewIfNeeded();
  await expect(textLocator).toBeVisible();
});

// ---------- Generic Page/Section Check ----------
// Covers Blog, Testimonials, Team, etc.
Then("I should see the {string} page or section", async function (section: string) {
  const sectionLocator = page.getByText(new RegExp(section, "i"));
  await sectionLocator.scrollIntoViewIfNeeded();
  await expect(sectionLocator).toBeVisible();
});
