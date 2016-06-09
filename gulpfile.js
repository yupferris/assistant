const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const typescriptConfig = require('./tsconfig.json');

const srcDir = 'src';
const outDir = 'dist';
const appDir = 'app';
const libDir = 'lib';

gulp.task('clean', () => del(outDir));

gulp.task('compile', () => {
    return gulp
        .src(srcDir + '/' + appDir + '/**/*.ts')
        .pipe(typescript(typescriptConfig.compilerOptions))
        .pipe(gulp.dest(outDir + '/' + appDir));
});

gulp.task('copy-libs', () => {
    return gulp
        .src([
            'core-js/client/shim.min.js',
            'systemjs/dist/system-polyfills.js',
            'systemjs/dist/system.src.js',
            'reflect-metadata/Reflect.js',
            'rxjs/**',
            'zone.js/dist/**',
            '@angular/**'
        ], { cwd: 'node_modules/**' })
        .pipe(gulp.dest(outDir + '/' + libDir));
});

gulp.task('copy-assets', () => {
    return gulp
        .src(['src/**/*', '!**/*.ts'])
        .pipe(gulp.dest(outDir));
});

gulp.task('watch', () => {
    gulp.watch(['src/**/*'], ['compile']).on('change', (e) => {
        console.log('Source file ' + e.path + ' has been changed; compiling');
    });
});

gulp.task('build', ['compile', 'copy-libs', 'copy-assets']);
gulp.task('default', ['build']);
