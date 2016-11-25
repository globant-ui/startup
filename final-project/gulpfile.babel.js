import babelify from 'babelify';
import browserify from 'browserify';
import browserSync from 'browser-sync';
import buffer from 'vinyl-buffer';
import concat from 'gulp-concat';
import { exec } from 'child_process';
import gulp from 'gulp';
import nodemon from 'gulp-nodemon';
import rimraf from 'rimraf';
import run from 'run-sequence';
import source from 'vinyl-source-stream';
import util from 'gulp-util';

let config = {
    build: './dist/',
    source: './source/',
	js: {
		main: './source/index.js',
		name: 'app.js',
		destination: './dist/',
		watch: [
			'source/**/*.js'
		]
	},
	html: {
		main: './source/index.html',
		name: 'index.html',
		destination: './dist/',
		watch: [
			'source/**/*.html'
		]
	},
	css: {
		main: './source/**/*.css',
		name: 'style.css',
		destination: './dist/',
		watch: [
			'source/**/*.css'
		]
	}
};

var handleError = function (error) {
    if (error) {
        util.log(error);
        this.emit('end');
    }
};

let tasks = [
    'build-js',
    'build-css',
    'build-html'
];

gulp.task('default', () => {
    run('clean', tasks, 'browser-sync');
});

gulp.task('clean', () => {
    rimraf(config.build, [], handleError);
});

gulp.task('build-html', () => {
    return gulp
        .src(config.html.main)
        .pipe(gulp.dest(config.html.destination));
});

gulp.task('watch-html', ['build-html'], browserSync.reload);

gulp.task('build-js', () => {
    return browserify(config.js.main, {debug: true})
        .transform('babelify', { presets: ['es2015', 'react'], sourceMaps: false })
        .bundle()
        .on('error', handleError)
        .pipe(source(config.js.name))
        .pipe(buffer())
        .pipe(gulp.dest(config.js.destination));
});

gulp.task('watch-js', ['build-js'], browserSync.reload);

gulp.task('build-css', function () {
  return gulp
    .src(config.css.main)
    .pipe(concat(config.css.name))
    .pipe(gulp.dest(config.css.destination));
});

gulp.task('watch-css', ['build-css'], browserSync.reload);

gulp.task('browser-sync', ['start-server'], () => {
	browserSync({
      port: 8082,
      proxy: 'http://localhost:8080'
	});

	gulp.watch(config.html.watch, ['watch-html']);
    gulp.watch(config.js.watch, ['watch-js']);
    gulp.watch(config.css.watch, ['watch-css']);
});

gulp.task('start-server', (cb) => {
    var called = false;

    return nodemon({
        ignore: [config.build, config.source],
        script: 'server.js'
    }).on('start', function () {
		if (!called) {
			called = true;
			cb();
		}
	});
});
