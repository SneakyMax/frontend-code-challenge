var config = {
    jade_path: "node_modules/.bin/jade-amd",

    karma_conf_path: "tests/karma.conf.js",
    karma_path: "node_modules/.bin/karma",

    sass_path: "node_modules/.bin/node-sass",
    sass_src_path: "public/stylesheets/main.scss",
    sass_dst_path: "public/stylesheets/",

    server_path: "app/server.js",

    vendor_path: "public/js/vendor",
    vendor_files: [
        "node_modules/backbone/backbone.js",
        "node_modules/backbone.marionette/lib/backbone.marionette.js",
        "node_modules/jquery/dist/jquery.js",
        "node_modules/requirejs/require.js",
        "node_modules/spin/dist/spin.js",
        "node_modules/underscore/underscore.js"
    ]
};

var gulp = require("gulp");
var del = require("del");
var shell = require("gulp-shell");
var wrapAmd = require("gulp-wrap-amd");
var rename = require("gulp-rename");
var jade = require("gulp-jade");
var flatten = require("gulp-flatten");
var sass = require("gulp-sass");
var KarmaServer = require("karma").Server;

gulp.task("default", ["build"]);
gulp.task("all", ["default"]);

gulp.task("build", ["vendor", "jade", "sass"]);

gulp.task("clean", () => {
    return del([
        "public/js/**/*.tpl.js",
        "public/js/vendor",
        "public/stylesheets/main.css"
    ]);
});

gulp.task("distclean", ["clean"], () => {
    return del([
        "node_modules"
    ]);
});

gulp.task("jade", ["jade-templates", "jade-runtime"]);

gulp.task("jade-templates", ["clean"], () => {
    return gulp.src("public/js/**/*.tpl.jade")
        .pipe(jade({ client: true }))
        .pipe(wrapAmd())
        .pipe(gulp.dest("public/js"));
});

gulp.task("jade-runtime", ["clean"], () => {
    return gulp.src("node_modules/jade/runtime.js")
        .pipe(wrapAmd())
        .pipe(rename("jade_runtime.js"))
        .pipe(gulp.dest(config.vendor_path));
});

gulp.task("vendor", ["vendor-copy"]);

gulp.task("vendor-copy", ["clean"], () => {
    return gulp.src(config.vendor_files)
        .pipe(flatten())
        .pipe(gulp.dest(config.vendor_path));
});

gulp.task("sass", ["clean"], () => {
    return gulp.src(config.sass_src_path)
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(gulp.dest(config.sass_dst_path));
});

gulp.task("server", shell.task([`node ${config.server_path}`]));

gulp.task("test", (done) => {
    // Per https://github.com/karma-runner/gulp-karma
    new KarmaServer({
        configFile: `${__dirname}/${config.karma_conf_path}`,
        singleRun: true
    }, done).start();
});