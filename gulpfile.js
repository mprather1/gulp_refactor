var gulp       = require('gulp'),
    source     = require('vinyl-source-stream'),
    rename     = require('gulp-rename'),
    browserify = require('browserify'),
    glob       = require('glob'),
    es         = require('event-stream');
    jshint     = require('gulp-jshint');

gulp.task('default', ['watch']);

gulp.task('jshint', function(){
 return gulp.src('source/javascript/**/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('brwsrfy', function(done) {
    glob('./app/main-**.js', function(err, files) {
        if(err) done(err);

        var tasks = files.map(function(entry) {
            return browserify({ entries: [entry] })
                .bundle()
                .pipe(source(entry))
                .pipe(rename({
                    extname: '.bundle.js'
                }))
                .pipe(gulp.dest('./dist'));
            });
        es.merge(tasks).on('end', done);
    })
});

gulp.task('watch', function(){
 gulp.watch('app/**/*.js', ['jshint', 'brwsrfy']);
});