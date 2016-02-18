'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./src/assets/styles/sass/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./src/assets/styles/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/assets/styles/sass/*.scss', ['sass']);
});
