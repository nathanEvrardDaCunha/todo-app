
This file will reorganized and visually updated in the near future to enhance comprehension to detailed explanations.
For now, it serve as raw guideline to iterate quickly with consistence.

---

Project structure shoud follow those guideline:
- Maximum 3 level of folders nesting.
- Group files based on feature first.
- Each feature has it's own respective folder.
- Folder should be five words length maximum.
- Less than 7 files in my root folder.
- Consider 10+ file in a specific folder as a warning for potential bloated folder.
- Mainstream folder:
    - components: components reused through multiple part and not specific to any pages.
    - datas: store global constance and config values.
    - (optional) libs: external api usage.
    - (optional) layout: overall content structure.
    - assets: important but not code (fonts, images...)
    - features: specific features interactible by end users.
    - utils: helper and utils code component.
    - docs: project documentations, conventions and guideline
    - src: contain codebase

```md
root
- docs
- assets
- src
-- datas
--- api-config.js
-- utils
-- features
--- login
---- login.js
---- login.test.js
---- login.css
```