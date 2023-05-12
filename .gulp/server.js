import gulp from 'gulp';
const { src, dest } = gulp;

/**
 * System
 */
import { deleteAsync } from 'del';

/**
 * Notification
 */
import plumber from 'gulp-plumber';

/**
 * Versioning
 */
import bump from 'gulp-bump';

/**
 * Server
 */
import connect from 'gulp-connect';
import open from 'gulp-open';


/**
* Config
*/

const cfg = {
  server: {
    host: '0.0.0.0',
    root: './test/',
    port: 4000,
    src: './test/index.html',
    uri: 'http://localhost:4000/',
  }
};

/**
 * Create Local Web Server
 */
const openServer = () => {
  connect.server({
    host: cfg.server.host,
    root: cfg.server.root,
    port: cfg.server.port,
    livereload: true
  });
};

/**
 * Open Default Browser
 */
const openBrowser = () =>
  src(cfg.server.src)
    .pipe(plumber())
    .pipe(
      open({
        uri: cfg.server.uri,
      })
    );

/**
 * Patching
 */
const bumper = () => src('./package.json').pipe(bump()).pipe(dest('./'));

/**
 * Clean
 */
const cleanBuild = () => {
  return deleteAsync(['./build']);
};

const cleanDist = () => {
  return deleteAsync(['./dist']);
};

const cleanStyles = () => {
  return deleteAsync(['./reset.scss', '_total-reset.scss', 'total-reset.css', '_typography.scss', '_variables.scss', 'main.scss']);
};

const cleanHTML = () => {
  return deleteAsync(['./dist/layouts', './build/layouts']);
};


export { openServer, openBrowser, bumper, cleanBuild, cleanDist, cleanHTML, cleanStyles };
