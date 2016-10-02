var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch'),
    uglify = require('gulp-uglify');

gulp.task('clean', () => {
  return gulp.src('dist/')
  .pipe( clean() );
});

gulp.task('jshint', () => {
  return gulp.src('src/**.*')
  .pipe( jshint() )
  .pipe( jshint.reporter('default') );
});

gulp.task('scripts', ['clean'], () => {
  return gulp.src('src/**.*')
  .pipe( uglify() )
  .pipe( concat('cMap.min.js') )
  .pipe( gulp.dest('dist/') );
});

gulp.task('build', ['jshint', 'scripts']);

gulp.task('watch', () => {
  gulp.watch('src/**.*', ['jshint', 'scripts']);
});