const gulp = require('gulp');
const sass = require('gulp-sass');
const csso = require('gulp-csso');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const rename = require('gulp-rename');
const livereload = require('gulp-livereload');

// HTML
var HTML_SRC = 'src/*.html';
var HTML_DEST = 'dist';
// Sass
var SASS_SRC = 'scss/*.scss';
var SASS_DEST = 'src/css';
// CSS
var STYLE_SRC = 'src/css/*.css';
var STYLE_DEST = 'dist/css';
// JavaScript
var JS_SRC = 'src/js/*.js';
var JS_TO_MIN_SRC = 'dist/js/*.js';
var JS_DEST = 'dist/js';

// Compile Sass
gulp.task('compile-sass', async function() {
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
  .pipe(csso())
  .pipe(gulp.dest(STYLE_DEST));
});
async function minifyCSS() {
  return gulp
  .src(STYLE_SRC)
  .pipe(csso())
  .pipe(gulp.dest(STYLE_DEST));
};

// Minify HTML
gulp.task('minify-html', async function() {
  return gulp.src(HTML_SRC)
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest(HTML_DEST))
    .pipe(livereload());
});
async function minifyHTML() {
  return gulp
  .src(HTML_SRC)
  .pipe(htmlmin({
    collapseWhitespace: true,
    removeComments: true
  }))
  .pipe(gulp.dest(HTML_DEST))
};

// Compile ES6 to ES5 - Babel
gulp.task('compile-js', async function() {
  return gulp.src(JS_SRC)
		.pipe(babel({
			presets: ['@babel/preset-env']
		}))
    .pipe(gulp.dest(JS_DEST));
});
async function compileJS() {
  return gulp.src(JS_SRC)
		.pipe(babel({
			presets: ['@babel/preset-env']
		}))
    .pipe(gulp.dest(JS_DEST));
};
// Minify JS
gulp.task('minify-js', async function() {
  return gulp.src(JS_TO_MIN_SRC)
  .pipe(uglify())
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest(JS_DEST));
});
async function minifyJS() {
  return gulp
  .src(JS_SRC)
  .pipe(uglify())
  .pipe(gulp.dest(JS_DEST));
};

function watchFiles() {
  // TODO: Reload doesn't work on Ctrl+S
  livereload.listen();
  gulp.watch(HTML_SRC, gulp.task('minify-html'));
  gulp.watch(SASS_SRC, gulp.task('compile-sass'));
  gulp.watch(STYLE_SRC, gulp.task('minify-css'));
  gulp.watch(JS_SRC, gulp.task('compile-js'));

  // TODO - compile to ES5 and then minify
  // gulp.watch(JS_SRC, minJS);
}
const watch = gulp.parallel(watchFiles);
// exports.watch = watch;

// Default
gulp.task('default', watch);