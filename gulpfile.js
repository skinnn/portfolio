const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const refresh = require('gulp-refresh');

// HTML
var HTML_SRC = 'assets-precompressed/*.html';
var HTML_DEST = 'dist';
// Sass
var SASS_SRC = 'scss/*.scss';
var SASS_DEST = 'assets-precompressed/css';
// CSS
var STYLE_SRC = 'assets-precompressed/css/*.css';
var STYLE_DEST = 'dist/css';
// JavaScript
var JS_SRC = 'assets-precompressed/js/*.js';
var JS_DEST = 'dist/js-min';

// Compile Sass
gulp.task('sass', async function() {
  return gulp.src(SASS_SRC)
  .pipe(sass())
  .pipe(gulp.dest(SASS_DEST));
});
async function compileSASS() {
  return gulp
  .src(SASS_SRC)
  .pipe(sass())
  .pipe(gulp.dest(SASS_DEST));
};

// Minify CSS
gulp.task('minify-css', async function() {
  return gulp.src(STYLE_SRC)
  .pipe(minifyCSS())
  .pipe(gulp.dest(STYLE_DEST));
});
async function minCSS() {
  return gulp
  .src(STYLE_SRC)
  .pipe(minifyCSS())
  .pipe(gulp.dest(STYLE_DEST));
};

// Minify JS
gulp.task('minify-js', async function() {
  return gulp.src(JS_SRC)
  .pipe(uglify())
  .pipe(gulp.dest(JS_DEST));
});
async function minJS() {
  return gulp
  .src(JS_SRC)
  .pipe(uglify())
  .pipe(gulp.dest(JS_DEST));
};

// Minify HTML
gulp.task('minify-html', async function() {
  return gulp.src(HTML_SRC)
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest(HTML_DEST));
});
async function minHTML() {
  return gulp
  .src(HTML_SRC)
  .pipe(htmlmin({
    collapseWhitespace: true,
    removeComments: true
  }))
  .pipe(gulp.dest(HTML_DEST));
};

// Gulp Watch
// gulp.task('watch', function() {
//   gulp.watch(SASS_SRC, ['sass']);
//   gulp.watch(STYLE_SRC, ['minify-css']);
// });

function watchFiles() {
  refresh.listen();
  gulp.watch(HTML_SRC, minHTML);
  gulp.watch(SASS_SRC, compileSASS);
  gulp.watch(STYLE_SRC, minCSS);

  // TODO
  // gulp.watch(JS_SRC, minJS);
}
const watch = gulp.parallel(watchFiles);
exports.watch = watch;



// Default
gulp.task('default', watch);
