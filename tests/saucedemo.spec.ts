import test, { expect } from "@playwright/test";

test('Localizando por data-test', async ({ page }) => {
    await page.goto('https://saucedemo.com/');
    await page.getByTestId('username').fill('ludmila');
})

test('Asserts básicos', async({ page }) => {
    await page.goto('https://saucedemo.com/');
    const loginButton = await page.locator('input[id="login-button"]');
    await expect(loginButton).toHaveCSS('background-color', 'rgb(61, 220, 145)');
    await expect(loginButton).toHaveAttribute('value','Login');
    await expect(loginButton).toBeVisible();
}) 