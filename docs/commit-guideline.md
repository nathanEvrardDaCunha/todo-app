
This file will reorganized and visually updated in the near future to enhance comprehension to detailed explanations.
For now, it serve as raw guideline to iterate quickly with consistence.

---

Commit should include the following
- commit type
- commit description
- commit scope
- commit body

Commit footer are not required.

### Commit type guideline
Commit type should follow those guidelines:

- be relevant
- be meaningfull
- be consistent
- be mainstream:
    - feat : ew functionality or features intended for end users.
    - fix : corrections to bugs or runtime issues that directly impact user experience.
    - docs : all documentation-related modifications.
    - style : changes to code formatting and styling that do not affect runtime behaviors.
    - test : Relates to all changes of test cases and testing infrastructure.
    - refactor : code modifications that improve attributes while preserving existing functionality.
    - chore : development processes without directly affecting application features or business logic.

### Commit description guideline
Commit description should follow those guidelines:

- be present tense
- be relevant
- be meaningfull
- be consistent

### Commit scope guideline
Commit scope should follow those guidelines:

- be relevant
- be meaningfull
- be consistent
- be mainstream:
    - auth: changes related to any authentication and authorization systems.
    - api: changes related to any API, request, response system.
    - ui: changes related to any user interface and client-side interactions.
    - core: changes related to any business, services and critical logic.
    - db: changes related to any database and data storing solution.
    - config: changes related to any configuration and systems parameters.
    - utils: changes related to any utility and helpers components.
    - docs: change related to any documentations and project conventions.

### Commit body guideline
- be relevant
- be meaningfull
- be consistent

### Final example

```md
chore(config): setup vite vanilla template to speed up project initialization.

This commit speed up the project initialization through the use of create vite@latest vanilla template.

Key Changes:
- Create package.json file.
- Create package-lock.json file.
- Create index.html file.
- Create .gitignore file.
- Create src folder.
- Create public folder.
- Create node_modules folder.
```