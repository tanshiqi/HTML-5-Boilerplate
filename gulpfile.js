var gulp      = require('gulp'),
    rjs       = require('requirejs'),
    minifyCSS = require('gulp-minify-css');


gulp.task('cssBuild', function() {
    return gulp.src('./css/main.css')
        .pipe(minifyCSS({keepSpecialComments:0}))
        .pipe(gulp.dest('./dist/'));
});


gulp.task('rjsBuild', function() {
    return rjs.optimize({
        name: 'main',
        mainConfigFile: 'js/main.js',
        out: 'dist/main.js',
        preserveLicenseComments: false
    });
});


gulp.task('watch', function() {
    gulp.watch('js/**/*.js', ['rjsBuild']);
    gulp.watch('css/**/*.css', ['cssBuild']);
});


gulp.task('default', ['cssBuild', 'rjsBuild']);
gulp.task('live', ['watch', 'cssBuild', 'rjsBuild']);
