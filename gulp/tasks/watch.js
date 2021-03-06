// File is in charge of the gulp watch functionality
// Runs tasks during file changes

var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('watch', function() {
	
	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});
	
	watch('./app/index.html', function() {
		browserSync.reload();
		console.log("Hello there"); //Testing purposes for main index changes
	});

	watch('./app/*.html', function() {
		browserSync.reload();
		console.log("Not the home page"); //Testing purposes for other page changes
	});
	
	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('cssInject');
	})
	
});

gulp.task('cssInject', ['styles'], function() {
	return gulp.src('./app/temp/styles/styles.css')
		.pipe(browserSync.stream());
});

//----------------------------------------------------------------------------------------
