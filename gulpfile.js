/* eslint-env node */
var gulp,
    eslint,
    files;

gulp = require("gulp");
eslint = require("gulp-eslint");

files = {
    src: ["lib/**/*"],
    test: ["test/*"]
};

gulp.task("lint", function () {
    return gulp.src([].concat(files.src, files.test))
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task("default", ["lint"], function () {
});
