'use strict'

// modules
const fs = require('fs')
const gulp = require('gulp')
const rename = require('gulp-rename')
const concat = require('gulp-concat')
const browserSync = require('browser-sync')
// style
const sass = require('gulp-sass')(require('sass'))
const cssnano = require('gulp-cssnano')
const csso = require('gulp-csso')
const rcs = require('gulp-rcs')
// tailwindcss
const postcss = require('gulp-postcss')
const autoprefixer = require('gulp-autoprefixer')
const tailwindcss = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')
// js
const uglify = require('gulp-uglify-es').default
// images
const imagemin = require('gulp-imagemin')
const webp = require('imagemin-webp')
// pages
const htmlmin = require('gulp-htmlmin')
// const validator = require('gulp-html')
// doc
const jsdoc = require('gulp-jsdoc3')
// zip
const zip = require('gulp-zip')

// constantes
const { mozjpeg } = imagemin
const VERSION = require('./package.json').version
const WEBP_QUALITY = 90
const JPEG_QUALITY = 90

// paths
const paths = {
  pages: {
    watch: ['./pages/*.html'],
    src: ['./pages/*.html'],
    dest: './www/'
  },
  scripts: {
    watch: './js/**/*.js',
    src: ['./js/main.js'],
    dest: './www/js/'
  },
  styles: {
    watch: './sass/**/*.sass',
    src: './sass/main.sass',
    dest: './www/css/'
  },
  css: {
    src: ['./www/css/tailwind.css', './www/css/main.css'],
    dest: './www/css/'
  },
  tailwind: {
    watch: [
      './tailwind.css',
      './tailwind.config.js',
      './www/**/*.html',
      './www/**/*.js'
    ],
    src: './tailwind.css',
    dest: './www/css/'
  },
  images: {
    watch: './img/**/*.{png,jpg,jpeg}',
    src: './img/**/*.{png,jpg,jpeg}',
    dest: './www/img/'
  },
  static: {
    watch: './static/**/*',
    src: './static/**/*',
    dest: './www/'
  },
  serve: {
    watch: ['./www/*.html', './www/css/*.css', './www/js/*.js'],
    src: './www/'
  },
  zip: {
    src: './www/**',
    dest: './zip/'
  }
}

// tasks
function html_task() {
  return (
    gulp
      .src(paths.pages.src)
      .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
      // .pipe(validator({ verbose: true }))
      .pipe(gulp.dest(paths.pages.dest))
  )
}
function js_task() {
  return gulp
    .src(paths.scripts.src)
    .pipe(
      uglify({
        mangle: true
      })
    )
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest(paths.scripts.dest))
}
function sass_task() {
  return gulp
    .src(paths.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.styles.dest))
}
function tailwind_task() {
  return gulp
    .src(paths.tailwind.src)
    .pipe(
      postcss([
        tailwindcss('./tailwind.config.js'),
        purgecss({
          content: ['./www/**/*.html', './www/**/*.js'],
          whitelist: ['opacity-0'],
          defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || []
        })
      ])
    )
    .pipe(concat('tailwind.css'))
    .pipe(gulp.dest(paths.tailwind.dest))
}
function css_task() {
  return gulp
    .src(paths.css.src)
    .pipe(concat('main.min.css'))
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(cssnano({ discardComments: { removeAll: true } }))
    .pipe(gulp.dest(paths.css.dest))
}
function rename_task() {
  return gulp
    .src([
      paths.css.dest + 'main.min.css',
      paths.pages.dest + 'index.html',
      paths.scripts.dest + 'main.min.js'
    ])
    .pipe(rcs())
    .pipe(gulp.dest('./www'))
}
function clean_task(done) {
  fs.unlink(paths.css.dest + 'main.css', () => {
    fs.unlink(paths.css.dest + 'tailwind.css', () => {
      fs.unlink(paths.css.dest + 'main.min.css', () => {
        fs.unlink(paths.scripts.dest + 'main.min.js', () => {
          fs.rename(
            paths.serve.src + 'main.min.css',
            paths.css.dest + 'main.min.css',
            () => {
              fs.rename(
                paths.serve.src + 'main.min.js',
                paths.scripts.dest + 'main.min.js',
                done
              )
            }
          )
        })
      })
    })
  })
}
function webp_task() {
  return gulp
    .src(paths.images.src)
    .pipe(imagemin([webp({ quality: WEBP_QUALITY })]))
    .pipe(rename({ extname: '.webp' }))
    .pipe(gulp.dest(paths.images.dest))
}
function jpeg_task() {
  return gulp
    .src(paths.images.src)
    .pipe(imagemin([mozjpeg({ quality: JPEG_QUALITY, progressive: true })]))
    .pipe(gulp.dest(paths.images.dest))
}
function static_task() {
  return gulp.src(paths.static.src).pipe(gulp.dest(paths.static.dest))
}
function doc_task(done) {
  gulp.src(['README.md', paths.scripts.watch], { read: false }).pipe(
    jsdoc(
      {
        opts: {
          template: './node_modules/jaguarjs-jsdoc',
          destination: './docs'
        }
      },
      done
    )
  )
}
function zip_task() {
  return gulp
    .src(paths.zip.src)
    .pipe(zip(`paroles-de-vie-${VERSION}.zip`))
    .pipe(gulp.dest(paths.zip.dest))
}
function serve() {
  browserSync({
    server: paths.serve.src,
    files: paths.serve.watch
  })
}
function watch() {
  gulp.watch(paths.static.watch, static_task)
  gulp.watch(paths.pages.watch, html_task)
  gulp.watch(paths.scripts.watch, js_task)
  gulp.watch(paths.tailwind.watch, gulp.series(tailwind_task, css_task))
  gulp.watch(paths.styles.watch, gulp.series(sass_task, css_task))
  gulp.watch(paths.images.watch, gulp.parallel(jpeg_task, webp_task))
}
const build = gulp.series(
  html_task,
  gulp.parallel(
    static_task,
    sass_task,
    tailwind_task,
    js_task,
    jpeg_task,
    webp_task
  ),
  css_task
)

// exports
exports.html = html_task
exports.rename = rename_task
exports.clean = clean_task
exports.js = js_task
exports.sass = sass_task
exports.tailwind = tailwind_task
exports.style = gulp.series(gulp.parallel(sass_task, tailwind_task), css_task)
exports.webp = webp_task
exports.jpeg = jpeg_task
exports.image = gulp.parallel(jpeg_task, webp_task)
exports.static = static_task
exports.doc = doc_task
exports.zip = zip_task
exports.serve = serve
exports.dev = gulp.series(build, watch)
exports.watch = watch
exports.default = exports.build = gulp.series(
  build,
  rename_task,
  clean_task,
  zip_task
)
