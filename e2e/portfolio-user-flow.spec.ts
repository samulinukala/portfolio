import { test, expect } from '@playwright/test';

test('is the page alive', async ({ page }) => {
  await page.goto('https://samulinukala.github.io/portfolio/');
  await page.getByRole('link', { name: 'About' }).click();
  await page.getByText('Hello. I am learning').click();
});
test('does devlog search work', async ({ page }) => {
  await page.goto('https://samulinukala.github.io/portfolio/');
 await page.getByRole('link', { name: 'Devlog' }).click();
  await page.getByRole('textbox', { name: 'Search devlogs...' }).click();
  await page.getByRole('textbox', { name: 'Search devlogs...' }).fill('arh');
  await page.getByRole('button', { name: 'Read full log (4 more' }).click();
  await page.getByText('I currently work on adding').click();
  await page.getByText('the improvements so far').click();
  await page.getByText('I have read a book about').click();
  await page.locator('.space-y-4').click();
  });


test('test forum and login', async ({ page }) => {
  await page.goto('https://samulinukala.github.io/portfolio/');
  await page.getByRole('link', { name: 'About' }).click();
  await page.getByRole('link', { name: 'Gallery' }).click();
  await page.getByRole('link', { name: 'Devlog' }).click();
  await page.getByRole('textbox', { name: 'Search devlogs...' }).click();
  await page.getByRole('textbox', { name: 'Search devlogs...' }).fill('app');
  await page.getByText('Architecture & frontendArchitecture and design improvements🗓️ 28.9.2026I have').click();
  await page.getByRole('link', { name: 'Forum' }).click();
  await page.getByRole('button', { name: 'human trials Explore' }).click();
  await page.getByRole('button', { name: 'human testing stage who knows' }).click();
  await page.getByText('who knows if this works this').click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('eric_example');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('eric_rules_hard');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByText('eric_example').click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Forum' }).click();
  await page.getByRole('button', { name: 'testresults Explore' }).click();
  await page.locator('button:nth-child(18)').click();
  await page.getByRole('button', { name: 'Back to List' }).click();
  await page.getByRole('button', { name: 'Post in this Topic' }).click();
  await page.getByRole('textbox', { name: 'Give your discussion a clear' }).click();
  await page.getByRole('textbox', { name: 'e.g. General, Suggestions,' }).click();
  await page.getByRole('textbox', { name: 'e.g. General, Suggestions,' }).fill('automated testing');
  await page.getByRole('textbox', { name: 'Give your discussion a clear' }).click();
  await page.getByRole('textbox', { name: 'Give your discussion a clear' }).fill('regular test');
  await page.getByRole('textbox', { name: 'What\'s on your mind? Write' }).click();
  await page.getByRole('textbox', { name: 'What\'s on your mind? Write' }).fill('this is a playwright srcript');
  await page.getByRole('textbox', { name: 'What\'s on your mind? Write' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'What\'s on your mind? Write' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'What\'s on your mind? Write' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'What\'s on your mind? Write' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'What\'s on your mind? Write' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'What\'s on your mind? Write' }).fill('this is a playwright script');
  await page.getByRole('textbox', { name: 'What\'s on your mind? Write' }).press('ArrowRight');
  await page.getByRole('button', { name: 'Publish Post' }).click();
  await page.getByRole('button', { name: 'automated testing Explore' }).click();
});
test('testing chat', async ({ page }) => {
  await page.locator('body').click();
  await page.getByRole('button', { name: 'anonymous' }).click();
  await page.getByRole('link', { name: 'Login' }).dblclick();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('eric_example');
  await page.getByRole('textbox', { name: 'Password' }).dblclick();
  await page.getByRole('textbox', { name: 'Password' }).fill('eric_rules_hard');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Chat' }).click();
  await page.getByRole('textbox', { name: 'Go ahead, say something...' }).click();
  await page.getByRole('textbox', { name: 'Go ahead, say something...' }).fill('testing');
  await page.getByRole('textbox', { name: 'Go ahead, say something...' }).press('Enter');
  await page.getByText('eric_exampletesting').click();
});

test('testing forum', async ({ page }) => {
  await page.goto('https://samulinukala.github.io/portfolio/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByText('Server Online ✓').click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('eric_example');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('eric_rules_hard');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Forum' }).click();
  await page.getByRole('button', { name: 'eric_example' }).click();
  await page.getByRole('button', { name: 'Create a Post' }).click();
  await page.getByRole('textbox', { name: 'e.g. General, Suggestions,' }).click();
  await page.getByRole('textbox', { name: 'e.g. General, Suggestions,' }).fill('automatic test');
  await page.getByRole('textbox', { name: 'Give your discussion a clear' }).click();
  await page.getByRole('textbox', { name: 'Give your discussion a clear' }).fill('just a script runnin');
  await page.getByRole('textbox', { name: 'What\'s on your mind? Write' }).click();
  await page.getByRole('textbox', { name: 'What\'s on your mind? Write' }).fill('script running using playwright');
  await page.getByRole('button', { name: 'Publish Post' }).click();
  await page.getByText('Your message has been posted').click();
  await page.getByRole('heading', { name: 'Post Created Successfully!' }).click();
});