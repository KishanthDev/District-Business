import { test, expect } from "@playwright/test";

test.describe("Header Component", () => {
  test("Logo should be visible in light mode and 'District' text in dark mode", async ({ page }) => {
    await page.goto("/");

    const logo = page.locator("img[alt='Logo']");
    const districtText = page.locator("span.text-blue-500.font-bold").first();
    const darkModeToggle = page.locator("button[aria-label='Toggle dark mode']");

    await expect(logo).toBeVisible();
    await expect(districtText).toBeHidden();

    await darkModeToggle.waitFor({ state: "visible" });
    await darkModeToggle.click();

    await expect(logo).toBeHidden();
    await expect(districtText).toBeVisible();
  });

  test("Clicking logo or text navigates to home page", async ({ page }) => {
    await page.goto("/contact");

    const logo = page.locator("img[alt='Logo']");
    const districtText = page.locator("span.text-blue-500.font-bold").first();
    const darkModeToggle = page.locator("button[aria-label='Toggle dark mode']");

    await logo.click();
    await expect(page).toHaveURL("/");

    await darkModeToggle.waitFor({ state: "visible" });
    await darkModeToggle.click();

    await districtText.click();
    await expect(page).toHaveURL("/");
  });

  test("Dark mode toggle should always be visible", async ({ page }) => {
    await page.goto("/");
    const darkModeToggle = page.locator("button[aria-label='Toggle dark mode']");
    
    await darkModeToggle.waitFor({ state: "visible" });
    await expect(darkModeToggle).toBeVisible();
  });

  test("Mobile menu should open and close", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 800 });
    await page.goto("/");

    const menuButton = page.locator("button >> nth=1");
    const menu = page.locator("nav.flex.flex-col");

    await menuButton.click();
    await expect(menu).toBeVisible();

    await menuButton.click();
    await expect(menu).toBeHidden();
  });
});
