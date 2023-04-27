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
depends of your workspace configuration.

### Data URI Snippet

```html
<style>@import url("data:text/css;base64,aHRtbHstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6MTAwJX1odG1sOmZvY3VzLXdpdGhpbntzY3JvbGwtYmVoYXZpb3I6c21vb3RofWJvZHl7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OjEwMCU7LW1vei10ZXh0LXNpemUtYWRqdXN0OjEwMCU7dGV4dC1zaXplLWFkanVzdDoxMDAlOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO21pbi1oZWlnaHQ6MTAwdmg7cG9zaXRpb246cmVsYXRpdmU7dGV4dC1yZW5kZXJpbmc6b3B0aW1pemVTcGVlZDt3aWR0aDoxMDAlfSosOmFmdGVyLDpiZWZvcmV7Ym94LXNpemluZzpib3JkZXItYm94fWE6bm90KFtjbGFzc10pey13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLXNraXA6aW5rO3RleHQtZGVjb3JhdGlvbi1za2lwLWluazphdXRvfWEsYWJicixhY3JvbnltLGFkZHJlc3MsYXBwbGV0LGFydGljbGUsYXNpZGUsYXVkaW8sYixiaWcsYmxvY2txdW90ZSxib2R5LGNhbnZhcyxjYXB0aW9uLGNlbnRlcixjaXRlLGNvZGUsZGQsZGVsLGRldGFpbHMsZGZuLGRpdixkbCxkdCxlbSxlbWJlZCxmaWVsZHNldCxmaWdjYXB0aW9uLGZpZ3VyZSxmb290ZXIsZm9ybSxoMSxoMixoMyxoNCxoNSxoNixoZWFkZXIsaGdyb3VwLGh0bWwsaSxpZnJhbWUsaW1nLGlucyxrYmQsbGFiZWwsbGVnZW5kLGxpLG1hcmssbWVudSxuYXYsb2JqZWN0LG9sLG91dHB1dCxwLHByZSxxLHJ1YnkscyxzYW1wLHNlY3Rpb24sc21hbGwsc3BhbixzdHJpa2Usc3Ryb25nLHN1YixzdW1tYXJ5LHN1cCx0YWJsZSx0Ym9keSx0ZCx0Zm9vdCx0aCx0aGVhZCx0aW1lLHRyLHR0LHUsdWwsdmFyLHZpZGVve2JvcmRlcjowO2ZvbnQtc2l6ZToxMDAlO2ZvbnQ6aW5oZXJpdDttYXJnaW46MDtwYWRkaW5nOjA7dmVydGljYWwtYWxpZ246YmFzZWxpbmV9OmZvY3Vze291dGxpbmU6MH1hcnRpY2xlLGFzaWRlLGRldGFpbHMsZmlnY2FwdGlvbixmaWd1cmUsZm9vdGVyLGhlYWRlcixoZ3JvdXAsbWFpbixtZW51LG5hdixzZWN0aW9ue2Rpc3BsYXk6YmxvY2t9b2wsdWx7bGlzdC1zdHlsZTpub25lfWJsb2NrcXVvdGUscXtxdW90ZXM6bm9uZX1ibG9ja3F1b3RlOmFmdGVyLGJsb2NrcXVvdGU6YmVmb3JlLHE6YWZ0ZXIscTpiZWZvcmV7Y29udGVudDoiIjtjb250ZW50Om5vbmV9aW5wdXQsaW5wdXQ6cmVxdWlyZWR7Ym94LXNoYWRvdzpub25lfWlucHV0Oi13ZWJraXQtYXV0b2ZpbGwsaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDphY3RpdmUsaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cyxpbnB1dDotd2Via2l0LWF1dG9maWxsOmhvdmVyey13ZWJraXQtYm94LXNoYWRvdzppbnNldCAwIDAgMCAzMHB4ICNmZmZ9aW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLGlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixpbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLGlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uey13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lfWlucHV0W3R5cGU9c2VhcmNoXXstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZX1pbnB1dDpmb2N1c3tvdXRsaW5lOm5vbmV9YXVkaW8sY2FudmFzLHZpZGVve2Rpc3BsYXk6aW5saW5lLWJsb2NrO21heC13aWR0aDoxMDAlfWF1ZGlvOm5vdChbY29udHJvbHNdKXtkaXNwbGF5Om5vbmU7aGVpZ2h0OjB9W2hpZGRlbl17ZGlzcGxheTpub25lfWE6YWN0aXZlLGE6aG92ZXJ7b3V0bGluZTpub25lfWltZ3toZWlnaHQ6YXV0bzttYXgtd2lkdGg6MTAwJTt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9aW1nLHBpY3R1cmV7ZGlzcGxheTppbmxpbmUtYmxvY2t9YnV0dG9uLGlucHV0e2xpbmUtaGVpZ2h0Om5vcm1hbH1idXR0b24saHRtbCBpbnB1dFt0eXBlPWJ1dHRvbl0saW5wdXRbdHlwZT1yZXNldF0saW5wdXRbdHlwZT1zdWJtaXRdey13ZWJraXQtYXBwZWFyYW5jZTpidXR0b247YmFja2dyb3VuZDp0cmFuc3BhcmVudDtib3JkZXI6MDtjdXJzb3I6cG9pbnRlcn1idXR0b25bZGlzYWJsZWRdLGh0bWwgaW5wdXRbZGlzYWJsZWRde2N1cnNvcjpkZWZhdWx0fVtkaXNhYmxlZF17cG9pbnRlci1ldmVudHM6bm9uZX1pbnB1dFt0eXBlPWNoZWNrYm94XSxpbnB1dFt0eXBlPXJhZGlvXXtwYWRkaW5nOjB9aW5wdXRbdHlwZT1zZWFyY2hdey13ZWJraXQtYXBwZWFyYW5jZTp0ZXh0ZmllbGQ7Ym94LXNpemluZzpjb250ZW50LWJveH1pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24saW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uey13ZWJraXQtYXBwZWFyYW5jZTpub25lfWJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixpbnB1dDo6LW1vei1mb2N1cy1pbm5lcntib3JkZXI6MDtwYWRkaW5nOjB9YnV0dG9ue2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Ym9yZGVyOjB9dGV4dGFyZWF7b3ZlcmZsb3c6YXV0bztyZXNpemU6dmVydGljYWw7dmVydGljYWwtYWxpZ246dG9wfXRhYmxle2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTtib3JkZXItc3BhY2luZzowO3RleHQtaW5kZW50OjB9aHJ7YmFja2dyb3VuZDojMDAwO2JvcmRlcjowO2JveC1zaXppbmc6Y29udGVudC1ib3g7aGVpZ2h0OjFweDtsaW5lLWhlaWdodDowO21hcmdpbjowO292ZXJmbG93OnZpc2libGU7cGFkZGluZzowO3BhZ2UtYnJlYWstYWZ0ZXI6YWx3YXlzO3dpZHRoOjEwMCV9cHJle2ZvbnQtZmFtaWx5Om1vbm9zcGFjZSxtb25vc3BhY2U7Zm9udC1zaXplOjEwMCV9YXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fWFiYnJbdGl0bGVde2JvcmRlci1ib3R0b206bm9uZTt0ZXh0LWRlY29yYXRpb246bm9uZX1jb2RlLGtiZCxwcmUsc2FtcHtmb250LWZhbWlseTptb25vc3BhY2UsbW9ub3NwYWNlfXNtYWxsLHN1YixzdXB7Zm9udC1zaXplOjc1JX1zdWIsc3Vwe2xpbmUtaGVpZ2h0OjA7cG9zaXRpb246cmVsYXRpdmU7dmVydGljYWwtYWxpZ246YmFzZWxpbmV9c3Vie2JvdHRvbTotNXB4fXN1cHt0b3A6LTVweH1idXR0b24saW5wdXQsb3B0Z3JvdXAsc2VsZWN0LHRleHRhcmVhe2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOjEwMCU7bGluZS1oZWlnaHQ6MTttYXJnaW46MDtwYWRkaW5nOjB9YnV0dG9uLGlucHV0e292ZXJmbG93OnZpc2libGV9YnV0dG9uLHNlbGVjdHt0ZXh0LXRyYW5zZm9ybTpub25lfVt0eXBlPWJ1dHRvbl0sW3R5cGU9cmVzZXRdLFt0eXBlPXN1Ym1pdF0sYnV0dG9uey13ZWJraXQtYXBwZWFyYW5jZTpidXR0b259W3R5cGU9YnV0dG9uXTo6LW1vei1mb2N1cy1pbm5lcixbdHlwZT1yZXNldF06Oi1tb3otZm9jdXMtaW5uZXIsW3R5cGU9c3VibWl0XTo6LW1vei1mb2N1cy1pbm5lcixidXR0b246Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyLXN0eWxlOm5vbmU7b3V0bGluZTowO3BhZGRpbmc6MH1sZWdlbmR7Ym9yZGVyOjA7Y29sb3I6aW5oZXJpdDtkaXNwbGF5OmJsb2NrO21heC13aWR0aDoxMDAlO3doaXRlLXNwYWNlOm5vcm1hbDt3aWR0aDoxMDAlfWZpZWxkc2V0e21pbi13aWR0aDowfWJvZHk6bm90KDotbW96LWhhbmRsZXItYmxvY2tlZCkgZmllbGRzZXR7ZGlzcGxheTpibG9ja31wcm9ncmVzc3t2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX1bdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b257aGVpZ2h0OmF1dG99W3R5cGU9c2VhcmNoXXstd2Via2l0LWFwcGVhcmFuY2U6dGV4dGZpZWxkO291dGxpbmUtb2Zmc2V0Oi0ycHh9W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbnstd2Via2l0LWFwcGVhcmFuY2U6bm9uZX06Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uey13ZWJraXQtYXBwZWFyYW5jZTpidXR0b247Zm9udDppbmhlcml0fXN1bW1hcnl7ZGlzcGxheTpsaXN0LWl0ZW19dGVtcGxhdGV7ZGlzcGxheTpub25lfQ==");</style>
```

