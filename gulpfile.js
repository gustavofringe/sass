var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('./projectAirbnb/style.scss')
  .pipe(sass())
  .pipe(gulp.dest('../Sites/Lab/projectAirbnb/css'));
});
gulp.task('default', function(){
  gulp.watch('./projectAirbnb/style.scss',['sass']);
});
