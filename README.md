# SCSS Reset

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![npm](https://img.shields.io/npm/v/scss-reset?color=%23cb0000)
![npm](https://img.shields.io/npm/dw/scss-reset)

Reset compilation = modern reset + meyer's reset + normalizer.

Demo: https://andreymatin.github.io/scss-reset-staging/test/index.html

## Features

- Based on [Meyer's CSS Reset](https://meyerweb.com/eric/tools/css/reset/)
- Modernized [modern-css-reset](https://github.com/hankchizljaw/modern-css-reset)
- Useful parts from [normalize.css](https://necolas.github.io/normalize.css/)
- Typography normalization by SCSS variables (REM, BEM(int))
- Expandable by Accessability and Responsive mixins
- Mobile friendly optimization

## Why

For instantly fix some persistent CSS issues and add missing parts for popular CSS resets.
It is also compatible with other HTML/CSS frameworks like Twitter Bootstrap, Tailwind CSS, etc.
You can extend styles reset by mixin collection.

I recommend to use copies of _typography.scss and _variables.scss for design systems and themes extending.

## Install

[![NPM](https://nodei.co/npm/scss-reset.png?compact=true)](https://nodei.co/npm/scss-reset/)


```
yarn add scss-reset;
```

or

```
npm i scss-reset --save;
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

## Typography Usage

_variables.scss and _typography.scss are optional.

Please copy them from

```
'node_modules/scss-reset/src/scss/_variables.scss';
'node_modules/scss-reset/src/scss/_typography.scss';
```

for additional modifications.

Ready to use HTML template with all necessary includes is there:

[html-initial-bundle](https://github.com/andreymatin/html-initial-bundle)


## Typography normalization

- _variables.scss
- _typography.scss

## Mixins

- disableAnimation
- acDisableAnimation
- acModeBW
- acModeContrast
- meterReset
- progressReset


### disableAnimation

Disable animation

```scss
@include disableAnimation;
```

### acDisableAnimation

Disable animation by Browser Configuration

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

### meterReset

Styles reset for ```<meter>```

```scss
@include meterReset;
```

### progressReset

Styles reset for ```<progress>```

```scss
@include progressReset;
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
