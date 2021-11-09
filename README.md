<h1 align="center">
  <img src="https://static.firehydrant.io/marketing/FH_logomark_orangeRGB.png" width="124px"/><br/>
 🌈 FireHydrant Design System 🦄
</h1>

<p align="center">
    <em>FireHydrant flavored React component library, built using
      <a href="https://chakra-ui.com/">Chakra UI</a>, and a 
      <a href="https://github.com/firehydrant/design-system/blob/main/lib/theme/index.js">custom theme layer.</a>
  </em>
</p>

<p align="center">
    <a href="https://main--607731addb01d30021caeac2.chromatic.com/">
        <img src="https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg" alt="Storybook">
    </a>
    <a href="https://firehydrant.github.io/design-system/">
        <img src="https://img.shields.io/badge/playroom-live-blueviolet" alt="playroom">
    </a>
</p>

<p align="center">
    <a href="https://github.com/firehydrant/design-system/releases">
        <img src="https://img.shields.io/github/v/release/firehydrant/design-system" alt="latest release">
    </a>
    <a href="https://chromatic.com/library?appId=607731addb01d30021caeac2&branch=main">
        <img src="https://github.com/firehydrant/design-system/actions/workflows/chromatic.yml/badge.svg" alt="chromatic">
    </a>
    <a href="https://firehydrant.github.io/design-system/">
        <img src="https://github.com/firehydrant/design-system/actions/workflows/playroom.yml/badge.svg" alt="playroom">
    </a>
</p>

- [installation](#installation)
  - [GitHub token as environment variable](#github-token-as-environment-variable)
  - [Add to project](#add-to-project)
- [usage](#usage)
- [contributors](#contributors)
- [changelog](#changelog)
- [acknowledgements](#acknowledgements)

---

# installation

The package is registered on GitHub's package registry, added via `.npmrc`

Access to this registry requires authentication with GitHub tokens. These tokens are private and should not be committed to any project, accessed instead via environment variable.

## GitHub token as environment variable

1. Go to https://github.com/settings/tokens and create a token with at least `read:package` access

2. Set the token (paste into either `~/.zshrc` OR `~/.bashrc`)

   ```sh
   export GITHUB_TOKEN=<your token>
   ```

3. Open a new terminal window (or `source` the edited `.*rc` file)

## Add to project

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
![7 Contributors](https://img.shields.io/badge/all_contributors-7-614ab6.svg)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

> 💡 Want to contribute? Check out the [Contributing Guidelines](./CONTRIBUTING.md)

Contributions of any kind are welcome!

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://caseymhunt.com"><img src="https://avatars.githubusercontent.com/u/2065615?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Casey Hunt</b></sub></a><br /><a href="#maintenance-caseymhunt" title="Maintenance">🚧</a></td>
    <td align="center"><a href="http://jax.works"><img src="https://avatars.githubusercontent.com/u/6673768?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jax Engel</b></sub></a><br /><a href="#design-jaxatto" title="Design">🎨</a></td>
    <td align="center"><a href="https://nearbycoder.com/"><img src="https://avatars.githubusercontent.com/u/10525357?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Josh Hamilton</b></sub></a><br /><a href="https://github.com/firehydrant/design-system/commits?author=nearbycoder" title="Code">💻</a></td>
    <td align="center"><a href="http://firehydrant.com"><img src="https://avatars.githubusercontent.com/u/521627?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Robert Ross</b></sub></a><br /><a href="https://github.com/firehydrant/design-system/commits?author=bobbytables" title="Documentation">📖</a> <a href="https://github.com/firehydrant/design-system/commits?author=bobbytables" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/hilaryBeck"><img src="https://avatars.githubusercontent.com/u/42321596?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Hilary Beck</b></sub></a><br /><a href="https://github.com/firehydrant/design-system/commits?author=hilaryBeck" title="Code">💻</a></td>
    <td align="center"><a href="https://www.brianhan.co/"><img src="https://avatars.githubusercontent.com/u/4185382?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Brian Han</b></sub></a><br /><a href="https://github.com/firehydrant/design-system/commits?author=hellobrian" title="Code">💻</a></td>
    <td align="center"><a href="https://www.tristanfree.com"><img src="https://avatars.githubusercontent.com/u/3101170?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tristan Free</b></sub></a><br /><a href="#design-helloTDF" title="Design">🎨</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification.

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
