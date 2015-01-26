var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	reload      = browserSync.reload;

// Static server
gulp.task('serve', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch(['**/*.html'], reload);
    gulp.watch(['js/**/*.js'], reload);
    gulp.watch(['css/**/*.css'], reload);
});

gulp.task('watch', function(){

});

gulp.task('default', ['serve'] );