# SCSS Reset

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Reset compilation = modern reset + meyer's reset + normalizer.

## Features

- Based on [Meyer's CSS Reset](https://meyerweb.com/eric/tools/css/reset/)
- Modernized [modern-css-reset](https://github.com/hankchizljaw/modern-css-reset)
- Useful parts from [normalize.css](https://necolas.github.io/normalize.css/)
- Typography normalization by SCSS variables
- Optimization for BEM(int)
- REM integration
- Semantic Notes
- Expandable by Accessability and Responsive mixin

## Installation


```
yarn add scss-reset;
```

or

```
npm i scss-reset --save;
```


## Usage

```scss
@import '../node_modules/scss-reset/src/scss/_reset.scss';
```

_variables.scss and _typography.scss are optional.
You can take it from

```
'node_modules/scss-reset/src/scss/_variables.scss';
'node_modules/scss-reset/src/scss/_typography.scss';
```

for additional modifications.

Or yo can download HTML bundle from git repo:

[html-initial-bundle](https://github.com/andreymatin/html-initial-bundle)

with other frontend toolkit.


## Typography normalization

- _variables.scss
- _typography.scss

### _variables.scss

Predefined fonts and colors

### _typography.scss

Additional typographical reset

## REM integration

Please uncomment

```scss
$basic-font-size: 62.5%;
$paragraph: 1.6rem;
$line-height: 2.4rem;
```
at  _variables.scss and remove duplicates above.


## Mixins

- disableAnimation
- acDisableAnimation
- acModeBW
- acModeContrast


### disableAnimation

Disable animation.

```scss
@include disableAnimation;
```

### acDisableAnimation

Disable animation by Browser Configuration.

```scss
@include acDisableAnimation;
```

### acModeBW

Grayscale Mode

```scss
@include acModeBW;
```

### acModeContrast

Contrast Mode with Inverted colors

```scss
@include acModeContrast;
```



## Technical Files

- Compressed CSS version: /dist/main.css
- Test Page: /test/index.html

## GitHub

- https://github.com/andreymatin/scss-reset

## Contributing

For issues, bugs or imporvements please open an [issue](https://github.com/andreymatin/scss-reset/issues/new)


## License

MIT


## Inspiration

- https://hankchizljaw.com/wrote/a-modern-css-reset/

