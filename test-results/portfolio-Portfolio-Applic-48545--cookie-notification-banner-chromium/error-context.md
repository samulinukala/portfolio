# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: portfolio.spec.ts >> Portfolio Application E2E Tests >> should display and close the cookie notification banner
- Location: e2e/portfolio.spec.ts:18:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText(/This site uses cookies for the login functionality/i)
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByText(/This site uses cookies for the login functionality/i) with timeout 5000ms
  - waiting for getByText(/This site uses cookies for the login functionality/i)

```

```yaml
- link "About":
  - /url: /portfolio/about
- link "Gallery":
  - /url: /portfolio/gallery
- link "Devlog":
  - /url: /portfolio/devlog
- link "Forum":
  - /url: /portfolio/forum
- link "Login":
  - /url: /portfolio/login
- link "Register":
  - /url: /portfolio/register
- link "Chat":
  - /url: /portfolio/chat
- button "anonymous"
- heading "About" [level=1]
- paragraph: Hello. I am learning webdevelopment and I have started to make this website to improve my skills. it will slowly improve over time. It uses React framework for the components. It uses Vite for building the site. I also draw so I added an gallery as chalenge. The chat currently works but takes a while to start. Time will tell how it will pan out.I am hoping to make it a sort of showcase for my stuff and what I have done. Time will tell how it will pan out.
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test.describe('Portfolio Application E2E Tests', () => {
  4   |   test.beforeEach(async ({ page }) => {
  5   |     // Navigate to base URL (e.g. /portfolio/) before each test
  6   |     await page.goto('./');
  7   |   });
  8   | 
  9   |   test('should load the home page and default to About view', async ({ page }) => {
  10  |     // Assert About page heading exists
  11  |     const aboutHeading = page.getByRole('heading', { name: 'About', exact: true });
  12  |     await expect(aboutHeading).toBeVisible();
  13  |     
  14  |     // Assert key introductory text is present
  15  |     await expect(page.getByText('Hello. I am learning webdevelopment')).toBeVisible();
  16  |   });
  17  | 
  18  |   test('should display and close the cookie notification banner', async ({ page }) => {
  19  |     // Locate the cookie banner text
  20  |     const cookieText = page.getByText(/This site uses cookies for the login functionality/i);
> 21  |     await expect(cookieText).toBeVisible();
      |                              ^ Error: expect(locator).toBeVisible() failed
  22  | 
  23  |     // Click the close button
  24  |     const closeButton = page.getByRole('button', { name: /Got It & Close/i });
  25  |     await closeButton.click();
  26  | 
  27  |     // Verify banner is hidden after clicking
  28  |     await expect(cookieText).not.toBeVisible();
  29  |   });
  30  | 
  31  |   test('should navigate across all pages using the Navbar', async ({ page }) => {
  32  |     // 1. Gallery
  33  |     await page.getByRole('link', { name: 'Gallery' }).click();
  34  |     await expect(page).toHaveURL(/.*gallery/);
  35  | 
  36  |     // 2. Devlog
  37  |     await page.getByRole('link', { name: 'Devlog' }).click();
  38  |     await expect(page).toHaveURL(/.*devlog/);
  39  | 
  40  |     // 3. Forum
  41  |     await page.getByRole('link', { name: 'Forum' }).click();
  42  |     await expect(page).toHaveURL(/.*forum/);
  43  | 
  44  |     // 4. Login
  45  |     await page.getByRole('link', { name: 'Login' }).click();
  46  |     await expect(page).toHaveURL(/.*login/);
  47  |     await expect(page.getByRole('button', { name: /login/i })).toBeVisible();
  48  | 
  49  |     // 5. Register
  50  |     await page.getByRole('link', { name: 'Register' }).click();
  51  |     await expect(page).toHaveURL(/.*register/);
  52  |     await expect(page.getByRole('heading', { name: 'Create Account' })).toBeVisible();
  53  | 
  54  |     // 6. Chat
  55  |     await page.getByRole('link', { name: 'Chat' }).click();
  56  |     await expect(page).toHaveURL(/.*chat/);
  57  | 
  58  |     // 7. Back to About
  59  |     await page.getByRole('link', { name: 'About' }).click();
  60  |     await expect(page).toHaveURL(/.*about/);
  61  |   });
  62  | 
  63  |   test('should allow entering credentials on the Login page', async ({ page }) => {
  64  |     await page.goto('login');
  65  | 
  66  |     const usernameInput = page.locator('input[type="text"]').first();
  67  |     const passwordInput = page.locator('input[type="password"]').first();
  68  | 
  69  |     await expect(usernameInput).toBeVisible();
  70  |     await expect(passwordInput).toBeVisible();
  71  | 
  72  |     await usernameInput.fill('testuser');
  73  |     await passwordInput.fill('testpassword123');
  74  | 
  75  |     await expect(usernameInput).toHaveValue('testuser');
  76  |     await expect(passwordInput).toHaveValue('testpassword123');
  77  |   });
  78  | 
  79  |   test('should render registration form with inputs on Register page', async ({ page }) => {
  80  |     await page.goto('register');
  81  | 
  82  |     const usernameInput = page.locator('input[type="text"]').first();
  83  |     const passwordInput = page.locator('input[type="password"]').first();
  84  | 
  85  |     await expect(usernameInput).toBeVisible();
  86  |     await expect(passwordInput).toBeVisible();
  87  | 
  88  |     await usernameInput.fill('newuser');
  89  |     await passwordInput.fill('newpassword123');
  90  | 
  91  |     await expect(usernameInput).toHaveValue('newuser');
  92  |     await expect(passwordInput).toHaveValue('newpassword123');
  93  |   });
  94  | 
  95  |   test('should render Devlog entries correctly', async ({ page }) => {
  96  |     await page.goto('devlog');
  97  | 
  98  |     // Check devlog content header or entries
  99  |     const pageContent = page.locator('body');
  100 |     await expect(pageContent).toBeVisible();
  101 |   });
  102 | });
  103 | 
```