# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: portfolio-user-flow.spec.ts >> test forum and login
- Location: e2e/portfolio-user-flow.spec.ts:21:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByText('eric_example')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e5]:
    - link "About" [ref=e6] [cursor=pointer]:
      - /url: /portfolio/about
    - link "Gallery" [ref=e7] [cursor=pointer]:
      - /url: /portfolio/gallery
    - link "Devlog" [ref=e8] [cursor=pointer]:
      - /url: /portfolio/devlog
    - link "Forum" [ref=e9] [cursor=pointer]:
      - /url: /portfolio/forum
    - link "Login" [ref=e10] [cursor=pointer]:
      - /url: /portfolio/login
    - link "Register" [ref=e11] [cursor=pointer]:
      - /url: /portfolio/register
    - link "Chat" [ref=e12] [cursor=pointer]:
      - /url: /portfolio/chat
    - button "anonymous" [ref=e13]
  - generic [ref=e14]:
    - heading "Login" [level=1] [ref=e15]
    - generic [ref=e16]:
      - generic [ref=e17]: "Server Status:"
      - generic [ref=e18]: Server Online ✓
    - generic [ref=e21]:
      - generic [ref=e22]:
        - generic [ref=e23]: Username
        - textbox "Username" [ref=e24]:
          - /placeholder: username
          - text: eric_example
      - generic [ref=e25]:
        - generic [ref=e26]: Password
        - textbox "Password" [active] [ref=e27]:
          - /placeholder: password
          - text: eric_rules_hard
      - button "Login" [ref=e28]
    - button "Test Cookie" [ref=e30]
    - link "Don't have an account? Sign Up" [ref=e32] [cursor=pointer]:
      - /url: /portfolio/register
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test('is the page alive', async ({ page }) => {
  4   |   await page.goto('https://samulinukala.github.io/portfolio/');
  5   |   await page.getByRole('link', { name: 'About' }).click();
  6   |   await page.getByText('Hello. I am learning').click();
  7   | });
  8   | test('does devlog search work', async ({ page }) => {
  9   |   await page.goto('https://samulinukala.github.io/portfolio/');
  10  |  await page.getByRole('link', { name: 'Devlog' }).click();
  11  |   await page.getByRole('textbox', { name: 'Search devlogs...' }).click();
  12  |   await page.getByRole('textbox', { name: 'Search devlogs...' }).fill('arh');
  13  |   await page.getByRole('button', { name: 'Read full log (4 more' }).click();
  14  |   await page.getByText('I currently work on adding').click();
  15  |   await page.getByText('the improvements so far').click();
  16  |   await page.getByText('I have read a book about').click();
  17  |   await page.locator('.space-y-4').click();
  18  |   });
  19  | 
  20  | 
  21  | test('test forum and login', async ({ page }) => {
  22  |   await page.goto('https://samulinukala.github.io/portfolio/');
  23  |   await page.getByRole('link', { name: 'About' }).click();
  24  |   await page.getByRole('link', { name: 'Gallery' }).click();
  25  |   await page.getByRole('link', { name: 'Devlog' }).click();
  26  |   await page.getByRole('textbox', { name: 'Search devlogs...' }).click();
  27  |   await page.getByRole('textbox', { name: 'Search devlogs...' }).fill('app');
  28  |   await page.getByText('Architecture & frontendArchitecture and design improvements🗓️ 28.9.2026I have').click();
  29  |   await page.getByRole('link', { name: 'Forum' }).click();
  30  |   await page.getByRole('button', { name: 'human trials Explore' }).click();
  31  |   await page.getByRole('button', { name: 'human testing stage who knows' }).click();
  32  |   await page.getByText('who knows if this works this').click();
  33  |   await page.getByRole('link', { name: 'Login' }).click();
  34  |   await page.getByRole('textbox', { name: 'Username' }).click();
  35  |   await page.getByRole('textbox', { name: 'Username' }).fill('eric_example');
  36  |   await page.getByRole('textbox', { name: 'Password' }).click();
  37  |   await page.getByRole('textbox', { name: 'Password' }).fill('eric_rules_hard');
  38  |   page.once('dialog', dialog => {
  39  |     console.log(`Dialog message: ${dialog.message()}`);
  40  |     dialog.dismiss().catch(() => {});
  41  |   });
> 42  |   await page.getByText('eric_example').click();
      |                                        ^ Error: locator.click: Test timeout of 30000ms exceeded.
  43  |   await page.getByRole('button', { name: 'Login' }).click();
  44  |   await page.getByRole('link', { name: 'Forum' }).click();
  45  |   await page.getByRole('button', { name: 'testresults Explore' }).click();
  46  |   await page.locator('button:nth-child(18)').click();
  47  |   await page.getByRole('button', { name: 'Back to List' }).click();
  48  |   await page.getByRole('button', { name: 'Post in this Topic' }).click();
  49  |   await page.getByRole('textbox', { name: 'Give your discussion a clear' }).click();
  50  |   await page.getByRole('textbox', { name: 'e.g. General, Suggestions,' }).click();
  51  |   await page.getByRole('textbox', { name: 'e.g. General, Suggestions,' }).fill('automated testing');
  52  |   await page.getByRole('textbox', { name: 'Give your discussion a clear' }).click();
  53  |   await page.getByRole('textbox', { name: 'Give your discussion a clear' }).fill('regular test');
  54  |   await page.getByRole('textbox', { name: 'What\'s on your mind? Write' }).click();
  55  |   await page.getByRole('textbox', { name: 'What\'s on your mind? Write' }).fill('this is a playwright srcript');
  56  |   await page.getByRole('textbox', { name: 'What\'s on your mind? Write' }).press('ArrowLeft');
  57  |   await page.getByRole('textbox', { name: 'What\'s on your mind? Write' }).press('ArrowLeft');
  58  |   await page.getByRole('textbox', { name: 'What\'s on your mind? Write' }).press('ArrowLeft');
  59  |   await page.getByRole('textbox', { name: 'What\'s on your mind? Write' }).press('ArrowLeft');
  60  |   await page.getByRole('textbox', { name: 'What\'s on your mind? Write' }).press('ArrowLeft');
  61  |   await page.getByRole('textbox', { name: 'What\'s on your mind? Write' }).fill('this is a playwright script');
  62  |   await page.getByRole('textbox', { name: 'What\'s on your mind? Write' }).press('ArrowRight');
  63  |   await page.getByRole('button', { name: 'Publish Post' }).click();
  64  |   await page.getByRole('button', { name: 'automated testing Explore' }).click();
  65  | });
  66  | test('testing chat', async ({ page }) => {
  67  |   await page.locator('body').click();
  68  |   await page.getByRole('button', { name: 'anonymous' }).click();
  69  |   await page.getByRole('link', { name: 'Login' }).dblclick();
  70  |   await page.getByRole('textbox', { name: 'Username' }).click();
  71  |   await page.getByRole('textbox', { name: 'Username' }).fill('eric_example');
  72  |   await page.getByRole('textbox', { name: 'Password' }).dblclick();
  73  |   await page.getByRole('textbox', { name: 'Password' }).fill('eric_rules_hard');
  74  |   page.once('dialog', dialog => {
  75  |     console.log(`Dialog message: ${dialog.message()}`);
  76  |     dialog.dismiss().catch(() => {});
  77  |   });
  78  |   await page.getByRole('button', { name: 'Login' }).click();
  79  |   await page.getByRole('link', { name: 'Chat' }).click();
  80  |   await page.getByRole('textbox', { name: 'Go ahead, say something...' }).click();
  81  |   await page.getByRole('textbox', { name: 'Go ahead, say something...' }).fill('testing');
  82  |   await page.getByRole('textbox', { name: 'Go ahead, say something...' }).press('Enter');
  83  |   await page.getByText('eric_exampletesting').click();
  84  | });
  85  | 
  86  | test('testing forum', async ({ page }) => {
  87  |   await page.goto('https://samulinukala.github.io/portfolio/');
  88  |   await page.getByRole('link', { name: 'Login' }).click();
  89  |   await page.getByText('Server Online ✓').click();
  90  |   await page.getByRole('textbox', { name: 'Username' }).click();
  91  |   await page.getByRole('textbox', { name: 'Username' }).fill('eric_example');
  92  |   await page.getByRole('textbox', { name: 'Password' }).click();
  93  |   await page.getByRole('textbox', { name: 'Password' }).fill('eric_rules_hard');
  94  |   page.once('dialog', dialog => {
  95  |     console.log(`Dialog message: ${dialog.message()}`);
  96  |     dialog.dismiss().catch(() => {});
  97  |   });
  98  |   await page.getByRole('button', { name: 'Login' }).click();
  99  |   await page.getByRole('link', { name: 'Forum' }).click();
  100 |   await page.getByRole('button', { name: 'eric_example' }).click();
  101 |   await page.getByRole('button', { name: 'Create a Post' }).click();
  102 |   await page.getByRole('textbox', { name: 'e.g. General, Suggestions,' }).click();
  103 |   await page.getByRole('textbox', { name: 'e.g. General, Suggestions,' }).fill('automatic test');
  104 |   await page.getByRole('textbox', { name: 'Give your discussion a clear' }).click();
  105 |   await page.getByRole('textbox', { name: 'Give your discussion a clear' }).fill('just a script runnin');
  106 |   await page.getByRole('textbox', { name: 'What\'s on your mind? Write' }).click();
  107 |   await page.getByRole('textbox', { name: 'What\'s on your mind? Write' }).fill('script running using playwright');
  108 |   await page.getByRole('button', { name: 'Publish Post' }).click();
  109 |   await page.getByText('Your message has been posted').click();
  110 |   await page.getByRole('heading', { name: 'Post Created Successfully!' }).click();
  111 | });
```