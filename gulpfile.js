const gulp = require('gulp')
const clean = require('gulp-clean')
const concat = require('gulp-concat')
const watch = require('gulp-watch')
const uglify = require('gulp-uglify')

gulp.task('clean', () => {
  return gulp.src('dist/')
    .pipe( clean() );
})

gulp.task('scripts', ['clean'], () => {
  return gulp.src('src/**.*')
    .pipe( uglify() )
    .pipe( concat('cMap.min.js') )
    .pipe( gulp.dest('dist/') );
})

gulp.task('build', ['scripts']);

gulp.task('watch', () => {
  gulp.watch('src/**.*', ['scripts']);
})