### Typography Usage

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

### Total Reset Data URI

HTML snippet for Web Component integration

```html
<style>@import url("data:text/css;base64,OndoZXJlKDpub3QodGFibGUsdGhlYWQsdGJvZHksdHIsdGgsdGQpKXthbGw6dW5zZXQ7Ym94LXNpemluZzpib3JkZXItYm94fTp3aGVyZSg6bm90KHRhYmxlLHRoZWFkLHRib2R5LHRyLHRoLHRkKSk6YWZ0ZXIsOndoZXJlKDpub3QodGFibGUsdGhlYWQsdGJvZHksdHIsdGgsdGQpKTpiZWZvcmV7YWxsOnVuc2V0O2JveC1zaXppbmc6Ym9yZGVyLWJveH1hLGFiYnIsYWNyb255bSxhZGRyZXNzLGFydGljbGUsYXNpZGUsYXVkaW8sYixiaWcsYmxvY2txdW90ZSxidXR0b24sY2FudmFzLGNhcHRpb24sY2VudGVyLGNpdGUsY29kZSxkZCxkZWwsZGV0YWlscyxkZm4sZGl2LGRsLGR0LGVtLGVtYmVkLGZpZWxkc2V0LGZpZ2NhcHRpb24sZmlndXJlLGZvb3Rlcixmb3JtLGgxLGgyLGgzLGg0LGg1LGg2LGhlYWRlcixoZ3JvdXAsaSxpZnJhbWUsaW1nLGlucyxrYmQsbGFiZWwsbGVnZW5kLGxpLG1haW4sbWFyayxtZW51LG5hdixvbCxvdXRwdXQscCxwcmUscSxydWJ5LHMsc2FtcCxzZWN0aW9uLHNtYWxsLHNwYW4sc3RyaWtlLHN0cm9uZyxzdWIsc3VtbWFyeSxzdXAsdGFibGUsdGJvZHksdGQsdGZvb3QsdGgsdGhlYWQsdGltZSx0cix0dCx1LHVsLHZhcix2aWRlb3tmb250LXNpemU6MTAwJX1hcnRpY2xlLGFzaWRlLGJsb2NrcXVvdGUsZGV0YWlscyxkaXYsZmlnY2FwdGlvbixmaWd1cmUsZm9vdGVyLGZvcm0saDEsaDIsaDMsaDQsaDUsaDYsaGVhZGVyLGhncm91cCxtYWluLG1lbnUsbmF2LHAscHJlLHNlY3Rpb257ZGlzcGxheTpibG9ja31hdWRpbyxjYW52YXMsaW1nLHBpY3R1cmUsc3ZnLHZpZGVve2Rpc3BsYXk6aW5saW5lLWJsb2NrO21heC13aWR0aDoxMDAlO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX1baGlkZGVuXSxzdHlsZSx0ZW1wbGF0ZXtkaXNwbGF5Om5vbmV9YVtocmVmXSxidXR0b24sbGFiZWxbZm9yXSxzZWxlY3R7Y3Vyc29yOnBvaW50ZXJ9");</style>
```

## CDN

Optimized and compressed CSS version for _reset.scss

```html
<link rel="stylesheet" href="https://unpkg.com/scss-reset/build/reset.css">
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
