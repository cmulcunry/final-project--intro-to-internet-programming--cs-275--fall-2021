const { src, dest, series, watch } = require(`gulp`);
const htmlValidator = require(`gulp-html`);
const htmlCompressor = require(`gulp-htmlmin`);
const babel = require(`gulp-babel`);
const jsLinter = require(`gulp-eslint`);
const cssLinter = require(`gulp-stylelint`);
const cssCompressor = require(`gulp-uglifycss`)
const browserSync = require(`browser-sync`);
const jsCompressor = require(`gulp-uglify`);
const imageCompressor = require(`gulp-imagemin`);
const reload = browserSync.reload;
let browserChoice = `default`;

let validateHTML = () => {
    return src([`html/*.html`, `html/**/*.html`]).pipe(htmlValidator());
};

let compressHTML = () => {
    return src([`html/*.html`,`html/**/*.html`])
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod`));
};

let transpileJSForDev = () => {
    return src(`js/*.js`)
        .pipe(babel())
        .pipe(dest(`temp/scripts`));
};

let transpileJSForProd = () => {
    return src(`js/*.js`)
        .pipe(babel())
        .pipe(jsCompressor())
        .pipe(dest(`prod/scripts`));
};

let compileCSSForProd = () => {
    return src(`css/*.css`)
        .pipe(cssCompressor())
        .pipe(dest(`prod/styles`));
};

let lintJS = () => {
  return src(`js/*.js`)
        .pipe(jsLinter({
          parserOptions: {
            ecmaVersion: 2018,
            sourceType: `module`
          },
          rules: {
            'no-console': 0,
            'no-debugger': 0,
            indent: [2, 4, {SwitchCase: 1}],
            quotes: [2, 'backtick'],
            'linebreak-style': 0, //changed to remove "Expected linebreaks to be 'LF' but found 'CRLF' linebreak-style" error
            semi: [2, 'always'],
            'max-len': [2, 85, 4]
          },
          env: {
            es6: true,
            node: true,
            browser: true
          },
          extends: `eslint:recommended`
      }))
      .pipe(jsLinter.formatEach(`compact`, process.stderr));
};

let lintCSS = () => {
  return src(`css/*.css`)
        .pipe(cssLinter({
            failAfterError: false,
            reporters: [
              {formatter: "string", console: true}
            ]
      }));
};

let compressImages = () => {
    return src(`img/**/*`)
        .pipe(imageCompressor({
            optipng: ['-i 1', '-strip all', '-fix', '-o7', '-force'],
            pngquant: ['--speed=1', '--force', 256],
            zopflipng: ['-y', '--lossy_8bit', '--lossy_transparent'],
            jpegRecompress: ['--strip', '--quality', 'medium', '--min', 40, '--max', 80],
            mozjpeg: ['-optimize', '-progressive'],
            gifsicle: ['--optimize'],
            svgo: ['--enable', 'cleanupIDs', '--disable', 'convertColors'],
            quiet: false
        }))
        .pipe(dest(`prod/img`));
};

let serve = () => {
    browserSync({
        notify: true,
        port: 9000,
        reloadDelay: 50,
        browser: browserChoice,
        server: {
            baseDir: [
                `./`,
                `.html`,
                `temp`
            ]
        }
    });

    watch(`js/*.js`,
        series(lintJS, transpileJSForDev)
    ).on(`change`, reload);

    watch(`css/*css`,
        series(lintCSS)
    ).on(`change`, reload);

    watch(`html/*.html`,
        series(validateHTML)
    ).on(`change`, reload);
};

exports.validateHTML = validateHTML;
exports.compressHTML = compressHTML;
exports.HTMLProcessing = series(validateHTML, compressHTML);
exports.lintJS = lintJS;
exports.lintCSS = lintCSS;
exports.transpileJSForDev = transpileJSForDev
exports.transpileJSForProd = transpileJSForProd;
exports.compileCSSForProd = compileCSSForProd;
exports.serve = series(lintCSS, lintJS, transpileJSForDev, validateHTML, serve);
exports.build = series(compressHTML, transpileJSForProd, compileCSSForProd, compressImages);
