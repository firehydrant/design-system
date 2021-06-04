# 🌈 FireHydrant Design System

[![GitHub release (latest by date)](https://img.shields.io/github/v/release/firehydrant/design-system)](https://github.com/firehydrant/design-system/releases)
[![Latest Storybook version](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg)]()

Need more info? Slack us at #team-design-system | Team Hub in Notion | Project board in Clubhouse

---

> **FireHydrant flavored** React component library, built using [Chakra UI](https://chakra-ui.com/) &amp; a [custom theme layer](./lib/theme/index.js).

- Playroom
- Storybook
- Chromatic

more project information available in [Notion (Design System)](https://www.notion.so/firehydrant/Design-System-c4e554d509414719908eedb9dcc0c417)

---

## acknowledgements

🙇 Thank you to the following projects, upon which this Design System is built:

- [Chromatic](https://www.chromatic.com/) - Storybook hosting; component feedback & regression testing
- [`chakra-ui`](https://github.com/chakra-ui/chakra-ui) - React component library
- [`storybook`](https://github.com/storybookjs/storybook) - Component visualization & documentation tool
- [`seek-oss/playroom`](https://github.com/seek-oss/playroom) - Component sandbox

---

# Contributing

## Deploying to Chromatic

Hosting for Storybook is provided by [Chromatic](https://www.chromatic.com/apps).

By default, **automatic deployment** is enabled using [a GitHub workflow](.GitHub/workflows/chromatic.yml) occuring on **push** for **every branch**.

### Getting Started

Make sure that you are using NPM version 7.0 or higher

1. `npm install`
2. `npm run storybook`

### Automatic Deployment (CI)

1. Push to remote branch
2. Profit

NOTE: It is recommended to familiarize yourself with the [UI Review process for Chromatic](https://www.chromatic.com/docs/review) in order to take full advantage of the regression and review features.

> UI Review creates a changeset of the exact visual changes introduced by a PR. You assign reviewers who can comment and request tweaks on changes that aren’t quite right. Think of it like a code review, but for your UI.

### Manual Deployment (CLI)

```bash
npx chromatic --project-token=<CHROMATIC_PROJECT_TOKEN> --exit-zero-on-changes
```

### Manual Publish

Make sure to bump the version.

```
npm run build
npm publish --tag latest
```
