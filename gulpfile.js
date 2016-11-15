/*!
 * gulp
 * $ npm install gulp-react gulp-ruby-sass gulp-autoprefixer gulp-cssnano gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del --save-dev
 */

// Load plugins
var gulp = require('gulp'),
  react = require('gulp-react'),
  through2 = require('through2'),
  browserify = require('browserify'),
  babelify = require('babelify'),
  source = require('vinyl-source-stream'),
  connect = require('gulp-connect'),
  sass = require('gulp-ruby-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  cssnano = require('gulp-cssnano'),
  jshint = require('gulp-jshint'),
  uglify = require('gulp-uglify'),
  imagemin = require('gulp-imagemin'),
  rename = require('gulp-rename'),
  concat = require('gulp-concat'),
  notify = require('gulp-notify'),
  cache = require('gulp-cache'),
  livereload = require('gulp-livereload'),
  del = require('del');

// Styles
gulp.task('styles', function () {
  return sass('src/styles/main.scss', { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('dist/styles'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cssnano())
    .pipe(gulp.dest('dist/styles'))
    .pipe(notify({ message: 'Styles task complete' }));
});

// gulp.task('scripts', function () {
//   return gulp.src('src/scripts/**/*.js')
//     // .pipe(jshint('.jshintrc'))
//     // .pipe(jshint.reporter('default'))
//     .pipe(react())
//     .pipe(concat('bundle.js'))
//     .pipe(gulp.dest('dist/scripts'))
//     .pipe(rename({ suffix: '.min' }))
//     .pipe(uglify())
//     .pipe(gulp.dest('dist/scripts'))
//     .pipe(notify({ message: 'Scripts task complete' }));
// });

// Scripts
gulp.task('scripts', function () {
  return gulp.src('src/scripts/**/*.js')
    .pipe(through2.obj(function (file, enc, next) {
      browserify(file.path)
        .transform(babelify, { presets: ['react'] })
        .bundle(function (err, res) {
          err && console.log(err.stack);
          file.contents = res;
          next(null, file);
        });
    }))
    // .pipe(jshint('.jshintrc'))
    // .pipe(jshint.reporter('default'))
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

// Images
gulp.task('images', function () {
  return gulp.src('src/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/images'))
    .pipe(notify({ message: 'Images task complete' }));
});

// HTML
gulp.task('html', function () {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(notify({ message: 'HTML task complete' }));
})

// Clean
gulp.task('clean', function () {
  return del(['dist/styles', 'dist/scripts', 'dist/images']);
});

// Default task
gulp.task('default', ['clean'], function () {
  gulp.start('html', 'styles', 'scripts', 'images', 'webserver', 'watch');
});

// Watch
gulp.task('watch', function () {

  // Watch .scss files
  gulp.watch('src/styles/**/*.scss', ['styles']);

  // Watch .js files
  gulp.watch('src/scripts/**/*.js', ['scripts']);

  // Watch image files
  gulp.watch('src/images/**/*', ['images']);

  // Watch html files
  gulp.watch('src/index.html', ['html'])

  // Create LiveReload server
  livereload.listen();

  // Watch any files in dist/, reload on change
  gulp.watch(['dist/**']).on('change', livereload.changed);

});

// Web server
gulp.task('webserver', function () {
  connect.server({
    port: 3001,
    livereload: true,
    root: ['dist', '.tmp']
  });
});

// https://code.tutsplus.com/tutorials/gulp-as-a-development-web-server--cms-20903