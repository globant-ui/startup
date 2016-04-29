'use strict';

process.env.NODE_PATH = __dirname;

let gulp = require('gulp');
let sourcemaps = require('gulp-sourcemaps');
let source = require('vinyl-source-stream');
let buffer = require('vinyl-buffer');
let browserify = require('browserify');
let babelify = require('babelify');
let watchify = require('watchify');

let compile = function (watch) {
    var bundler = watchify(browserify('js/main.js', { debug: true })
        .transform(babelify, {
            presets: ['es2015']
        }));

    function rebundle() {
        bundler.bundle()
            .on('error', (err) => {
                console.error(err);
                this.emit('end');
            })
            .pipe(source('build.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('dist'));
    }

    if (watch) {
        bundler.on('update', function() {
            console.log('-> bundling...');
            rebundle();
        });
    }

    rebundle();
};

let watch = function () {
    return compile(true);
};

gulp.task('default', ['watch']);
gulp.task('build', () => { return compile(); });
gulp.task('watch', () => { return watch(); });
