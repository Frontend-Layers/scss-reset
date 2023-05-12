import gulp from 'gulp';
const { src, dest } = gulp;

/**
 * System
 */
import connect from 'gulp-connect';
import rename from 'gulp-rename';

/**
 * Notification
 */
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import size from 'gulp-size';

/**
 * Styles
 */
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';

import cleanCSS from 'gulp-clean-css';

/**
 * Compressor
 */
import cssnano from 'cssnano';

/**
 * Source Map
 */
import sourcemaps from 'gulp-sourcemaps';

/**
 * Config
 */
const cfg = {
  src: {
    scss: './src/scss/**/*.scss',
    css: './src/styles/**/*.css',
  },
  dest: {
    scss: './src/styles/',
    css: './dist/',
    cssDist: './dist/',
    cssTest: './test/css/'
  }
};

/**
 * Styles
 * ================================================================================
 */
const scss = () =>
  src(cfg.src.scss)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: 'expanded',
        errLogToConsole: false,
        includePaths: ['node_modules', 'bower_components', 'src', '.'],
      })
    )
    .on('error', notify.onError())
    .pipe(sourcemaps.write('./'))
    .pipe(dest(cfg.dest.scss))
    .pipe(dest(cfg.dest.css));

/**
 * Styles Reload
 *
 */
const stylesReload = () => src(cfg.dest.scss)
  .pipe(connect.reload());

/**
* PostCSS, Autoprefixer, CSS compressor
*/
const cssCompress = () =>
  src('./dist/**/*.css')
    .pipe(plumber())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .on('error', notify.onError())
    .pipe(dest('./build/'))
    .pipe(size());


const stylesRenameReset = () =>
  src('./src/scss/_reset.scss')
    .pipe(rename('reset.scss'))
    .pipe(dest('./src/scss'));

/**
 * Copy Test Styles
 */

const copyCSS = () =>
  src(cfg.dest.cssDist + '*').pipe(dest(cfg.dest.cssTest));

const copyResetCSS = () => src('./src/scss/*.scss').pipe(dest('./'));

const minifyResetCSS = () => src('./build/reset.css')
  .pipe(cleanCSS({ debug: true }, (details) => {
    console.log(`${details.name}: ${details.stats.originalSize}`);
    console.log(`${details.name}: ${details.stats.minifiedSize}`);
  }))
  .pipe(dest('./build/'));

export { scss, cssCompress, stylesReload, stylesRenameReset, copyCSS, copyResetCSS, minifyResetCSS };




