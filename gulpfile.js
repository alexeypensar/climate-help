const gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify-es').default;

// перемещаем файлы в src
gulp.task('moveFiles', async () => {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
    gulp.src('src/*.png')
        .pipe(gulp.dest('dist'));
    gulp.src('src/*.ico')
        .pipe(gulp.dest('dist'));
    gulp.src('src/mail/*.php')
        .pipe(gulp.dest('dist/mail'));
    gulp.src('src/styles/reset.css')
        .pipe(gulp.dest('dist/styles'));
    gulp.src('src/styles/fonts/*')
        .pipe(gulp.dest('dist/styles/fonts'));
    gulp.src('src/prices/*')
        .pipe(gulp.dest('dist/prices'));
    gulp.src('src/js/*')
        .pipe(gulp.dest('dist/js'));
});

// сжимаем изображения
gulp.task('imagemin', () => {
    return gulp.src('src/img/**')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

// gulp.task('imagemin', () => {
//     return gulp.src('src/img/*/*/*.{png,jpg,jpeg,gif,svg}*')
//         .pipe(imagemin())
//         .pipe(gulp.dest('dist/img'));
// });
//
// gulp.task('imagemin', () => {
//     return gulp.src('src/img/*.{png,jpg,jpeg,gif,svg}*')
//         .pipe(imagemin())
//         .pipe(gulp.dest('dist/img'));
// });

// stylus в css
gulp.task('stylus', done => {
    return gulp.src('src/styles/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('dist/styles'));
    done();

});

// автопрефиксер
gulp.task('autoprefixer', done => {
    gulp.src('dist/styles/*.css')
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/styles'));
    done();
    }

);

// чистим css
gulp.task('cleanCSS', done => {
    return gulp.src('dist/styles/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/styles'));
    done();
});

// прогоняем js через babel
gulp.task('babel', done => {
    gulp.src('dist/js/script.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dist/js'));
    done();
    }

);

// сжимаем js через uglify
gulp.task('uglify', done => {
    return gulp.src('dist/js/script.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
    done();
});





// gulp: в продакшн, папка dist
gulp.task('production', gulp.series('imagemin', 'moveFiles','stylus', 'autoprefixer', 'cleanCSS', 'babel', 'uglify'));
