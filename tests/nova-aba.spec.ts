import { expect, test } from "@playwright/test";

test('Controlando uma nova aba', async({ page }) => {
    // Navegando para URL
    await page.goto('https://playwright.dev/');

    // Localiza o ícone do GitHub no menu superior
    const githubHeaderLink = page.getByRole('navigation').getByRole('link', { name: 'GitHub repository' });

    const pagePromise = page.context().waitForEvent('page');

    // Clica usando o comando padrão 
    await githubHeaderLink.click();

    // "Capturando" a nova página aberta para podermos controlá-la
    const newPage = await pagePromise;
    await newPage.waitForLoadState();

    console.log(await newPage.title());
    await expect(newPage).toHaveURL('https://github.com/microsoft/playwright');

    await page.bringToFront();
    await page.goto('https://www.google.com');
    
    await expect(page).toHaveURL('https://www.google.com/');
})