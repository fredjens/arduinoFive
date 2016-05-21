'use strict';

const gulp = require('gulp');
const starterGulp = require('starter-gulp');
const browserSync = require('starter-gulp').browserSync;
const config = require('starter-gulp').config;

starterGulp.extendTasks(gulp, {
    html: [
        [],
        function html() {
            return gulp.src('src/html/**/*')
            .pipe(gulp.dest('dist/'));
        },
    ],
    watch: [
        [],
        function watch() {
            gulp.watch('src/html/**/*', ['html']);
            gulp.watch(config.src.scss, ['sass']);
            gulp.watch(config.src.js, ['javascript']);
            gulp.watch(config.src.images, ['images']);
            gulp.watch(config.src.icons, ['inline-svg']);
            gulp.watch('dist/app/**/*').on('change', browserSync.reload);
        },
    ],
});
