var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    clean = require('gulp-clean'),
    uglify = require('gulp-uglify');

gulp.task('clean', function(){
  return gulp.src('dist/')
  .pipe( clean() );
});

gulp.task('jshint', function(){
  return gulp.src('src/**.*')
  .pipe( jshint() )
  .pipe( jshint.reporter('default') );
});

gulp.task('uglify', ['clean'], function(){
  return gulp.src('src/**.*')
  .pipe( uglify() )
  .pipe( gulp.dest('dist/') );
});

gulp.task('build', ['jshint', 'uglify']);