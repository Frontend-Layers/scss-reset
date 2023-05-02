# SCSS Reset

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/npm/v/scss-reset?color=%23cb0000)](https://www.npmjs.com/package/scss-reset)
[![npm](https://img.shields.io/npm/dw/scss-reset)](https://www.npmjs.com/package/scss-reset)

_Reset compilation = modern reset + meyer's reset + normalizer_

Demo: https://andreymatin.github.io/scss-reset/test/index.html

## Features

- Based on [Meyer's CSS Reset](https://meyerweb.com/eric/tools/css/reset/)
- Modernized [modern-css-reset](https://github.com/hankchizljaw/modern-css-reset)
- Useful parts from [normalize.css](https://necolas.github.io/normalize.css/)
- Typography by SCSS variables (REM, BEM(int)) and mobile friendly definitions
- Expandable by prebuilded mixins (Accessability, HTML components)
- Optimization for JavaScript Applications and Web Components

## Why

For instantly fix some persistent CSS issues and add missing parts for popular CSS resets.
It is also compatible with other HTML/CSS frameworks like Twitter Bootstrap, Tailwind CSS, etc.
You can extend styles reset by mixin collection and easily improve it.


## Install


[![NPM](https://nodei.co/npm/scss-reset.png?compact=true)](https://nodei.co/npm/scss-reset/)


```
yarn add scss-reset;
```

or

```
npm i scss-reset;
```


## Usage

Please include into top of the main.scss:


```scss
@import '../node_modules/scss-reset/src/scss/_reset.scss';
```

or:

```scss
@import '../node_modules/scss-reset/_reset.scss';
```

or shorter:

```scss
@import 'scss-reset/_reset.scss';
```

or shorter x2:

```scss
@import 'scss-reset/reset';
```


depends of your workspace configuration.

## CDN

Optimized and compressed CSS version for _reset.scss

```html
<link rel="stylesheet" href="https://unpkg.com/scss-reset/build/reset.css">
```

## Typography Usage

- _variables.scss
- _typography.scss

_variables.scss and _typography.scss are optional.

You can copy them from to development folder for additional custom modifications

```
'node_modules/scss-reset/src/scss/_variables.scss';
'node_modules/scss-reset/src/scss/_typography.scss';
```

for additional modifications.


### Usage with Shopify Dawn theme

- Please, copy reset-shopify-down.css from '/res' npm folder to '/assets' theme folder
- Please, include reset-shopify-down.css into 'layout/theme.liquid/' after base.css

```liquid
{{ 'reset-shopify-down.css' | asset_url | stylesheet_tag }}
```

## Total Reset for Web Components

Please, use _total-reset.scss for Web Components or for modern JavaScript Apps
where need to deep reset all properties of the Shadow DOM elements without reset Document styles.

### Imoprt Total Reset SCSS file

```scss
@import 'scss-reset/_total-reset.scss';
```

or

```scss
@import 'scss-reset/total-reset';
```

### Total Reset Data URI

HTML snippet for Web Component integration

```html
<style>@import url("data:text/css;base64,OndoZXJlKDpub3QodGFibGUsdGhlYWQsdGJvZHksdHIsdGgsdGQsc3ZnKSl7YWxsOnVuc2V0O2JveC1zaXppbmc6Ym9yZGVyLWJveH06d2hlcmUoOm5vdCh0YWJsZSx0aGVhZCx0Ym9keSx0cix0aCx0ZCxzdmcpKTphZnRlciw6d2hlcmUoOm5vdCh0YWJsZSx0aGVhZCx0Ym9keSx0cix0aCx0ZCxzdmcpKTpiZWZvcmV7YWxsOnVuc2V0O2JveC1zaXppbmc6Ym9yZGVyLWJveH1hLGFiYnIsYWNyb255bSxhZGRyZXNzLGFydGljbGUsYXNpZGUsYXVkaW8sYixiaWcsYmxvY2txdW90ZSxidXR0b24sY2FudmFzLGNhcHRpb24sY2VudGVyLGNpdGUsY29kZSxkZCxkZWwsZGV0YWlscyxkZm4sZGl2LGRsLGR0LGVtLGVtYmVkLGZpZWxkc2V0LGZpZ2NhcHRpb24sZmlndXJlLGZvb3Rlcixmb3JtLGgxLGgyLGgzLGg0LGg1LGg2LGhlYWRlcixoZ3JvdXAsaSxpZnJhbWUsaW1nLGlucyxrYmQsbGFiZWwsbGVnZW5kLGxpLG1haW4sbWFyayxtZW51LG5hdixvbCxvdXRwdXQscCxwcmUscSxydWJ5LHMsc2FtcCxzZWN0aW9uLHNtYWxsLHNwYW4sc3RyaWtlLHN0cm9uZyxzdWIsc3VtbWFyeSxzdXAsdGFibGUsdGJvZHksdGQsdGZvb3QsdGgsdGhlYWQsdGltZSx0cix0dCx1LHVsLHZhcix2aWRlb3tmb250LXNpemU6MTAwJX1hcnRpY2xlLGFzaWRlLGJsb2NrcXVvdGUsZGV0YWlscyxkaXYsZmlnY2FwdGlvbixmaWd1cmUsZm9vdGVyLGZvcm0saDEsaDIsaDMsaDQsaDUsaDYsaGVhZGVyLGhncm91cCxtYWluLG1lbnUsbmF2LHAscHJlLHNlY3Rpb257ZGlzcGxheTpibG9ja31hdWRpbyxjYW52YXMsaW1nLHBpY3R1cmUsc3ZnLHZpZGVve2Rpc3BsYXk6aW5saW5lLWJsb2NrO21heC13aWR0aDoxMDAlO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX1baGlkZGVuXSxzdHlsZSx0ZW1wbGF0ZXtkaXNwbGF5Om5vbmV9YVtocmVmXSxidXR0b24sbGFiZWxbZm9yXSxzZWxlY3R7Y3Vyc29yOnBvaW50ZXJ9dGFibGV7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO2JvcmRlci1zcGFjaW5nOjA7dGV4dC1pbmRlbnQ6MH10YWJsZSx0Ym9keSx0ZCx0aCx0aGVhZCx0cntib3JkZXI6MDtmb250LXNpemU6MTAwJTtmb250OmluaGVyaXQ7bWFyZ2luOjA7cGFkZGluZzowO3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lfQ==");</style>
```


## Mixins

| Mixins             | Include                      | Description                                       |
|--------------------|------------------------------|---------------------------------------------------|
| disableAnimation   | @include disableAnimation;   | Disable CSS animation                             |
| acDisableAnimation | @include acDisableAnimation; | Disable CSS animation depends of OS configuration |
| acModeBW           | @include acModeBW;           | Grayscale Mode                                    |
| acModeContrast     | @include acModeContrast;     | Contrast Mode with Inverted colors                |
| meterReset         | @include meterReset;         | Styles reset for ```<meter>```                    |
| progressReset      | @include progressReset;      | Styles reset for ```<progress>```                 |

## Technical Files

- Compressed CSS version: /build/reset.css
- Test Page: /test/index.html

## Related Projects

I created this and some additional services for [html-base](https://www.npmjs.com/package/html-base) to improve quality of frontend output. Here is the list:

- [scss-mixins-npm](https://www.npmjs.com/package/scss-mixins-npm)
- [html-test](https://www.npmjs.com/package/html-test)
- [mobile-friendly-test-npm](https://www.npmjs.com/package/mobile-friendly-test-npm)
- [html-speed](https://www.npmjs.com/package/html-speed)
- [css-test-npm](https://www.npmjs.com/package/css-test-npm)

## Contributing

For issues, bugs or improvements please open an [issue](https://github.com/andreymatin/scss-reset/issues/new)

---
[MIT License](LICENSE)
