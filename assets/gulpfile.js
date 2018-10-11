// Require gulp packages
var gulp = require('gulp')
var sass = require('gulp-sass')
var js = require('gulp-uglify')
var imagemin = require('gulp-imagemin')

// Task 1 - Compile and minify Sass
gulp.task('sass', function() {
  return gulp
    .src('./sass/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./css'))
})

// Task 2 - Minify JS
gulp.task('js', function() {
  return gulp
    .src('./js/*.js')
    .pipe(js())
    .pipe(gulp.dest('./js/min'))
})

// Task 3 - Optimise images
gulp.task('imagemin', function() {
  gulp
    .src('./images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./images'))
})

// Default Gulp tasks
gulp.task('default', ['sass', 'js', 'imagemin'])
