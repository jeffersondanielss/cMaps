var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat')
    uglify = require('gulp-uglify');

gulp.task('clean', () => {
  return gulp.src('dist/')
  .pipe( clean() );
});

gulp.task('jshint', () => {
  return gulp.src('scripts/**.*')
  .pipe( jshint() )
  .pipe( jshint.reporter('default') );
});

gulp.task('uglify', ['clean'], () => {
  return gulp.src(['scripts/map.js', 'scripts/main.js'])
  .pipe( uglify() )
  .pipe( concat('all.min.js') )
  .pipe( gulp.dest('dist/') );
});

gulp.task('default', ['jshint', 'uglify']);
