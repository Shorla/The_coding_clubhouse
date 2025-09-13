# Contributing to The_coding_clubhouse

Thanks for your interest in contributing! 🎉
We welcome all kinds of contributions: bug fixes, new features, documentation, and design improvements.
Please take a moment to read these guidelines before you get started.
You can help out the project by just * starring this repository from the upper right corner and also pinning it to your profile.

---

## 1. Getting Started

### 🛠️ Prerequisites

- A web browser (Chrome, Firefox, Edge, or Safari)
- A code editor like [VS Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/) for version control

---

### 📂 Repository Link

[Project Repository](https://github.com/Shorla/The_coding_clubhouse)

---

## 2. Cloning the Repository

### 🔀 Fork (if needed)

1. Click the **Fork** button in the top-right corner of the repository page on GitHub.  
2. This creates a copy of the repository under your account.  

### 📥 Clone Locally

Clone the repository to your local machine:

```bash
git clone https://github.com/Shorla/The_coding_clubhouse
cd The_coding_clubhouse 
```

---

## 3. Setting Up the Project

1. Navigate into the project directory:

``` bash
cd The_coding_clubhouse
```

2. No dependencies required-simply open index.html in your browser.

---

## 4. Branching Workflow

### 🌿 Branch Naming Convention

#### Use prefixes based on the type of work:

- `feature/short-description`
- `bugfix/short-description`
- `hotfix/short-description` 

## ➕ Create a New Branch

``` bash
git checkout -b feature/short-description
```

---

## 5. Making Changes

### 🎨 Coding Style Guidelines

- #### HTML: `semantic, indented with 2 spaces`.

- #### CSS/Tailwind: `Keep classes organized, avoid repetition.`

- #### JavaScript: `use ES6+ features, keep functions small and modular, add comments for clarity.`

### 📝 Commit Message Convention

Use this format:

```scss
type(scope): short description
```

#### Examples

- `feat(navbar): add responsive menu`
- `fix(form): correct email validation`


### ➕ Stage and Commit

``` bash
git add .
git commit -m "feat: add mobile navigation toggle"
```

---

## 6. Pushing Changes

Push your branch to the remote repository:

``` bash
git push origin feature/ short-description
```

---

## 7. Creating a Pull Request (PR)

1. Go to your fork on GitHub.
2. Click  `New Pull Request.`
3. Select your branch and open a PR to the `main` branch.

### 🖊️ Writing a Good PR Description

- What you changed
- Why you changed it
- How to test it

### 👥 Assign Reviewers

Assign at least one reviewer if available.

## 8. Code Review Process

- Be open to feedback and willing to make changes.
- Ask for clarification if comments are unclear.
- Mark conversations as resolved once addressed.

## 9. Merging PRs

- PRs are merged only after at least 1 approval.
- All conflicts must be resolved before merging.
- Typically, a maintainer merges the PR.

## 10. Updating Your Local Branch

### 🔄 Sync with Main

``` bash
git checkout main
git pull origin main
```

### 🔀 Merge Updates into Your Branch

``` bash
git checkout feature/short-description
git merge main
```

### ⚠️ Handling Merge Conflicts

- Open conflicting files in your editor.
- Fix the conflicts manually.
- Stage and commit the resolved files.

## 11. Good Practices 

- Keep commits small and meaningful.
- `Test your changes` locally before pushing
- Reuse existing components or partials where possible
- Write `clear, descriptive commit messages.`