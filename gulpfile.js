// module
var gulp        = require('gulp'),
    aglio       = require('gulp-aglio'),
    rename      = require('gulp-rename'),
    browserSync = require('browser-sync'),
    ejs         = require('gulp-ejs');

// 定数
var PUBLISHED_DIR  = 'dist',
    TEMPLATE_FILES = ['apidoc/**/*.md'],
    LAYOUT_FILE    = 'apidoc/layout.md';

// browserSync
var reload = browserSync.reload;

gulp.task('combine', function () {
  return gulp.src(LAYOUT_FILE)
    .pipe(ejs({}, { ext: '.md' }))
    .pipe(rename('index.md'))
    .pipe(gulp.dest(PUBLISHED_DIR));
});

gulp.task('generate-api-doc', ['combine'], function () {
  return gulp.src(PUBLISHED_DIR + '/index.md')
    .pipe(aglio({ template: 'default' }))
    .pipe(gulp.dest(PUBLISHED_DIR));
});

gulp.task('watch', function () {
  gulp.watch(TEMPLATE_FILES, ['generate-api-doc', reload])
});

gulp.task('browserSync', function () {
  browserSync({
    logConnections: true,
    logFileChanges: true,
    notify: true,
    port: 3000,
    open: false,
    server: {
      baseDir: PUBLISHED_DIR
    }
  });
});

gulp.task('default', ['generate-api-doc', 'watch', 'browserSync']);