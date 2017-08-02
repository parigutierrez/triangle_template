var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');

gulp.task('jade', function(){
    gulp.src('./src/*.jade')
    .pipe(jade({
        pretty: true
    }))
    .pipe(gulp.dest('./public'))
})

gulp.task('watch', function(){
    gulp.watch('./src/*.jade', ['jade'])
});

gulp.task('CSS', function(){
	gulp.src('./src/scss/*.scss')
	.pipe(gulp.dest('public/css/'))
});
gulp.task('default', ['jade', 'watch','CSS']);
