🔥 Fire Hydrant Design System
=============================
Deploying to Chromatic
--------------------------------
Hosting for Storybook is provided by [Chromatic](https://www.chromatic.com/apps). 

By default, **automatic deployment** is enabled using [a Github workflow](.github/workflows/chromatic.yml) occuring on **push** for **every branch**. 

### Automatic Deployment (CI)
1. Push to remote branch
2. Profit 

NOTE: It is recommended to familiarize yourself with the [UI Review process for Chromatic](https://www.chromatic.com/docs/review) in order to take full advantage of the regression and review features. 

> UI Review creates a changeset of the exact visual changes introduced by a PR. You assign reviewers who can comment and request tweaks on changes that aren’t quite right. Think of it like a code review, but for your UI.
### Manual Deployment (CLI)
```bash
npx chromatic --project-token=<CHROMATIC_PROJECT_TOKEN> --exit-zero-on-changes
```