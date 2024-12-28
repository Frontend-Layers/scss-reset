/**
 * Load Modules
 * ================================================================================
 */

import gulp from 'gulp';

// Styles
import { scss, cssCompress, stylesReload, renameMain, renameLight, renameTotal, copyCSS, copyResetCSS, minifyResetCSS, moveResetToScssReset } from './.gulp/styles.js';

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
    ['./src/scss/**/*.scss', '!./src/scss/reset.scss', '!./src/scss/light.scss', '!./src/scss/total.scss'],
    series(renameMain, renameLight, renameTotal, scss, cssCompress, copyCSS, copyResetCSS, stylesReload, cleanStyles, moveResetToScssReset)
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
    series(renameMain, renameLight, renameTotal, scss, cssCompress, copyCSS, copyResetCSS, minifyResetCSS, cleanStyles, moveResetToScssReset),
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
    series(renameMain, renameLight, renameTotal, scss, cssCompress, copyCSS, copyResetCSS, minifyResetCSS, cleanStyles, moveResetToScssReset),
  ),
  bumper
);

export { build };
