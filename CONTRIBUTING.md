# Contributing to The_coding_clubhouse

Thanks for your interest in contributing! We welcome all kinds of contributions: bug fixes, new features, documentation, and design improvements.

## Table of Contents
- [Branch Naming and Workflow](#1-branch-naming-and-workflow)
- [Code Style and Structure](#2-code-style-and-structure)
- [Pull Request Process](#3-pull-request-process)
- [Code Review Guidelines](#4-code-review-guidelines)
- [Commit Message Format](#5-commit-message-format)

---

## 1. Branch Naming and Workflow

### Branch Naming Conventions
- `feature/` - New features or enhancements
- `bugfix/` - Bug fixes
- `hotfix/` - Critical production fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `test/` - Adding or updating tests

### Branch Management
1. **Create a new branch** for your work:
   ```bash
   git checkout -b type/descriptive-name
   # Example:
   git checkout -b feature/user-authentication
   ```

2. **Keep your branch updated**:
   ```bash
   git fetch origin
   git rebase origin/main
   # Resolve any conflicts if they occur
   ```

3. **Push your changes**:
   ```bash
   git push -u origin your-branch-name
   ```

### Avoiding Merge Conflicts
- Make small, focused commits
- Rebase frequently to stay up-to-date with main
- Resolve conflicts as they arise
- Test your changes before pushing

---

## Avoiding Merge Conflicts

To minimize merge conflicts:

1. **Always work on a new branch** for each feature or bugfix
2. **Keep your branch up to date** with the main branch:
   ```bash
   git fetch origin
   git rebase origin/main  # or git merge origin/main
   ```
3. **Make small, focused commits** that address a single concern
4. **Pull before you push** to ensure you have the latest changes
5. **Resolve conflicts immediately** when they occur

## 2. Code Style and Structure

Follow these coding guidelines to maintain consistency across the project:

- **HTML**: Use semantic HTML5 elements, indent with 2 spaces
- **CSS/Tailwind**: 
  - Use Tailwind utility classes primarily
  - Keep custom CSS to a minimum
  - Follow the design system in the project
- **JavaScript**: 
  - Use ES6+ features
  - Keep functions small and focused (max 30 lines)
  - Add JSDoc comments for public functions
  - Use async/await instead of promises when possible

### File and Folder Structure

- Use kebab-case for all file and folder names
- Keep related files together in feature-based directories
- Components should be self-contained with their own styles and tests

### Component Documentation

Each component should include:

```javascript
/**
 * Component Name
 * 
 * @description Brief description of the component's purpose
 * @prop {type} propName - Description of prop
 * @example
 * <ComponentName propName="value" />
 */
```

### Commit Message Convention

Use this format:

```scss
type(scope): short description
```

#### Examples

- `feat(navbar): add responsive menu`
- `fix(form): correct email validation`


### Stage and Commit

``` bash
git add .
git commit -m "feat: add mobile navigation toggle"
```

---

## 3. Pull Request Process

### Creating a Pull Request
1. Push your branch and create a PR to `main`
2. Include a clear description of changes
3. Reference any related issues
4. Assign appropriate reviewers

### PR Review Process
- Address all review comments
- Keep the PR focused on a single concern
- Ensure all tests pass
- Update documentation if needed

## 4. Code Review Guidelines

### As a Reviewer
- Be constructive and specific
- Focus on code quality and maintainability
- Check for potential bugs or edge cases
- Verify tests cover the changes

### As an Author
- Be responsive to feedback
- Explain your reasoning when needed
- Keep the discussion professional
- Update documentation to reflect changes

## 5. Commit Message Format

Follow this format for commit messages:

```
type(scope): short description

Longer description if needed

Fixes #issue-number
```

### Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style/formatting
- `refactor`: Code changes that don't fix bugs or add features
- `test`: Adding tests
- `chore`: Maintenance tasks

### Examples:
```
feat(auth): add password reset flow
fix(api): handle null response in user endpoint
docs(readme): update installation instructions
```