<h1 align="center">🌈 FireHydrant Design System 🦄</h1>

<div align="center">
    <a href="https://github.com/firehydrant/design-system/releases">
        <img alt="Latest release" src="https://img.shields.io/github/v/release/firehydrant/design-system" />
    </a>
    <a href="https://firehydrant.github.io/design-system/">
        <img alt="Playroom" src="https://img.shields.io/badge/playroom-live-000" />
    </a>
    <a href="https://main--607731addb01d30021caeac2.chromatic.com">
        <img alt="Storybook" src="https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg" />
    </a>
</div>

<br/>

Design System is a **FireHydrant flavored** React component library, built using [Chakra UI](https://chakra-ui.com/) &amp; a [custom theme layer](./lib/theme/index.js).

## need more information? ℹ️

- Slack us at [#team-design-system](https://firehydrant.slack.com/archives/C01GRKLDRB9)
- Team Hub in [Notion](https://www.notion.so/firehydrant/Design-System-c4e554d509414719908eedb9dcc0c417)
- Project board in [Clubhouse](https://app.clubhouse.io/firehydrant/project/18818/design-system)

## installation 💾

The package is registered on GitHub's package registry, added via `.npmrc`

Access to this registry requires authentication with GitHub tokens. These tokens are private and should not be committed to any project, accessed instead via environment variable.

**GitHub token environment variable**

1. Go to https://github.com/settings/tokens and create a token with at least `read:package` access

2. Set the token

   ```bash
   # paste this into either ~/.zshrc OR ~/.bashrc

   export GITHUB_TOKEN=<your token>
   ```

3. Open a new terminal window (or `source` the edited `.*rc` file)

**GitHub package registry**

```bash
# add .npmrc file to your project

cd path/to/your/project && touch .npmrc


# (do not edit) paste the following into your .npmrc

//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
@firehydrant:registry=https://npm.pkg.github.com
```

**Add to your project**

```bash
yarn add @firehydrant/design-system

# or

npm i @firehydrant/design-system --save
```

---

## usage 🏎

Our components require a `ThemeProvider` to wrap your application. By default the FireHydrant theme is included with our provider.

```jsx
// import themeprovider from our package
import { ThemeProvider } from '@firehydrant/design-system';

// wrap your application
<ThemeProvider>
  <App />
</ThemeProvider>;
```

For a list of all components & properties, refer to [Storybook](https://main--607731addb01d30021caeac2.chromatic.com)

[![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg)](https://main--607731addb01d30021caeac2.chromatic.com/)

---

## contributing 🔨

We welcome all additions and modifications, check out our [Contribution Guidelines](./CONTRIBUTING.md) to get started.

## changelog 👛

Interested in what changed lately? Check out the [CHANGELOG](./CHANGELOG.md)

## acknowledgements 📡

Thank you to the following projects, upon which this Design System is built:

- [Chromatic](https://www.chromatic.com/) - Storybook hosting; component feedback & regression testing
- [`chakra-ui`](https://github.com/chakra-ui/chakra-ui) - React component library
- [`storybook`](https://github.com/storybookjs/storybook) - Component visualization & documentation tool
- [`seek-oss/playroom`](https://github.com/seek-oss/playroom) - Component live sandbox
