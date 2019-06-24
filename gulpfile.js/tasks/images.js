// dependencies --------------------

// dependencies: gulp
const gulp = require('gulp');

// dependencies: utils
const imagemin = require('gulp-imagemin');



// tasks --------------------

// tasks: images
gulp.task('images', function() {
  console.log(' -> "images" task running...');

  return gulp.src(`${global.var.project.assets.src}${global.var.project.assets.images}/**/*.+(jpeg|jpg|png|gif|svg)`)
    .pipe(imagemin())
    .pipe(gulp.dest(`${global.var.project.assets.dest}${global.var.project.assets.images}`))
});
