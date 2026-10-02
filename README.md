# Internship Task 1 — Hello World

## Project Purpose

This is a simple "Hello World" project created as the first milestone of my Web Development internship. Its main purpose is to verify that the development environment, web files, and browser testing workflow are working correctly.

## Objective

> "Your first milestone will be creating a simple 'Hello World' project to verify everything is working correctly."

The webpage clearly displays **Hello World!** as its central content.

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (no frameworks or libraries)
- Visual Studio Code (editor)
- Git and GitHub (version control)
- Web browser for testing

No React, Vite, Tailwind, databases, APIs, authentication, or other dependencies are used. This is intentional to keep the task beginner-friendly.

## Project Structure

```text
internship-task-1/
├── index.html
├── style.css
├── script.js
├── README.md
└── .gitignore
```

- `index.html` — Page structure. Contains the "Hello World!" heading, a short milestone description, and links to `style.css` and `script.js`.
- `style.css` — Simple, clean styling. Responsive layout, readable typography, and spacing. No CSS framework.
- `script.js` — Small verification script. Prints a confirmation message to the browser console and updates on-page status text.
- `README.md` — Project documentation (this file).
- `.gitignore` — Excludes unnecessary files from version control.

## How to Run

No build step or installation is required.

1. Open the `internship-task-1` folder.
2. Double-click `index.html` to open it in your web browser.

   OR

   Right-click `index.html` → **Open with** → your browser (Chrome / Edge / Firefox recommended).

3. You should see **Hello World!** in the center of the page.

4. To verify JavaScript:
   - Press `F12` or `Ctrl + Shift + J` to open Developer Tools.
   - Open the **Console** tab.
   - You should see: `Hello World! JavaScript loaded successfully - Internship Task 1.`

## Git Commands / Workflow

Run these commands manually from inside the `internship-task-1` folder. Replace the GitHub URL with your real repository URL.

```bash
git init
git status
git add .
git commit -m "Initial commit - internship task 1"
git branch -M main
```

To connect to GitHub (after creating the repository on github.com):

```bash
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

Typical workflow after changes:

```bash
git status
git add .
git commit -m "Describe your change"
git push
```

## What I Learned

- Basic HTML5 page structure with semantic tags.
- Linking external CSS and JavaScript files.
- Simple responsive styling with clean typography and spacing.
- Using `console.log()` to verify JavaScript is loading.
- Basic file organization and naming conventions.
- Basic Git workflow: init, status, add, commit, branch, remote, and push.

## Testing and Verification

Manually verify the following:

- [ ] `index.html` opens without errors.
- [ ] `Hello World!` heading is visible.
- [ ] CSS styling loads (white card on light gray background, centered layout).
- [ ] Open browser console and confirm the JavaScript verification message appears.
- [ ] On-page text shows `JavaScript loaded successfully.`
- [ ] All files exist: `index.html`, `style.css`, `script.js`, `README.md`, `.gitignore`.
- [ ] README instructions match the actual project.

> Note: Browser testing must be done manually by you. No automated testing is included.

## Future Improvements

- None required for this milestone. This project is intentionally kept simple.
- Possible next internship tasks may include multi-page layouts, forms, or responsive components.
