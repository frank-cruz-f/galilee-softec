//Gulp configuration file
var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var obfuscate = require('gulp-obfuscate');

//Takes all the react files (.jsx) wrap it together and transpile it to es5 code
gulp.task('build', function () {
    return browserify({entries: './components/app.jsx', extensions: ['.jsx'], debug: true})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle.js'))        
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['build'], function () {
    gulp.watch('components/*.jsx', ['build']);
});

gulp.task('default', ['watch']);