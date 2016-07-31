var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    stylus = require('gulp-stylus'),
    watch = require('gulp-watch'),
    jade = require('gulp-jade');

gulp.task('clean', () => {
  return gulp.src('dist/')
  .pipe( clean() );
});

gulp.task('jshint', () => {
  return gulp.src('app/scripts/**.*')
  .pipe( jshint() )
  .pipe( jshint.reporter('default') );
});

gulp.task('uglify', () => {
  return gulp.src(['app/scripts/map.js', 'app/scripts/main.js'])
  .pipe( uglify() )
  .pipe( concat('all.min.js') )
  .pipe( gulp.dest('dist/scripts/') );
});

gulp.task('stylus', () => {
  return gulp.src('app/styles/main.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./dist/styles'));
});

gulp.task('jade', () => {
  gulp.src('./app/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./'))
});


gulp.task('watch', () => {
  gulp.watch('app/scripts/*.js', ['jshint', 'uglify']);
  gulp.watch('app/styles/**/*.styl', ['stylus']);
  gulp.watch('app/*.jade', ['jade']);
});
