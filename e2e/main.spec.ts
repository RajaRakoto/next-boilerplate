import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
	await page.goto("https://playwright.dev/");

	// expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/Playwright/);
});

test("get started link", async ({ page }) => {
	await page.goto("https://playwright.dev/");

	// click the get started link.
	await page.getByRole("link", { name: "Get started" }).click();

	// expects the URL to contain intro.
	await expect(page).toHaveURL(/.*intro/);
});
