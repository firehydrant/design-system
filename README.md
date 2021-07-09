🌈 FireHydrant Design System 🦄  
![Latest release](https://img.shields.io/github/v/release/firehydrant/design-system)
![Chromatic workflow](https://github.com/firehydrant/design-system/actions/workflows/chromatic.yml/badge.svg)
![Playroom workflow](https://github.com/firehydrant/design-system/actions/workflows/playroom.yml/badge.svg)<!-- omit in toc -->
===============================

> **FireHydrant flavored** React component library, built using [Chakra UI](https://chakra-ui.com/) ↗️ &amp; a [custom theme layer](./lib/theme/index.js).

[![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg)][storybook]
[![Playroom](https://img.shields.io/badge/playroom-live-614ab6)][playroom]

- [installation](#installation)
    - [GitHub token as environment variable](#github-token-as-environment-variable)
    - [Add to project](#add-to-project)
- [usage](#usage)
- [contributors](#contributors)
- [changelog](#changelog)
- [acknowledgements](#acknowledgements)

---

**need info?** Slack us at [#team-design-system][slack] ↗️ ⎮ [Notion][notion] ↗️ team page ⎮ [Clubhouse][clubhouse] ↗️ board

---

# installation

The package is registered on GitHub's package registry, added via `.npmrc`

Access to this registry requires authentication with GitHub tokens. These tokens are private and should not be committed to any project, accessed instead via environment variable.

### GitHub token as environment variable

1. Go to https://github.com/settings/tokens and create a token with at least `read:package` access

2. Set the token (paste into either `~/.zshrc` OR `~/.bashrc`)

   ```sh
   export GITHUB_TOKEN=<your token>
   ```

3. Open a new terminal window (or `source` the edited `.*rc` file)

### Add to project

```sh
yarn add @firehydrant/design-system
```

_or_

```sh
npm i @firehydrant/design-system --save
```

---

# usage

Our components require a `ThemeProvider` to wrap your application. By default the FireHydrant theme is included with our provider.

```jsx
// import themeprovider from our package
import { ThemeProvider } from '@firehydrant/design-system';

// wrap your application
<ThemeProvider>
  <App />
</ThemeProvider>;
```

For a list of all components & properties, refer to [Storybook][storybook] ↗️

[![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg)][storybook]

---

# contributors

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

![4 Contributors](https://img.shields.io/badge/all_contributors-4-614ab6.svg)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

We welcome all additions and modifications, check out the [Contribution Guidelines](./CONTRIBUTING.md) to get started.

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://caseymhunt.com"><img src="https://avatars.githubusercontent.com/u/2065615?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Casey Hunt</b></sub></a><br /><a href="#maintenance-caseymhunt" title="Maintenance">🚧</a></td>
    <td align="center"><a href="http://jax.works"><img src="https://avatars.githubusercontent.com/u/6673768?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jax Engel</b></sub></a><br /><a href="#design-jaxatto" title="Design">🎨</a></td>
    <td align="center"><a href="https://nearbycoder.com/"><img src="https://avatars.githubusercontent.com/u/10525357?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Josh Hamilton</b></sub></a><br /><a href="https://github.com/firehydrant/design-system/commits?author=nearbycoder" title="Code">💻</a></td>
    <td align="center"><a href="http://firehydrant.com"><img src="https://avatars.githubusercontent.com/u/521627?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Robert Ross</b></sub></a><br /><a href="https://github.com/firehydrant/design-system/commits?author=bobbytables" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

# changelog

Interested in what changed lately? Check out the [CHANGELOG](./CHANGELOG.md)

---

# acknowledgements

Thank you to the following projects, upon which this Design System is built:

- [Chromatic](https://www.chromatic.com/) ↗️ - Storybook hosting; component feedback & regression testing
- [`chakra-ui`](https://github.com/chakra-ui/chakra-ui) ↗️ - React component library
- [`storybook`](https://github.com/storybookjs/storybook) ↗️ - Component visualization & documentation tool
- [`seek-oss/playroom`](https://github.com/seek-oss/playroom) ↗️ - Component live sandbox
- [`conventional-changelog/standard-version`](https://github.com/conventional-changelog/standard-version) ↗️ - A utility for versioning using semver and CHANGELOG generation powered by Conventional Commits.

[storybook]: https://main--607731addb01d30021caeac2.chromatic.com/
[playroom]: https://firehydrant.github.io/design-system/
[release]: https://github.com/firehydrant/design-system/releases
[slack]: https://firehydrant.slack.com/archives/C01GRKLDRB9
[notion]: https://www.notion.so/firehydrant/Design-System-c4e554d509414719908eedb9dcc0c417
[clubhouse]: https://app.clubhouse.io/firehydrant/project/18818/design-system
