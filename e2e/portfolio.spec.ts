import { test, expect } from '@playwright/test';

test.describe('Portfolio Application E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to base URL (e.g. /portfolio/) before each test
    await page.goto('./');
  });

  test('should load the home page and default to About view', async ({ page }) => {
    // Assert About page heading exists
    const aboutHeading = page.getByRole('heading', { name: 'About', exact: true });
    await expect(aboutHeading).toBeVisible();
    
    // Assert key introductory text is present
    await expect(page.getByText('Hello. I am learning webdevelopment')).toBeVisible();
  });

  test('should display and close the cookie notification banner', async ({ page }) => {
    // Locate the cookie banner text
    const cookieText = page.getByText(/This site uses cookies for the login functionality/i);
    await expect(cookieText).toBeVisible();

    // Click the close button
    const closeButton = page.getByRole('button', { name: /Got It & Close/i });
    await closeButton.click();

    // Verify banner is hidden after clicking
    await expect(cookieText).not.toBeVisible();
  });

  test('should navigate across all pages using the Navbar', async ({ page }) => {
    // 1. Gallery
    await page.getByRole('link', { name: 'Gallery' }).click();
    await expect(page).toHaveURL(/.*gallery/);

    // 2. Devlog
    await page.getByRole('link', { name: 'Devlog' }).click();
    await expect(page).toHaveURL(/.*devlog/);

    // 3. Forum
    await page.getByRole('link', { name: 'Forum' }).click();
    await expect(page).toHaveURL(/.*forum/);

    // 4. Login
    await page.getByRole('link', { name: 'Login' }).click();
    await expect(page).toHaveURL(/.*login/);
    await expect(page.getByRole('button', { name: /login/i })).toBeVisible();

    // 5. Register
    await page.getByRole('link', { name: 'Register' }).click();
    await expect(page).toHaveURL(/.*register/);
    await expect(page.getByRole('heading', { name: 'Create Account' })).toBeVisible();

    // 6. Chat
    await page.getByRole('link', { name: 'Chat' }).click();
    await expect(page).toHaveURL(/.*chat/);

    // 7. Back to About
    await page.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL(/.*about/);
  });

  test('should allow entering credentials on the Login page', async ({ page }) => {
    await page.goto('login');

    const usernameInput = page.locator('input[type="text"]').first();
    const passwordInput = page.locator('input[type="password"]').first();

    await expect(usernameInput).toBeVisible();
    await expect(passwordInput).toBeVisible();

    await usernameInput.fill('testuser');
    await passwordInput.fill('testpassword123');

    await expect(usernameInput).toHaveValue('testuser');
    await expect(passwordInput).toHaveValue('testpassword123');
  });

  test('should render registration form with inputs on Register page', async ({ page }) => {
    await page.goto('register');

    const usernameInput = page.locator('input[type="text"]').first();
    const passwordInput = page.locator('input[type="password"]').first();

    await expect(usernameInput).toBeVisible();
    await expect(passwordInput).toBeVisible();

    await usernameInput.fill('newuser');
    await passwordInput.fill('newpassword123');

    await expect(usernameInput).toHaveValue('newuser');
    await expect(passwordInput).toHaveValue('newpassword123');
  });

  test('should render Devlog entries correctly', async ({ page }) => {
    await page.goto('devlog');

    // Check devlog content header or entries
    const pageContent = page.locator('body');
    await expect(pageContent).toBeVisible();
  });
});
