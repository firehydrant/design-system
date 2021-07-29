# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [3.0.0](https://github.com/firehydrant/design-system/compare/v2.3.0...v3.0.0) (2021-07-29)


### ⚠ BREAKING CHANGES

* **tag:** any previous `variant` value is no longer valid. Tag
now expects `variant='[subtle | outline]'` and
`colorScheme='<foundation_color_family>'`.
* **radio, checkbox:** `defaultIsChecked` is deprecated; use `defaultChecked`

### 🛠 Fixed

* **radio, checkbox:** Deprecate defaultIsChecked ([#75](https://github.com/firehydrant/design-system/pull/75)) ([f64c308](https://github.com/firehydrant/design-system/commit/f64c3089811b31e7952c35e1b7c4214b883bed75))
* **tag:** Corrects margin for right-aligned icon ([#74](https://github.com/firehydrant/design-system/pull/74)) ([ec94f08](https://github.com/firehydrant/design-system/commit/ec94f086f480cd6f65ee593e78723e368f05edf2))


### 👊 Version Bumps

* **storybook:** bump Storybook to ^6.3.4 ([#72](https://github.com/firehydrant/design-system/pull/72)) ([82de99e](https://github.com/firehydrant/design-system/commit/82de99ed4edfc0b0fa3d2cf7113b7ecdb8bd4454))
* Bump babel-jest from 26.6.3 to 27.0.6 ([#69](https://github.com/firehydrant/design-system/pull/69)) ([cba8b4a](https://github.com/firehydrant/design-system/commit/cba8b4accd950fd0cc8167e2dcd67670aa43080b))


### ✨ New Features

* **alert:** build alert component ([#73](https://github.com/firehydrant/design-system/pull/73)) ([58988d4](https://github.com/firehydrant/design-system/commit/58988d4ee9edf04e4e7b1d0fc101dbbe180c83de))
* **Center:** adds Center (Square, Circle) ([#85](https://github.com/firehydrant/design-system/pull/85)) ([e58cc1f](https://github.com/firehydrant/design-system/commit/e58cc1f0dcb4dad072b6491a5feae080f54546a7))
* **StackDivider:** adds StackDivider ([#86](https://github.com/firehydrant/design-system/pull/86)) ([48c5191](https://github.com/firehydrant/design-system/commit/48c519190619892d6797cbf2475a77a53bad1378))
* **tag:** adds outline variant ([#83](https://github.com/firehydrant/design-system/pull/83)) ([4965fa9](https://github.com/firehydrant/design-system/commit/4965fa92ec0c05f56f41adee5a9858654ff68b69))
* **Wrap:** adds Wrap layout component. ([#84](https://github.com/firehydrant/design-system/pull/84)) ([856402a](https://github.com/firehydrant/design-system/commit/856402a499bfccaec3ce6724f9226baf6145d1a2))


### 🧹 Chores

* add section titles to changelog (config) ([73f6116](https://github.com/firehydrant/design-system/commit/73f61161d2362da7a21624cf2787fa11feb74ebc))

## [2.3.0](https://github.com/firehydrant/design-system/compare/v2.2.0...v2.3.0) (2021-07-09)


### 🧹 Chores

* Include .npmrc in project ([#49](https://github.com/firehydrant/design-system/pull/49)) ([fb1c636](https://github.com/firehydrant/design-system/commit/fb1c6360288925952bffd5a870d77af7f3e23781))
* update chromatic action ([da063b4](https://github.com/firehydrant/design-system/commit/da063b4795f39880a0fc285c4b9d92b5bba69e92))


### 👊 Version Bumps

* Bump @babel/core from 7.14.0 to 7.14.6 ([#56](https://github.com/firehydrant/design-system/pull/56)) ([ff5411b](https://github.com/firehydrant/design-system/commit/ff5411b8afbf1bc1d532d9c82ba50c30df041658))
* Bump @chakra-ui/react-env from 1.0.3 to 1.0.4 ([#38](https://github.com/firehydrant/design-system/pull/38)) ([f148f73](https://github.com/firehydrant/design-system/commit/f148f73c704e203ddd6f096959f0b32a398571f0))
* Bump @chakra-ui/react-env from 1.0.4 to 1.0.5 ([#59](https://github.com/firehydrant/design-system/pull/59)) ([b9532b5](https://github.com/firehydrant/design-system/commit/b9532b587d2df0784b5d207d96685a270ed43e26))
* Bump @emotion/react from 11.1.5 to 11.4.0 ([#55](https://github.com/firehydrant/design-system/pull/55)) ([069fcd8](https://github.com/firehydrant/design-system/commit/069fcd8b7b9e394f6e7d65a273833d660cd2979c))
* Bump @storybook/addon-actions from 6.3.1 to 6.3.2 ([#53](https://github.com/firehydrant/design-system/pull/53)) ([9fd6791](https://github.com/firehydrant/design-system/commit/9fd6791878c0b963c5bd68910b8549eaaef44352))
* Bump @storybook/addon-links from 6.2.9 to 6.3.0 ([#37](https://github.com/firehydrant/design-system/pull/37)) ([ac02982](https://github.com/firehydrant/design-system/commit/ac029822b65eb0aa84cf5357397aa4cb3b5da7d5))
* Bump @storybook/react from 6.3.1 to 6.3.2 ([#52](https://github.com/firehydrant/design-system/pull/52)) ([66c2e24](https://github.com/firehydrant/design-system/commit/66c2e24aad10784cc78b1b5bad07433acf2afd7d))
* Bump @testing-library/jest-dom from 5.12.0 to 5.14.1 ([#40](https://github.com/firehydrant/design-system/pull/40)) ([96877bd](https://github.com/firehydrant/design-system/commit/96877bde41bdc0494a95b9e94b40f0446060988b))
* Bump @testing-library/react from 11.2.6 to 12.0.0 ([#57](https://github.com/firehydrant/design-system/pull/57)) ([398b2c4](https://github.com/firehydrant/design-system/commit/398b2c4f630750ee9b6165a8d92f00f3e32760c1))
* Bump eslint-plugin-import from 2.22.1 to 2.23.4 ([#36](https://github.com/firehydrant/design-system/pull/36)) ([3799ef1](https://github.com/firehydrant/design-system/commit/3799ef1991a64f36c782108954a9a95da33a6815))
* Bump eslint-plugin-react from 7.23.2 to 7.24.0 ([#39](https://github.com/firehydrant/design-system/pull/39)) ([14b77ef](https://github.com/firehydrant/design-system/commit/14b77efb9c0ff9b6666a65da418d26ad63d5adcb))
* Bump eslint-plugin-testing-library from 3.10.2 to 4.9.0 ([#58](https://github.com/firehydrant/design-system/pull/58)) ([3f07ade](https://github.com/firehydrant/design-system/commit/3f07aded7c91855b55607aebe1a0054bf692c532))
* Bump jest from 26.6.3 to 27.0.6 ([#54](https://github.com/firehydrant/design-system/pull/54)) ([719fc5f](https://github.com/firehydrant/design-system/commit/719fc5f7c6287bc9b3ee03a55e7caf267ff50fc8))
* chore: Bump framer-motion from 4.1.11 to 4.1.17 ([#47](https://github.com/firehydrant/design-system/pull/47)) ([2c07084](https://github.com/firehydrant/design-system/commit/2c0708483b3510a67bb1bd271ba1c1497327967b))
* chore: Bump playroom from 0.23.0 to 0.25.0 ([#45](https://github.com/firehydrant/design-system/pull/45)) ([fcd9b06](https://github.com/firehydrant/design-system/commit/fcd9b0630ff0d8940f60c9edadb0baa4d70d0d4a))
* **storybook:** Upgrades Storybook package(s) to 6.3.1 ([#51](https://github.com/firehydrant/design-system/pull/51)) ([398180c](https://github.com/firehydrant/design-system/commit/398180c6ea60b8531ff00cacba7798b6d5fb06cb))

## [2.2.0](https://github.com/firehydrant/design-system/compare/v2.1.0...v2.2.0) (2021-06-23)


### Features

* Enable dependabot on GitHub ([01ebf1d](https://github.com/firehydrant/design-system/commit/01ebf1dd9309b81eadb3a661245bca703d2354d8))


### Bug Fixes

* Remove postinstall script ([bd3aa1b](https://github.com/firehydrant/design-system/commit/bd3aa1bc8d9a19b94a360a311c55d2c758287d62))
* **button:** Remove x-spacing from tertiary variant ([2f69004](https://github.com/firehydrant/design-system/commit/2f690049adecdc31edce6f92bc07b25c8824e66d)), closes [#19508](https://app.clubhouse.io/firehydrant/story/19508)

## [2.1.0](https://github.com/firehydrant/design-system/compare/v2.0.0...v2.1.0) (2021-06-16)


### Features

* **changelog:** Automatic changelog generation ([cd5be86](https://github.com/firehydrant/design-system/commit/cd5be862cc04d548541ea74e999bad9dbab69b76))

## 2.0.0 (2021-06-09)

### Changed

- [BREAKING] Space scale now starts with `space[0] = 0px`
  - prior to this change (`space[0] = 4px`) caused undesired layout changes in `Stack, VStack, HStack` Chakra components.
- Internally, components now use `__css` instead of `sx` for styling which has the same API but lower style priority, ensuring proper overrides via style props

### Fixed

- `isExternal` property on `Link` will now properly add a `rel` and `target` attribute to rendered `<a>`

## 1.0.5 (2021-06-01)

### Fixed

- Uses a span for the Text inside of the Link component

## 1.0.4 (2021-05-28)

### Fixed

- Removed React as a internal dependency

## 1.0.3 (2021-05-27)

### Fixed

- Table border in safari is now a border bottom

## 1.0.2 (2021-05-25)

### Added

- New Components Added
  - Table
  - Switch

## 1.0.0 (2021-05-17)

### Added

- New components added
  - Card
  - [Container](https://chakra-ui.com/docs/layout/container)
  - [Tabs](https://chakra-ui.com/docs/disclosure/tabs)
  - [Divider](https://chakra-ui.com/docs/data-display/divider)
  - [Tag](https://chakra-ui.com/docs/data-display/tag)
- [Responsive breakpoints](https://chakra-ui.com/docs/features/responsive-styles)
  - base: 0px
  - sm: 375px
  - md: 768px
  - lg: 1024px
  - xl: 1100px
  - 2xl: 1400px

## 0.1.0 (2021-05-07)

### Added

- New components added
  - [TextArea](https://chakra-ui.com/docs/form/textarea)
  - [Checkbox](https://chakra-ui.com/docs/form/checkbox)
  - [CheckboxGroup](https://chakra-ui.com/docs/form/checkbox)
  - [Radio](https://chakra-ui.com/docs/form/radio)
  - [RadioGroup](https://chakra-ui.com/docs/form/radio)
  - [Link](https://chakra-ui.com/docs/navigation/link)
  - [Stack](https://chakra-ui.com/docs/layout/stack)
  - [HStack](https://chakra-ui.com/docs/layout/stack)
  - [VStack](https://chakra-ui.com/docs/layout/stack)
  - [Flex](https://chakra-ui.com/docs/layout/flex)
  - [Box](https://chakra-ui.com/docs/layout/box)
- New icons added
  - Team
  - Account
  - Import
  - Refresh
  - Search
  - Minus

### Removed

- Icon - Broken Link

### BREAKING CHANGES

- Renamed Icon _Mail_ to _Email_

## 0.0.9 (2021-05-03)

### Added

- New components added
  - [FormControl](https://chakra-ui.com/docs/form/form-control)
  - [FormLabel](https://chakra-ui.com/docs/form/form-control)
  - [FormErrorMessage](https://chakra-ui.com/docs/form/form-control)
  - [FormHelperText](https://chakra-ui.com/docs/form/form-control)
  - [TextField](https://chakra-ui.com/docs/form/input)

## 0.0.8 (2021-04-13)

### Added

- New components added
  - [Button](https://chakra-ui.com/docs/form/button)
  - [IconButton](https://chakra-ui.com/docs/form/icon-button)
  - [Icon](https://chakra-ui.com/docs/media-and-icons/icon)
