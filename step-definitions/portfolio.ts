// import { Given, When, Then } from "@cucumber/cucumber";
// import { expect } from "@playwright/test";
// import { getPage } from "../hooks/hooks"; // Assume you have a hooks file returning the page

// let page = getPage();

// Given("I open the portfolio website", async function () {
//   page = this.page; // Use the page from hooks
//   await page.goto("http://localhost:3001/");
// });

// Then("I should see the {string} link", async function (linkName: string) {
//   await expect(page.getByRole('link', { name: linkName })).toBeVisible();
// });

// When("I click the {string} link", async function (linkName: string) {
//   await page.getByRole('link', { name: linkName, exact: true }).click();
// });

// Then("I should see the heading {string}", async function (heading: string) {
//   await expect(page.getByRole('heading', { name: heading })).toBeVisible();
// });

// Then("I should see the profile image {string}", async function (altText: string) {
//   await expect(page.getByRole('img', { name: altText })).toBeVisible();
// });

// Then("I should see the contact number {string}", async function (number: string) {
//   await expect(page.getByRole('link', { name: number })).toBeVisible();
// });

// When("I click the {string} button and select {string}", async function (buttonName: string, menuItem: string) {
//   await page.getByRole('button', { name: buttonName }).click();
//   await page.getByRole('menuitem', { name: menuItem }).click();
// });

// Then("I should see text {string}", async function (text: string) {
//   await expect(page.getByText(text)).toBeVisible();
// });
