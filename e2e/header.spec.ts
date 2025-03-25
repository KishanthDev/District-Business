import { test, expect } from "@playwright/test";

test.describe("Header Component", () => {
  test("Clicking logo or text navigates to home page", async ({ page }) => {
    await page.goto("/contact");

    const logo = page.getByRole("img", { name: "Logo" });
    const districtText = page.getByText("District", { exact: true });
    const darkModeToggle = page.getByRole("button", { name: "Toggle dark mode" });

    await logo.click();
    await expect(page).toHaveURL("/");

    await darkModeToggle.click();

    await expect(districtText).toBeVisible();
    await districtText.click();
    await expect(page).toHaveURL("/");
  });


  test("Dark mode toggle should always be visible", async ({ page }) => {
    await page.goto("/");

    const darkModeToggle = page.getByRole("button", { name: "Toggle dark mode" });

    await expect(darkModeToggle).toBeVisible();
  });


  test("Mobile menu should open and close", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 800 });
    await page.goto("/");

    const menuButton = page.getByRole("button", { name: "Open menu" });

    const menu = page.getByRole("navigation");

    await menuButton.click();
    await expect(menu).toBeVisible();

    await menuButton.click();
    await expect(menu).not.toBeVisible();
  });

});
