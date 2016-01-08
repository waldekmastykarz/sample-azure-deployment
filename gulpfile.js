'use script';

var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    del = require('del'),
    runSequence = require('run-sequence');
    
var config = {
  release: './dist'
};

gulp.task('serve-static', function () {
  gulp.src('.')
    .pipe(webserver({
      https: true,
      port: '8443',
      host: 'localhost',
      directoryListing: false,
      fallback: 'index.html'
    }));
});

gulp.task('dist-remove', function () {
  return del(config.release);
});

gulp.task('dist-copy-files', function() {
  return gulp.src([
    './css/**/*',
    './lib/*/dist/**/*',
    './index.html',
    './package.json'
  ], { base: './' }).pipe(gulp.dest(config.release));
});

gulp.task('dist', function () {
  runSequence(
    ['dist-remove'],
    ['dist-copy-files']
    );
});