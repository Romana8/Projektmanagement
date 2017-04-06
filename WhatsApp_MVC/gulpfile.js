/**
 * Created by admin on 4/6/2017.
 */
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');

gulp.task('jshint', function(){
    gulp.src('./src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('scripts', function () {
    gulp.src('./src/js/*.js')
        .pipe(stripDebug())
        .pipe(uglify())
        .pipe(gulp.dest('./build/js/'));
});

gulp.task('default', ['scripts'])