// Include Gulp
var gulp = require('gulp');

// Include Plugins
var browserSync = require('browser-sync').create();
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');

// Init BrowserSync
gulp.task('browserSync', function() {
    browserSync.init({ server: { baseDir: './' } }); // browser-sync doesn't work without this (in my computer)
});

// Compile Sass
gulp.task('sass', function() {
    return gulp.src('css/scss/main.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(rename('custom.min.css'))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({ stream: true }));
});

// Lint JS
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint({ esversion: 6 }))
        .pipe(jshint.reporter('default'));
});

// Minify JS
gulp.task('minify', function() {
    return gulp.src('js/*.js')
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(uglify().on('error', function(err) { console.log(err.toString()); }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('js/min'));
});

// Watch Files For Changes
gulp.task('watch', ['browserSync', 'sass', 'lint', 'minify'], function() {
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('css/scss/**/*.scss', ['sass', browserSync.reload]);
    gulp.watch('js/*.js', ['lint', 'minify', browserSync.reload]);
});

// Default Task
gulp.task('default', ['watch']);
