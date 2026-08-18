import test, { expect } from "@playwright/test";

test ('Visitando página do Playwright', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    // await page.locator('.getStarted_Sjon').click();
    await page.getByText('Get started').click();
    const text = await page.getByText('enables reliable web automation for testing, scripting, and AI agents.').textContent();
    console.log(text);
})