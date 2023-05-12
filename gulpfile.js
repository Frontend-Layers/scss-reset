/**
 * Load Modules
 * ================================================================================
 */

import gulp from 'gulp';

// Styles
import { scss, cssCompress, stylesReload, stylesRenameReset, copyCSS, copyResetCSS, minifyResetCSS } from './.gulp/styles.js';

// Server
import { openServer, openBrowser, bumper, cleanBuild, cleanDist, cleanStyles } from './.gulp/server.js';

import connect from 'gulp-connect';


const { src, parallel, series, watch } = gulp;

/**
 * HTML
 */
const html = () => src('./test/*.html').pipe(connect.reload());

/**
 * Watcher
 */
const watcher = () => {
  watch(
    ['./src/scss/**/*.scss', '!./src/scss/reset.scss'],
    series(stylesRenameReset, scss, cssCompress, copyCSS, copyResetCSS, stylesReload, cleanStyles)
  );
  watch('./test/*.html', html);
};


/**
 * Default Tasks
 */
export default series(
  cleanDist,
  cleanBuild,
  parallel(
    series(stylesRenameReset, scss, cssCompress, copyCSS, copyResetCSS, minifyResetCSS, cleanStyles),
    openServer,
    openBrowser,
    watcher
  )
);


/**
 * Build Tasks
 */
const build = series(
  cleanDist,
  cleanBuild,
  parallel(
    series(stylesRenameReset, scss, cssCompress, copyCSS, copyResetCSS, minifyResetCSS, cleanStyles),
  ),
  bumper
);

export { build };
