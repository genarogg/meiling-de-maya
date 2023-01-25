const gulp = require('gulp');
var ejs = require("gulp-ejs")



gulp.task('tareas', function () {
    gulp.src("./views/*.ejs")
        .pipe(ejs({
            msg: "Hello Gulp!"
        }))
        .pipe(gulp.dest("./dist"))
})