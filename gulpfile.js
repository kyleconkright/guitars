var gulp = require('gulp'),
	sass = require('gulp-ruby-sass');

gulp.task('default', ['watch']);

gulp.task('watch', function(){
	gulp.watch('css/*.scss',['style']);
});

gulp.task('style', function(){
	return sass('css/*.scss')
		.pipe(gulp.dest('css/'));
})