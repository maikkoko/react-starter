var gulp = require('gulp');
var path = require('path');
var nodemon = require('gulp-nodemon');
var del = require('del');
var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');

/**
 * Build Files
 */

gulp.task('clean:build', function() {
    del('./public/js/*')
})

gulp.task('build', ['clean:build'], function() {
  return gulp.src('./app/app.js')
    .pipe(webpack(webpackConfig))
    .on('error', function handleError() {
      this.emit('end'); // Recover from errors
    })
    .pipe(gulp.dest('./'));
});

gulp.task('watch:build', function() {
  return gulp.watch('./app/**/*', ['build']);
});

/**
 * Start Server
 */

gulp.task('start', function(done) {
  var babelPath = path.join(__dirname, 'node_modules/.bin/babel-node');
  nodemon({
    exec: babelPath + ' ./server.js',
    watch: ['server.js'],
    ext: 'js html'
  });
});

gulp.task('watch', ['build', 'watch:build']);
gulp.task('default', ['start']);
