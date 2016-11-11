var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var del = require('del');

gulp.task('default', [], function() {
	return browserify('./source/app.js')
	.transform(babelify, { presets: ['react'] })
	.bundle()
	.pipe(source('app.js'))
	.pipe(gulp.dest('build'))
});