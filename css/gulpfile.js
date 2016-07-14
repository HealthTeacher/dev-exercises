var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

var config = {
  html: [ 'src/*.html'],
  scss: [ 'src/scss/**/*.scss' ]
}

// Static Server + watching scss/html files
gulp.task('serve', ['styles'], function() {
    browserSync.init({
        server: "./src"
    });
});

// HTML Tasks
gulp.task('html', function(){
    return gulp.src(config.html)
          .pipe(browserSync.stream());
});
// Compile sass into CSS & auto-inject into browsers
gulp.task('styles', function() {
    return gulp.src(config.scss)
        .pipe(sass())
        .pipe(gulp.dest("src/assets/styles"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
  gulp.watch(config.scss, ['styles']);
  gulp.watch(config.html, ['html']);
});

gulp.task('default', ['serve', 'watch']);
