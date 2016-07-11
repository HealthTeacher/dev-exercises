//Gulp config

// gulp and plugin includes
var
	gulp = require('gulp'),
	imagemin = require('gulp-imagemin'),
	newer = require('gulp-newer'),
	concat = require('gulp-concat'),
	preprocess = require('gulp-preprocess'),
	del = require('del'),
	pkg = require('./package.json'),
	size = require('gulp-size'),
	sass = require('gulp-ruby-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	imacss = require('gulp-imacss'),
	stripdebug = require('gulp-strip-debug'),
	uglify = require('gulp-uglify'),
	deporder = require('gulp-deporder'),
	jshint = require('gulp-jshint'),
	runSequence = require('run-sequence'),
	git = require('gulp-git'),
	bs = require('browser-sync').create(),
	compass = require('gulp-compass'),
	haml = require('gulp-ruby-haml'),
	svgcss = require('gulp-svg-to-css');



//global declarations

var
	source = 'src/',
	dest =	'app/',
	hamlOpts,
	js,
	images,
	imguri,
	css,
	sassOpts,
	gitBranch,
	devBuild,
	syncOpts;

//TASKS

gulp.task('initOpts', function(){
	/******************************************************************
		task sets init options once we're ready for them setting 
		these values was moved into a task in order to ensure we've 
		established the active git branch to determine output style
	*******************************************************************/
	hamlOpts = {
		in: source + 'views/*.haml',
		watch: source + 'views/**/*',
		out: dest,
		args: {
			escapeHtml: true,
			doubleQuoteAttributes: true,
			require: ['./src/functions/render.rb'], 
		}
	};

	js = {
		in: source + 'assets/scripts/**/*',
		out: dest + 'assets/js/',
		filename: 'noodletile.min.js'
	};

	images = {
		in: source + 'assets/images/**/*',
		out: dest + 'assets/images'
	};

	imguri = {
		in: source + 'assets/inline-image/*',
		out: source + 'assets/scss/images/',
		filename: '_datauri.scss',
		namespace: 'img'
	};

	svguri = {
		in: source + 'assets/svg/*',
		out: source + 'assets/scss/images/',
		filename: '_svguri.scss',
	};

	css = {
		in: source + 'asset/scss/noodletile.scss',
		watch: [source + 'assets/scss/**/*', '!' + imguri.out + imguri.filename],
		out: dest + 'assets/css/',
		sassOpts: {
			sourcemap: true
		},
		compassOpts: {
			css: dest + 'assets/css',
			sass: source + 'assets/scss',
			style: 'compressed',
			require: ['compass-normalize']
		}
	};

	syncOpts = {
		server: {
			baseDir: dest,
			index: 'index.html'
		},
		open: false,
		notify: true
	};
});

//get the current git branch and initialize the build system
gulp.task('git', function(){
	var theBranch = git.revParse({args: '--abbrev-ref HEAD'}, function(err, branch){		
		gitBranch = branch;
		devBuild = ((branch || 'dev').trim().toLowerCase() !== 'master');
		//show build type
		console.log( pkg.name + ' ' + pkg.version + ', ' + (gitBranch) + ' build');
		runSequence(
			'initOpts',
			'compile',
			'watch'
		);
	});
});


//clean build folder
gulp.task('clean', function(){
	del([
		dest + '*'
	]);
});

//JS
gulp.task('js', function(){
	if(devBuild && gitBranch === 'dev'){		
		return gulp.src(js.in)
			.pipe(newer(js.out))
			.pipe(jshint())
			.pipe(jshint.reporter('default'))
			.pipe(jshint.reporter('fail'))
			.pipe(gulp.dest(js.out))
			.pipe(bs.stream());
	} else if(devBuild && gitBranch === 'test'){
		del([
			dest + 'js/*'
		]);
		return gulp.src(js.in)
			.pipe(deporder())
			.pipe(concat(js.filename))
			.pipe(gulp.dest(js.out));
	}else {
		del([
			dest + 'js/*'
		]);
		return gulp.src(js.in)
			.pipe(deporder())
			.pipe(concat(js.filename))
			.pipe(size({title: 'JS in '}))
			.pipe(stripdebug())	
			.pipe(uglify())	
			.pipe(size({title: 'JS out '}))
			.pipe(gulp.dest(js.out));
	}
});

//SASS compilation
gulp.task('sass', ['imguri', 'svguri'], function(){
	return gulp.src(css.in)
		.pipe(compass(css.compassOpts))
		.on('error', sass.logError)
    	.pipe(gulp.dest(css.out))
    	.pipe(bs.stream({match: '**/*.css'}));
});

//image optimization
gulp.task('images', function(){
	return gulp.src(images.in)
		.pipe(newer(images.out))
		.pipe(imagemin())
		.pipe(gulp.dest(images.out));
});

//inline image to css base64 URI conversion
gulp.task('imguri', function(){
	return gulp.src(imguri.in)
		.pipe(imagemin())
		.pipe(imacss(imguri.filename, imguri.namespace))
		.pipe(gulp.dest(imguri.out));
});

//inline svgs
gulp.task('svguri', function(){
	return gulp.src(svguri.in)
		.pipe(svgcss(svguri.filename))
		.pipe(gulp.dest(svguri.out));
});

//Haml compilation
gulp.task('skywalker', function(){
	gulp.src(hamlOpts.in)
		.pipe(haml(hamlOpts.args))
		.pipe(gulp.dest(hamlOpts.out))
		.pipe(bs.stream());
});

gulp.task('watch', function(){
	//browsersync
	bs.init(syncOpts);
	
	//monitor haml changes
	gulp.watch(hamlOpts.watch, ['skywalker']);

	//monitor image changes
	gulp.watch(images.in, ['images']);

	//monitor sass changes
	gulp.watch([css.watch, imguri.in, svguri.in], ['sass']);

	//monitor js changes
	gulp.watch(js.in, ['js'], bs.reload);
	
});


gulp.task('compile', ['images', 'skywalker', 'sass', 'js']);


//default task

gulp.task('default', ['git']);