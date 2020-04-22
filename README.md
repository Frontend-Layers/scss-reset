# SCSS Reset

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Reset compilation = modern reset + meyer's reset + normalizer

## Features

- Best practices from [modern-css-reset](https://github.com/hankchizljaw/modern-css-reset)
- Modernized reset from [Meyer's CSS Rset](https://meyerweb.com/eric/tools/css/reset/)
- Reset styles only from [normalize.css](https://necolas.github.io/normalize.css/)_
- Typography normalization by SCSS variables
- Optimization for BEM(int)
- REM integration

## Installation


```
yarn add scss-reset;

```


## Usage

Please add into top of the main.scss


```scss

@import 'node_modules/scss-reset/src/scss/_variables.scss';
@import 'node_modules/scss-reset/src/scss/_reset.scss';
@import 'node_modules/scss-reset/src/scss/_typography.scss';

```

or if you copy it into your scss folder:

```scss

@import 'variables';
@import 'reset';
@import 'typography';

```

## Technical Files

- Compressed CSS version: /dist/main.css
- Test Page: /test/index.html

## GitHub

- https://github.com/andreymatin/scss-reset


## License

MIT


## Inspiration

- https://hankchizljaw.com/wrote/a-modern-css-reset/

