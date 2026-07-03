# GEMINI.md - Project Context and Developer Guidelines

Welcome! This file provides instructional context and architectural guidance for any developer or AI assistant working on the Portfolio project. 

---

## 1. Project Overview

*   **Project Name:** Personal Portfolio & Developer Sandbox ("my-react-app")
*   **Owner/Developer:** Samuli Nukala
*   **Live Site:** [https://samulinukala.github.io/](https://samulinukala.github.io/)
*   **Purpose:** A personal portfolio, interactive showcase, and sandbox for experimenting with web development. Features a custom image gallery, interactive blog devlog, a live message chat, user authentication, and a comments/discussion system.
*   **Key Services & APIs:**
    *   **Production Backend:** `https://portfolio-backend-tur1.onrender.com` (hosted on Render's free tier; has a cold-start delay of several seconds).
    *   **Chat API:** Custom endpoints under `/api/chat` for sending/receiving chat logs.
    *   **Auth API:** Custom endpoints under `/api/users` for login/registration (stores token in cookies).
    *   **Art database:** Artworks metadata are loaded dynamically from a GitHub Gist JSON file (`artDb.json`).

---

## 2. Technology Stack

*   **Frontend Framework:** React 19 (React `^19.2.0`, React DOM `^19.2.0`)
*   **Build Tool:** Vite 7 (Vite `^7.3.0`)
*   **Language:** TypeScript 5 (`typescript` `^5.9.3`) intermixed with legacy JavaScript / JSX.
*   **Styling:** Tailwind CSS v4 (`@tailwindcss/vite` `^4.1.18`)
*   **Component Libraries & Packages:**
    *   **Replyke Comments:** Integration of `@replyke` commenting packages (such as `@replyke/react-js`, `@replyke/comments-threaded-react-js`, etc.) for discussion boards.
    *   **Cookies:** `react-cookie` (`^8.0.1`) for managing user auth tokens and disclosure banners.
    *   **Routing:** Custom state-based navigation (managed via state index instead of full path routing).

---

## 3. Directory Layout & Architecture

```
/src/
├── App.css          # Global application layout styles
├── App.tsx          # Main application wrapper, state, routing, and sub-pages
├── devlog.jsx       # Devlog updates displaying nominal project progress reports
├── example-code.tsx # Reference file for registration state/validation hooks
├── gallery.tsx      # Standard React image/helper definitions
├── imggallery.jsx   # Main React component to render the custom drive art gallery
├── imggallery.tsx   # TSX version of the gallery component (in transition/duplicate)
├── index.css        # Base Tailwind entrypoint
├── main.jsx         # ReactDOM root mount, wraps App in CookiesProvider
├── navbar.jsx       # Custom header navigation component
├── navbarbutton.jsx # Navigation buttons
├── components/      # Reusable UI widgets and custom additions
│   ├── comments-social/   # Social/flat commenting features (Replyke)
│   └── comments-threaded/ # Nested threaded comment features (Replyke)
└── pages/           # High-level page-specific files (e.g., Home.jsx, About.jsx)
```

---

## 4. Building, Running, and Type-Checking

The following commands are configured in `package.json` to manage development and builds:

*   **Install dependencies:**
    ```bash
    npm install
    ```
*   **Start Local Dev Server:**
    ```bash
    npm run dev
    ```
    Launches Vite development environment (defaulting to `http://localhost:5173`).
*   **Type-Check (TypeScript):**
    ```bash
    npm run tsc
    ```
    Runs `tsc --noEmit` to verify type safety across the `.ts` and `.tsx` files.
*   **Build Application:**
    ```bash
    npm run build
    ```
    Compiles and bundles the application assets into the production-ready `/dist` directory.
*   **Linting:**
    ```bash
    npm run lint
    ```
    Analyzes project files for ESLint rules compliance.
*   **Preview Build:**
    ```bash
    npm run preview
    ```
    Serves the output of the production build locally.

---

## 5. Architectural Conventions & Guidelines

*   **State-Based Routing:**
    The application utilizes custom state-based page management in `App.tsx` instead of standard browser path-routing. Pages are selected using numerical indexes passed from the `Navbar`:
    *   `0` -> Gallery (`<Gallery />`)
    *   `1` -> About (`<AboutPage />`)
    *   `2` -> Devlog (`<DevLog />`)
    *   `3` -> Blog/Discussion (`<DiscussionPage />`) (In development)
    *   `4` -> Login (`<LoginPage />`)
    *   `5` -> Register (`<RegisterPage />`)
    *   `6` -> Chat (`<Chat />`)
*   **JS to TS Transition:**
    The project is currently transitioning from `.jsx` to `.tsx`. When creating new modules, prefer TypeScript with strict parameter types and clean interfaces. Avoid untyped callbacks or `any` where possible.
*   **Styling:**
    All layout, text formatting, and structural styling should leverage Tailwind CSS utility classes. Avoid adding new raw CSS definitions to `App.css` or `index.css` unless they are for core animations or layout resets.
*   **Cookies:**
    Persistent states such as the cookie disclosure banner ("showCookies") and user auth tokens ("userToken") must be parsed and stored safely using `react-cookie`.

---

## 6. Critical Known Issues & Code Debt (Important!)

Any future development should be aware of several compiling/functional errors currently present in the codebase:

1.  **`src/App.tsx` Syntax/Merge Errors:**
    *   The file currently has a duplicate/unresolved `Chat` component structure at the top that references undeclared identifiers (`List`, `handleInputChange`, `handleSendMessage`).
    *   The import for `useState` and `useRef` is commented out/broken at line 25 (`// ...import { useState,useRef } from 'react'`). Since hooks are used extensively, this comments out the core React import, causing widespread compilation failures.
2.  **Missing `DiscussionPage` Component:**
    *   In `App.tsx` (line 332), page index `3` attempts to render `<DiscussionPage />`, but this component is not defined or imported anywhere in the project.
3.  **Missing `@/lib/utils` for Class Merging (`cn`):**
    *   Almost all components inside `src/components/comments-social/` and `src/components/comments-threaded/` attempt to import the utility helper `cn` from `@/lib/utils`.
    *   There is no `lib/` directory or `utils.ts` in the project, and there is no alias mapping for `@/` in the TS Config (`tsconfig.json`), leading to compiler/bundler errors.
4.  **Gallery Code Duplication:**
    *   Both `imggallery.jsx` and `imggallery.tsx` exist. `imggallery.tsx` is missing core React imports and is currently in a broken/half-migrated state.
5.  **Mock / Local vs. Remote Endpoints:**
    *   Some endpoints look at `http://localhost:5000` (local node server) while production ones target `https://portfolio-backend-tur1.onrender.com`. Keep this separation clean via environment variables if possible in future refactors.
