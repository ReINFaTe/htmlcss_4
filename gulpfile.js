var gulp    = require('gulp'),
    sass    = require('gulp-sass')(require('sass'));
 
var paths = {
  styles: {
    src: 'scss/*.scss',
    dest: '.'
  }
};
 
function styles() {
  return gulp
   .src(paths.styles.src, {
      sourcemaps: true
    })
    .pipe(sass())
.pipe(gulp.dest(paths.styles.dest));
}
 
function watch() {
  gulp.watch(paths.styles.src, styles);
}
 
var build = gulp.parallel(styles, watch);
 
gulp.task(build);
gulp.task('default', build);
