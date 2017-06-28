var gulp = require('gulp');
	sass = require('gulp-sass');
	uglify = require('gulp-uglify');
	rev = require('gulp-rev');
	revColletor = require('gulp-rev-collector');

var dirname = "./public/view/activities/ticketcp/m";

gulp.task('sass',function(){
	return gulp.src(dirname + '/sass/*.scss')
		.pipe(sass().on('error',sass.logError))
		.pipe(gulp.dest(dirname + '/css/'))
});

/*css 压缩*/
gulp.task('css-build',function(){
	return gulp.src(dirname + '/sass/*.scss')
		.pipe(sass({outputStyle:'compressed'}).on('error',sass.logError))//nested 继承,compact 紧凑,expanded 展开,compressed 压缩
		.pipe(rev())
		.pipe(gulp.dest(dirname + '/dist/css/'))
		.pipe(rev.manifest())
    	.pipe(gulp.dest(dirname + '/dist/rev/css'))
})
/*js压缩*/
gulp.task('js-build',function(){
	gulp.src(dirname + '/js/*.js')
		.pipe(uglify())
		.pipe(rev())
		.pipe(gulp.dest(dirname + '/dist/js/'))
		.pipe(rev.manifest())
    	.pipe(gulp.dest(dirname + '/dist/rev/js/'))
})
/*图片复制*/
gulp.task('images', function () {
    return gulp.src([dirname + '/img/**/'])
        .pipe(gulp.dest(dirname + '/dist/img/'))
})
/*版本控制*/
gulp.task('rev',['css-build','js-build','images'],function(){
	return gulp.src([dirname + '/dist/rev/**/*.json', dirname + '/*.html'])
		.pipe(revColletor({replaceReved: true}))
		.pipe(gulp.dest(dirname + '/dist/'))
})

/*npm script Api*/
gulp.task('watch',function(){
	gulp.watch(dirname + '/sass/*.scss',['sass']);
});
gulp.task('build',['rev']);
