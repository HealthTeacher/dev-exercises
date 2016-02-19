'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    svgspritesheet = require('./gulp-svg-spritesheet'),
    svgmin = require('gulp-svgmin'),
    inquirer = require('inquirer'),
    cheerio = require('gulp-cheerio');

gulp.task('sass', function () {
  return gulp.src('./src/assets/styles/sass/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./src/assets/styles/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/assets/styles/sass/*.scss', ['sass']);
});

//spriteify svgs

var prepareSVG = function ($, file, done){
    var svgFile = file.relative.slice(0,-4);
    $('svg').attr('id', svgFile).html();
    done();
};

var prepareSprite = function ($, file, done){

$('svg')
    .removeAttr('width')
    .removeAttr('height')
    .removeAttr('x')
    .removeAttr('y')
    .removeAttr('enable-background')
    .attr('preserveAspectRatio', 'xMidYMid meet');

$('svg svg').each( function(i, elem){
    elem.name = 'symbol';
});


$.html();

done();
};

gulp.task('spriteify:svg', false, function (done) {
gulp.src('src/assets/images/*.svg')
.pipe(svgspritesheet({
    cssPathSvg: 'src/assets/images/spritesheet/sprite.svg',
    padding: 2,
    pixelBase: 10,
    positioning: 'packed',
    templateSrc: 'gulp-svg-spritesheet/template.tpl',
    templateDest: 'src/assets/styles/sass/components/_sprite.scss',
    units: 'em'
}))
.pipe( gulp.dest('src/assets/images/spritesheet/sprite.svg'))
.on('finish', function(){ done(); });
});

gulp.task('optimize:svg',  false, function (done) {
  gulp.src('src/assets/images/*.svg')
  .pipe(cheerio({
    run: prepareSVG,
    parserOptions: {
      xmlMode: true
    }
  }))
  .pipe( gulp.dest('src/assets/images/'))
  .on('finish', function(){ done(); });
});


gulp.task('optimize:sprite', false, function( done ) {
gulp.src( 'src/assets/images/spritesheet/sprite.svg' )
    .pipe(cheerio({
        run: prepareSprite,
        parserOptions: {
          xmlMode: true
        }
    }))
    .pipe(svgmin({
        plugins: [
        // SVGMINptimizer Plugin list
        // https://github.com/svg/svgo/tree/master/plugins
        {cleanupAttrs: true},
        {cleanupEnableBackground: true},
        {cleanupIDs: false},
        {cleanupListOfValues: false},
        {cleanupNumericValues: true},
        {collapseGroups: true},
        {convertColors: true},
        {convertPathData: false},
        {convertShapeToPath: true},
        {convertStyleToAttrs: true},
        {convertTransform: false},
        {mergePaths: true},
        {moveElemsAttrsToGroup: true},
        {moveGroupAttrsToElems: false},
        {removeComments: true},
        {removeDesc: false},
        {removeDoctype: true},
        {removeEditorsNSData: true},
        {removeEmptyAttrs: true},
        {removeEmptyContainers: true},
        {removeEmptyText: true},
        {removeHiddenElems: false},
        {removeMetadata: true},
        {removeNonInheritableGroupAttrs: true},
        {removeRasterImages: true},
        {removeTitle: false},
        {removeUnknownsAndDefaults: true},
        {removeUnusedNS: true},
        {removeUselessStrokeAndFill: true},
        {removeViewBox: false},
        {removeXMLProcInst: true},
        {sortAttr: true},
        {transformsWithOnePath: false}
        ]
    }))
    .pipe(gulp.dest( 'src/assets/images/spritesheet/' ))
    .on('finish', function(){ done(); });
});
