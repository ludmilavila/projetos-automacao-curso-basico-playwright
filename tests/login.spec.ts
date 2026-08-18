import test, { expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
})

test.describe('Login com sucesso', () => {
    test('Deve realizar login com sucesso', async({ page }) => {
        await page.locator('#user-name').fill('standard_user');
        await page.locator('#password').fill('secret_sauce');
        await page.locator('#login-button').click();
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await expect(page.getByText('Products')).toBeVisible();
    })
})

test.describe('Login com falhas', () => {
    test('Deve apresentar erro ao realizar login com usuário bloqueado', async({ page }) => {
        await page.locator('#user-name').fill('locked_out_user');
        await page.locator('#password').fill('secret_sauce');
        await page.locator('#login-button').click();
        await expect(page.locator('[data-test="error"]')).toContainText('Sorry, this user has been locked out');
    })

    test('Deve apresentar erro ao realizar login com senha inválida', async({ page }) => {
        await page.locator('#user-name').fill('standard_user');
        await page.locator('#password').fill('secret_sauce1111');
        await page.locator('#login-button').click();
        await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
    })
})
