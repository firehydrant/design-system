# Changelog

All notable changes to this project will be documented in this file.

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
