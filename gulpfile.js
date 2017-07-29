var gulp = require('gulp');
var replace = require('replace');
var replaceFiles = ['./src/app/global.ts'];

gulp.task('add-proxy', function() {
  return replace({
    regex: "http://app.campusuniversitario.net/api/v1/",
    replacement: "http://localhost:8100/api/",
    paths: replaceFiles,
    recursive: false,
    silent: false,
  });
})

gulp.task('remove-proxy', function() {
  return replace({
    regex: "http://localhost:8100/api/",
    replacement: "http://app.campusuniversitario.net/api/v1/",
    paths: replaceFiles,
    recursive: false,
    silent: false,
  });
})