# Changelog

# [1.4.6] - 2024-12-28

- fixed `light-reset.scss` dist/build styles
- updated documentation
- added short links for total and light SCSS resets

# [1.4.5] - 2024-12-27

- recovered index.scss
- updated `light-reset.scss`

# [1.4.4]

- added reduced-motion rule
- added support for `[disabled="true"]` and `[aria-disabled="true"]` attributes
- expanded the structure of the SCSS library. Now the library can be imported using `scss @use 'scss-reset'` instead of `scss @use 'scss-reset/reset'`
- added a lightweight reset `light-reset` optimized for modern browsers with seamless and "gentle" integration into popular CSS frameworks.
- added additional styles for iframe, object, embed and svg
- added default black video background
- added bootstrap test pages


# [1.4.3]

- minor infrastructure changes

# [1.4.2]

- automated clean fix
- updated documentation

# [1.4.1]

- doc misspelling fixes and updates
- replaced @import to @use

# [1.4.0]

- added mixins `offx` - for classes and `offxAll` - for global prevent overflow issues
- updated documentation
- added additional test cases

# [1.3.9]

- updated documentation

# [1.3.8]

- _total-reset.scss updates for inputs
- added additional test cases
- updated documentation

# [1.3.4]

- _total-reset.scss updates for svg. Added @namespace

# [1.3.3]

- _total-reset.scss updates for svg and table

# [1.3.2]

- _total-reset.scss updates for table and block elements

# [1.3.1]

- readme updates

# [1.3.0]

- added "total" reset `_total-reset.scss` for Web Components
- freshed up dev infrastructure
- added Data URI snippets

# [1.2.3]

- scss: added `min-height: -webkit-fill-available` (ref: https://allthingssmitty.com/2020/05/11/css-fix-for-100vh-in-mobile-webkit/)


## [1.2.2] - 2021-09-12

- css reset: Removed css duplicates
- css reset: Minor fixes
- sys: Removed yarn.lock
- sys: Compressed CSS
- doc: added CDN link

## [1.2.1] - 2021-06-05

- Added Shopify Dawn Reset CSS
- Updated test pages

## [1.2.0] - 2021-06-05

- Relocated test and development files into staging repository to avoid npm package versions collision (#11)

## [1.1.11] - 2020-12-17

- Updated `<legend>` reset
- Updated `<fieldset>` reset
- Added `<progress>` reset mixin and polyfills
- Added copy of _reset.css from src folder to the upper level
- Added test html for _reset.scss only without typography normalization


## [1.1.10] - 2020-09-24

- Added this CHANGELOG file
- Removed default outline for focused button

