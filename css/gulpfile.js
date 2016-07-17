
// gulp and plugin includes
var
	bs = require('browser-sync').create(),
	del = require('del'),
	gulp = require('gulp'),
	pkg = require('./package.json'),
	plugins = require('gulp-load-plugins')({
		pattern: ['gulp-*', 'gulp.*', 'main-bower-files', 'run-sequence'],
		replaceString: /\bgulp[\-.]/
	}),

//global declarations

	dest =	'app/',
	source = 'src/',
	devBuild = false,
	gitBranch = 'master',

/**
 *
 * Dependency overrides
 * 
 */

	bowerOverrides = {
		js:{
			"gsap": {
				ignore: true
			},
			"utilLayer":{
				main: "utilLayer.js"
			}
		},
		vendor:{
			"gsap": {
				main: "./src/minified/TweenMax.min.js"
			},
			"utilLayer":{
				ignore: "true"
			}
		}
	};

/**
 * 
 * Styling-related config objs
 * 
 */
	images = {
		in: source + 'assets/images/**/*',
		out: dest + 'assets/images'
	},

	imguri = {
		in: source + 'assets/inline-image/*',
		out: source + 'assets/scss/images/',
		filename: '_datauri.scss',
		namespace: 'img'
	},

	svguri = {
		in: source + 'assets/svg/*',
		out: source + 'assets/scss/images/',
		filename: '_svguri.scss',
	},

	css = {
		in: source + 'asset/scss/noodletile.scss',
		watch: [source + 'assets/scss/**/*', '!' + imguri.out + imguri.filename],
		out: dest + 'assets/css/',
		compassOpts: {
			css: dest + 'assets/css/',
			require: ['compass-normalize'],
			sass: source + 'assets/scss',
			sourcemap: true,
			style: 'compressed'
		}
	},

/**
 *
 * Markup preprocessing config
 * 
 */

	hamlOpts = {
		in: source + 'views/*.haml',
		watch: source + 'views/**/*',
		out: dest,
		args: {
			escapeHtml: true,
			doubleQuoteAttributes: true,
			require: ['./src/functions/render.rb'], 
		},
		context: {
			devBuild: devBuild,
			gitBranch: gitBranch,
			author: pkg.author,
			version: pkg.version
		}
	},

/**
 *
 * Scripting-related config objs
 * 
 */

	js = {
		in: source + 'assets/scripts/**/*',
		out: dest + 'assets/js/',
		testfile: 'noodletile.js',
		filename: 'noodletile.min.js'
	},

/**
 *
 * Server config
 * 
 */

	syncOpts = {
		server: {
			baseDir: dest,
			index: 'index.html'
		},
		open: false,
		notify: true
	}

/**
 * 
 * 'clean' task nukes contents of output dir
 * 
 * */
gulp.task('clean', function(){
	del([
		dest + '*'
	]);
});

/**
 * 'git' task reads the checked out git branch
 *  of the project to determine the output style
 */
gulp.task('git', function(){
	var regex = /dev|test/gi,
		theBranch = plugins.git.revParse({args: '--abbrev-ref HEAD'}, function(err, branch){		
		
		devBuild = regex.test(branch);
		gitBranch = devBuild ? branch.match(regex)[0].toLowerCase() : branch;

		hamlOpts.context = {
			devBuild: devBuild,
			gitBranch: gitBranch
		};

		if(gitBranch !== 'master'){
			css.compassOpts.style = 'expanded';
		}

		console.log( pkg.name + ' ' + pkg.version + ', ' + gitBranch + ' build');

		plugins.runSequence(
			'compile',
			'watch'
		);
	});
});

//JS
gulp.task('js', function(){
	if(gitBranch === 'dev'){		
		return gulp.src(plugins.mainBowerFiles({overrides: bowerOverrides.js}).concat(js.in))
			.pipe(plugins.newer(js.out))
			.pipe(plugins.jshint())
			.pipe(plugins.jshint.reporter('default'))
			.pipe(plugins.jshint.reporter('fail'))
			.pipe(gulp.dest(js.out))
			.pipe(bs.stream());
	} else if(gitBranch === 'test'){
		return gulp.src(plugins.mainBowerFiles({overrides: bowerOverrides.js}).concat(js.in))
			.pipe(plugins.deporder())
			.pipe(plugins.concat(js.testfile))
			.pipe(gulp.dest(js.out))
			.pipe(bs.stream());
	}else {
		return gulp.src(plugins.mainBowerFiles({overrides: bowerOverrides.js}).concat(js.in))
			.pipe(plugins.deporder())
			.pipe(plugins.concat(js.filename))
			.pipe(plugins.size({title: 'JS in '}))
			.pipe(plugins.stripDebug())	
			.pipe(plugins.uglify())	
			.pipe(plugins.size({title: 'JS out '}))
			.pipe(gulp.dest(js.out))
			.pipe(bs.stream());
	}
});

gulp.task('vendor', function(){
	return gulp.src(plugins.mainBowerFiles({overrides: bowerOverrides.vendor}))
		.pipe(gulp.dest(js.out + 'vendor/'));
});

//SASS compilation
gulp.task('sass', ['imguri', 'svguri'], function(){
	return gulp.src(css.in)
		.pipe(plugins.compass(css.compassOpts))
		.on('error', function(e){
			console.log (e);
		});
});

//image optimization
gulp.task('images', function(){
	return gulp.src(images.in)
		.pipe(plugins.newer(images.out))
		.pipe(plugins.imagemin())
		.pipe(gulp.dest(images.out));
});

//inline image to css base64 URI conversion
gulp.task('imguri', function(){
	return gulp.src(imguri.in)
		.pipe(plugins.imagemin())
		.pipe(plugins.imacss(imguri.filename, imguri.namespace))
		.pipe(gulp.dest(imguri.out));
});

//inline svgs
gulp.task('svguri', function(){
	return gulp.src(svguri.in)
		.pipe(plugins.svgToCss(svguri.filename))
		.pipe(gulp.dest(svguri.out));
});

//Haml compilation
gulp.task('skywalker', function(){
	return gulp.src(hamlOpts.in)
		.pipe(plugins.preprocess({context: hamlOpts.context}))
		.pipe(plugins.rubyHaml(hamlOpts.args))
		.pipe(gulp.dest(hamlOpts.out))
		.pipe(bs.stream());
});

gulp.task('cssStream', function(){
	console.log('streamin');
});

gulp.task('watch', function(){
	//browsersync
	bs.init(syncOpts);
	
	//monitor sass changes
	gulp.watch([css.watch, imguri.in, svguri.in], ['sass']);
	//auto-inject workaround for bs.stream not working
	//properly with gulp-compass
	bs.watch(css.out + '*.css').on('change', bs.reload);
	
	//monitor haml changes
	gulp.watch(hamlOpts.watch, ['skywalker']);

	//monitor image changes
	gulp.watch(images.in, ['images'], bs.reload);

	//monitor js changes
	gulp.watch(js.in, ['js']);
	
});


gulp.task('compile', ['images', 'skywalker', 'sass', 'js', 'vendor']);


//default task

gulp.task('default', ['git']);