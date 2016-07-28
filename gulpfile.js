var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    clean = require('gulp-clean'),
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

gulp.task('uglify', ['clean'], () => {
  return gulp.src('src/**.*')
  .pipe( uglify() )
  .pipe( gulp.dest('dist/') );
});

gulp.task('default', ['jshint', 'uglify']);