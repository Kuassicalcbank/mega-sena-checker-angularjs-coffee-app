const gulp = require('gulp');
const coffee = require('gulp-coffee');
//const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));
const del = require('del'); 

// Tarefa para limpar os arquivos compilados
gulp.task('clean', function() {
    return del(['app/js/**/*', 'app/css/**/*']);
});

gulp.task('sass', function() {
    return gulp.src('./app/sass/**/*.scss')
        //.pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        //.pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./app/css'));
});

gulp.task('coffee', function() {
    return gulp.src('./app/coffee/**/*.coffee')
       // .pipe(sourcemaps.init())
        .pipe(coffee({bare: true}).on('error', console.error.bind(console)))
        //.pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./app/js'));
});

gulp.task('watch', function() {
    gulp.watch('./app/sass/**/*.scss', gulp.series('sass'));
    gulp.watch('./app/coffee/**/*.coffee', gulp.series('coffee'));
});

gulp.task('default', gulp.series('clean', 'sass', 'coffee', 'watch'));
