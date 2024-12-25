# SCSS Reset

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/npm/v/scss-reset?color=%23cb0000)](https://www.npmjs.com/package/scss-reset)
[![npm](https://img.shields.io/npm/dw/scss-reset)](https://www.npmjs.com/package/scss-reset)

_Reset compilation = modern reset + Meyer's reset + normalizer_

Demo: https://frontend-layers.github.io/scss-reset/test/index.html

## Features

- Based on [Meyer's CSS Reset](https://meyerweb.com/eric/tools/css/reset/)
- Modernized [modern-css-reset](https://github.com/hankchizljaw/modern-css-reset)
- Useful parts from [normalize.css](https://necolas.github.io/normalize.css/)
- Optional typography and mobile friendly definitions by SCSS variables (REM, BEM(int))
- Expandable by prebuilded mixins and ports (Accessability, HTML and Web Components, etc.)

## Why

To instantly fix some persistent CSS issues and add missing parts for popular CSS resets.
It is also compatible with other HTML/CSS frameworks like Twitter Bootstrap, Tailwind CSS, etc.
You can extend reset styles by a mixin collection and easily improve it.

## Install

[![NPM](https://nodei.co/npm/scss-reset.png?compact=true)](https://nodei.co/npm/scss-reset/)

```shell
npm i scss-reset --save-dev
```

### by yarn

```shell
yarn add scss-reset --dev
```

### by pnpm

```shell
pnpm i scss-reset --dev
```

## Usage

Please include at the top of the `main.scss`:

```scss
@use 'scss-reset';
```

or:

```scss
@import 'scss-reset';
```


### Troubleshooting Usage

```scss
@use 'scss-reset/reset';
```

or depending on your workspace configuration, this will work too:

```scss
@use '../node_modules/scss-reset/src/scss/_reset.scss';
```

or:

```scss
@use '../node_modules/scss-reset/_reset.scss';
```

or by the (mostly) deprecated way:

or

```scss
@import 'scss-reset/reset';
```

## CDN

Optimized and compressed CSS version for _reset.scss

```html
<link rel="stylesheet" href="https://unpkg.com/scss-reset/reset.css">
```

Transferred size: 3.62 kB

## Typography Usage

- _variables.scss
- _typography.scss

⚠️ _variables.scss and _typography.scss are optional.

You can copy them from to development folder for additional custom modifications

```
'node_modules/scss-reset/src/scss/_variables.scss';
'node_modules/scss-reset/src/scss/_typography.scss';
```

### Usage with Shopify Dawn theme

- Please copy the `reset-shopify-down.css` file from the `/res` npm folder to the `/assets` theme folder.
- Please include the `reset-shopify-down.css` file in `layout/theme.liquid/` after `base.css`.

```liquid
{{ 'reset-shopify-down.css' | asset_url | stylesheet_tag }}
```

## Total Reset for Web Components

Please, use _total-reset.scss for Web Components or for modern JavaScript Apps
where need to ❗deep reset all properties of the ❗Shadow DOM elements without reset Document styles.

### Import Total Reset SCSS file

```scss
@use 'scss-reset/total-reset';
```

## Light Reset

```scss
@use 'scss-reset/light-reset';
```

## Mixins

Please include into necessary module:

```scss
@use 'scss-reset/reset-mixins' as *;
```

### Available Mixins

| Mixins             | Include                      | Description                                       |
|--------------------|------------------------------|---------------------------------------------------|
| disableAnimation   | @include disableAnimation;   | Disable CSS animation                             |
| acDisableAnimation | @include acDisableAnimation; | Disable CSS animation depends of OS configuration |
| acModeBW           | @include acModeBW;           | Grayscale Mode                                    |
| acModeContrast     | @include acModeContrast;     | Contrast Mode with Inverted colors                |
| meterReset         | @include meterReset;         | Styles reset for ```<meter>```                    |
| progressReset      | @include progressReset;      | Styles reset for ```<progress>```                 |
| inputColorReset    | @include inputColorReset;    | Rest for input type:color                         |
| offx               | @include offx;               | Prevent horizontal overflow issues for elements   |
| offxAll            | @include offxAll;            | offx for whole document                           |


### @mixin offxAll

This mixin adds the following snippet:

```css
html, body {
  overflow-x: hidden
}
```

Please be careful. You'll get scroll fix for whole page, but:

- However, this can cause accessibility issues because it permanently hides overflow content
- CSS property `position: sticky;` doesn't work because an ancestor element (`html, body`) has overflow property set.

Please use `@include offx;` for selected block elements instead of to avoid CSS 'sticky' and UX issues.
For example:

```scss
.page-content {
  @include offx;
}
```

## Technical Files

- Compressed CSS version: /build/reset.css
- Test Pages List: /test/index.html

## Contributing

For issues, bugs or improvements please open an [issue](https://github.com/frontend-layers/scss-reset/issues/new)

---
[MIT License](LICENSE)
