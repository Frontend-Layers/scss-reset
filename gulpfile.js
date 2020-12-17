(() => {
  "use strict";

  const { src, dest, parallel, series, watch } = require("gulp");

  /**
   * Modules
   */

  // Styles
  const sass = require("gulp-sass");
  const postcss = require("gulp-postcss");
  const autoprefixer = require("autoprefixer");
  const cssnano = require("cssnano");

  // Server
  const connect = require("gulp-connect");
  const open = require("gulp-open");
  const rename = require("gulp-rename");

  // Notification
  const plumber = require("gulp-plumber");
  const notify = require("gulp-notify");

  // Source Maps
  const sourcemaps = require("gulp-sourcemaps");

  // Versions
  const bump = require("gulp-bump");

  /**
   * Config
   */
  const cfg = {
    src: {
      scss: "./src/scss/**/*.scss",
      css: "./src/css/**/*.css",
      html: "./test/*.html",
    },
    server: {
      host: "0.0.0.0",
      root: "./test/",
      port: 5500,
      src: "./test/index.html",
      uri: "http://localhost:5500/",
    },
    dest: {
      scss: "./src/scss/",
      css: "./src/css/",
      cssDist: "./dist/",
      cssTest: "./test/css/",
    },
  };

  /**
   * Styles
   */
  const styles = () =>
    src(cfg.src.scss)
      .pipe(sourcemaps.init())
      .pipe(plumber())
      .pipe(
        sass({
          outputStyle: "expanded",
          //outputStyle: 'compressed',
          errLogToConsole: false,
        })
      )
      .on("error", notify.onError())
      .pipe(sourcemaps.write("./"))
      .pipe(dest(cfg.dest.css))
      .pipe(connect.reload());

  const stylesRenameReset = () =>
    src("./src/scss/_reset.scss")
      .pipe(rename("reset.scss"))
      .pipe(dest("./src/scss"));

  /**
   * PostCSS, Autoprefixer
   */
  const css = () =>
    src(cfg.dest.css + "/**/*.css")
      .pipe(plumber())
      .pipe(postcss([autoprefixer(), cssnano()]))
      .on("error", notify.onError())
      .pipe(dest(cfg.dest.cssDist));

  /**
   * HTML
   */
  const html = () => src(cfg.src.html).pipe(connect.reload());

  /**
   * Patching
   */
  const bumper = () => src("./package.json").pipe(bump()).pipe(dest("./"));

  /**
   * Server
   */

  /**
   * Create Local Web Server
   */
  const openServer = () => {
    connect.server({
      host: cfg.server.host,
      root: cfg.server.root,
      port: cfg.server.port,
      livereload: true,
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
   * Watcher
   */
  const watcher = () => {
    watch(
      [cfg.src.scss, "!./src/scss/reset.scss"],
      series(stylesRenameReset, styles, css, copyCSS, copyResetCSS)
    );
    watch(cfg.src.html, html);
  };

  /**
   * Copy Test Styles
   */

  const copyCSS = () =>
    src(cfg.dest.cssDist + "*").pipe(dest(cfg.dest.cssTest));

  const copyResetCSS = () => src("./src/scss/_reset.scss").pipe(dest("./"));

  /**
   * Tasks
   */

  // Development Tasks
  exports.default = parallel(
    series(stylesRenameReset, styles, css, copyCSS, copyResetCSS),
    openServer,
    openBrowser,
    watcher
  );

  exports.build = series(
    stylesRenameReset,
    styles,
    css,
    copyCSS,
    copyResetCSS,
    bumper
  );
})();
