/** ============================================================================
 * Author: Sam Rankin (samrankin.dev@gmail.com)
 * -----
 * Created Date:  1-16-19
 * Last Modified: 6-27-19 at 11:14 am
 * Modified By:   Sam Rankin <samrankin.dev@gmail.com>
 * -----
 ** Implements:
 *   1. Live reloads browser with BrowserSync.
 *   2. CSS: Sass to CSS conversion, error catching, Autoprefixing, Sourcemaps,
 *      CSS minification, and Merge Media Queries.
 *   3. JS: Concatenates & uglifies Vendor and Custom JS files.
 *   4. Images: Minifies PNG, JPEG, GIF and SVG images.
 *   5. Watches files for changes in CSS or JS.
 *   6. Watches files for changes in PHP.
 *   7. Corrects the line endings.
 *   8. InjectCSS instead of browser page reload.
============================================================================= */

// ========================================================================== //
// ============================= SECTION: Global ============================ //
// ========================================================================== //

    // --------------------------- SECTION: Config -------------------------- //

        // ====================== SECTION: Environment ====================== //

            const
                pkg      = require('./package.json'),
                gulpEnv  = pkg.env,
                gulpSlug = pkg.name + '-',
                theme    = require('./theme-config.json');

            let gulpUrl;

            const
                devUrl   = pkg.urls.dev,
                stageUrl = pkg.urls.stage,
                prodUrl  = pkg.urls.prod;
            let isProd   = false;

            if (gulpEnv === 'prod') {
                gulpUrl = prodUrl;
                isProd = true;
            } else if (gulpEnv === 'stage') {
                gulpUrl = stageUrl;
            } else {
                gulpUrl = devUrl;
            }

        // !SECTION: Environment

        // ===================== SECTION: Plugin Config ===================== //

            const
                globalNode   = pkg.globalNode,
                modernizrpkg = pkg.modernizr,
                babelConfig  = pkg.babelConfig,
                jshintConfig = pkg.jshintConfig;

        // !SECTION: Plugin Config

        // ========================= SECTION: Paths ========================= //

            const
                paths            = pkg.paths,
                fontsPath        = paths.fonts,
                adminPath        = paths.admin,
                componentsPath   = paths.components,
                stylesBuildPath  = paths.build.styles,
                scriptsBuildPath = paths.build.scripts,
                stylesDistPath   = paths.dist.styles,
                scriptsDistPath  = paths.dist.scripts,
                imagesDistPath   = paths.dist.images;

        // !SECTION: Paths

        // ========================= SECTION: Files ========================= //

            const
                input              = pkg.inputFiles,
                mainSassFiles      = input.sass.main,
                componentSassFiles = input.sass.components,
                adminSassFiles     = input.sass.admin,
                mainJSFiles        = input.js.main,
                adminJSFiles       = input.js.admin,
                componentJSFiles   = input.js.components,
                vendorJSFiles      = input.js.vendor,
                imageFiles         = input.images,
                fontFiles          = input.fonts;

        // !SECTION: Files

    // !SECTION: Config

    // -------------------------- SECTION: Plugins -------------------------- //

        const {
            gulp,
            series,
            parallel,
            src,
            dest,
            watch
        } = require('gulp');

        const

            _           = require('lodash'),
            debug       = require('gulp-debug'),
            c           = require('ansi-colors'),
            fs          = require('fs'),
            filter      = require('gulp-filter'),
            lineec      = require('gulp-line-ending-corrector'),
            log         = require('fancy-log'),
            notify      = require('gulp-notify'),
            plumber     = require('gulp-plumber'),
            rename      = require('gulp-rename'),
            gif         = require('gulp-if'),
            lazypipe    = require('lazypipe'),
            inlineFonts = require('gulp-inline-fonts'),
            beautify    = require('gulp-beautify'),
            sourcemaps  = require('gulp-sourcemaps'),
            through     = require('through2'),
            merge       = require('merge-stream'),
            path        = require('path'),
            newy        = require('gulp-newy');

        c.theme({
            danger    : c.red,
            dark      : c.dim.gray,
            disabled  : c.gray,
            em        : c.italic,
            heading   : c.bold.underline,
            info      : c.cyan,
            muted     : c.dim,
            primary   : c.blue,
            strong    : c.bold,
            success   : c.green,
            underline : c.underline,
            warning   : c.yellow
        });

    // !SECTION: Plugins

    // --------------------------- SECTION: Tasks --------------------------- //

        function fileInfo(file){
            var propValue;
            for(var propName in file) {
                propValue = file[propName];
                console.log('name:' + propName, ', value:<<<',propValue,'>>>');
            }
        }

        function getRelativePath(path, file) {
            //fileInfo(file)
            var dir = file.path,
                cwd = file.cwd,
                base = file.base,
                name = path.basename + path.extname;


            dir = dir.replace(cwd, '');
            dir = dir.replace('/src/' + name, '');
            // console.log('Directory: ' + dir);
            // console.log('Working: ' + cwd);
            // console.log('Base: ' + base);
            // console.log('Name: ' + name);
            path.dirname = dir;
        }

        const
            fileRename = lazypipe()
                .pipe(
                    rename, function (path, file) {
                        getRelativePath(path, file)
                    }
                )
                .pipe(
                    rename, {
                        prefix: gulpSlug
                    }
                ),
            onSuccess = lazypipe()
                .pipe(
                    notify,
                    {
                        message: "Successfully Generated file: <%= file.basename %>",
                        onLast: true
                    }
                ),
            errorMsg = _.template(
               `${c.red.heading('New Error In: <%= file %>')}
                ${c.red.bold('Line   :')} <%= line %>
                ${c.red.bold('Column :')} <%= column %>
                ${c.red.bold('<%= message %>')}`
            ),
            errorOpts = function (err) {
                log.error(errorMsg({
                    'file'    : path.basename(err.file),
                    'plugin'  : err.plugin,
                    'line'    : err.line,
                    'column'  : err.column,
                    'message' : err.message
                }));
                notify.onError({
                    logLevel: 0,
                    title: 'Error In ' + err.fileName,
                    subtitle: err.plugin
                })(err);
            };

            notify.logLevel(0);


        function checkFile(projectDir, srcFile, absSrcFile) {
            // fileInfo(srcFile);
            var fileType = path.extname(srcFile),
                base     = path.basename(srcFile, fileType),
                file     = (fileType === '.scss') ? '.css' : fileType,
                dir      = path.dirname(absSrcFile).split(path.sep),
                dest     = path.basename(path.dirname(srcFile)),
                name     = base;
                dir      = dir.slice(0, -1).join(path.sep);

            if (absSrcFile.includes('includes') == false && (file === '.js' || file === '.css')) {
                name = 'main';
            }

            var final = gulpSlug + name + file
                destinationFile = path.join(projectDir, dest, final);

            return destinationFile;
        }

    // !SECTION: Tasks

// !SECTION: Global

// ========================================================================== //
// ========================== SECTION: Browser Sync ========================= //
// ========================================================================== //

    // -------------------------- SECTION: Plugins -------------------------- //
        const browsersync = require('browser-sync').create();
    // !SECTION: Plugins

    // --------------------------- SECTION: Tasks --------------------------- //
        function browserSync() {
            browsersync.init({
                files: [
                    {
                        match: [
                            './assets/css/*.css',
                            './assets/js/*.js',
                            './assets/imgs/*',
                            '**/*.php'
                        ]
                    }
                ],
                ignore: ['**/*.min.*', '**/*.map', 'node_modules/**', './inc/admin/**'],
                proxy: gulpUrl,
                open: true,
                watch: true,
                injectChanges: true,
                logFileChanges: true,
                ui: false,
                notify: true
            });
        }

        function bsreload(done) {
            browsersync.reload();
            done();
        }

        exports.bs       = browserSync;
        exports.bsreload = bsreload;

    // !SECTION: Tasks //

// !SECTION: Browsersync



// ========================================================================== //
// ============================== SECTION: CSS ============================== //
// ========================================================================== //

    // -------------------------- SECTION: PLUGINS -------------------------- //
        const
            sass            = require('gulp-sass'),
            jsonToSass      = require('gulp-json-to-sass'),
            autoprefixer    = require('autoprefixer'),
            mmq             = require('postcss-sort-media-queries'),
            postcss         = require('gulp-postcss'),
            assets          = require('postcss-assets'),
            easings         = require('postcss-easings'),
            inlineSVG       = require('postcss-inline-svg'),
            fixes           = require('postcss-fixes'),
            letterSpacing   = require('postcss-letter-tracking'),
            momentum        = require('postcss-momentum-scrolling'),
            globImporter    = require('sass-glob-importer'),
            cleanCSS        = require('gulp-clean-css'),
            fontMagician    = require('postcss-font-magician'),
            smoothGradients = require('postcss-easing-gradients'),
            filterGradient  = require('postcss-filter-gradient'),
            aspectRatio     = require('postcss-aspect-ratio-mini'),
            criticalCSS     = require('postcss-critical-css'),
            compileCSS      = lazypipe()
                .pipe(
                    sass,
                    {
                        errLogToConsole: true,
                        precision: 10,
                        importer: globImporter(),
                        includePaths: [
                            globalNode,
                            stylesBuildPath
                        ]
                    }
                )
                .pipe(
                    postcss,
                    [
                        inlineSVG({
                            path: imagesDistPath
                        }),
                        assets({
                            relative: stylesDistPath,
                            loadPaths: [fontsPath, imagesDistPath]
                        }),
                        mmq(),
                        aspectRatio(),
                        easings(),
                        smoothGradients(),
                        filterGradient({ skipWarnings: true }),
                        letterSpacing(),
                        momentum(),
                        fixes(),
                        autoprefixer(),
                        criticalCSS({
                            outputPath: stylesDistPath,
                            minify: true,
                            preserve: false
                        })
                    ]
                ),
            beautifyCSS     = lazypipe()
                .pipe(
                    cleanCSS,
                    {
                        format: 'beautify',
                        compatibility: '*',
                        level: 2,
                        debug: true,
                        inline: ['all']
                    }
                )
                .pipe(
                    beautify.css,
                    {
                        indent_size: 4
                    }
                ),
            minifyCSS       = lazypipe()
                .pipe(
                    rename,
                    { suffix: '.min' }
                )
                .pipe(
                    cleanCSS,
                    {
                        compatibility: '*',
                        level: 2,
                        sourceMap: true,
                        debug: true,
                        specialComments: 'none'
                    }
                );
    // !SECTION: Plugins

    // --------------------------- SECTION: Tasks --------------------------- //
        function compileStyles(files, isProd) {
            return src(files, {
                    allowEmpty: true,
                })
                .pipe(plumber({
                    errorHandler: errorOpts
                }))
                .pipe(newy(checkFile))
                .pipe(sourcemaps.init())
                .pipe(compileCSS())
                .pipe(fileRename())
                .pipe(gif(isProd, minifyCSS(), beautifyCSS()))
                .pipe(dest('.'))
                .pipe(sourcemaps.write('.'))
                .pipe(onSuccess());
        }

        function fontStyles() {
            var fontStream = merge();

            fontFiles.forEach(
                function(font) {
                    fontStream.add(
                        src(`${font.file}`, {
                            allowEmpty: true,
                            base: './'
                        }).pipe(
                            inlineFonts({
                                name:    `${font.name}`,
                                weight:  `${font.weight}`,
                                display: `${font.display}`,
                                style:   `${font.style}`,
                                formats: `${font.formats}`
                            })
                        )
                        .pipe(rename({
                            basename: changeCase.paramCase(font.name) + '-' + font.weight
                          }))
                        .pipe(gif(isProd, minifyCSS()))
                        .pipe(dest(stylesDistPath))
                    );
                }
            );

            return fontStream;
        }

        function jsonThemetoSass() {
            return src('./theme-config.json', {
                allowEmpty: true,
                base: './'
            })
            .pipe(plumber({
                errorHandler: errorOpts
            }))
            .pipe(
                jsonToSass({
                    jsonPath: './theme-config.json',
                    scssPath: stylesBuildPath + '/_theme.scss'
                })
            )
            .pipe(dest(stylesBuildPath));
        }


        function mainStyles(done) {
            compileStyles(mainSassFiles);
            done();
        }

        function componentStyles(done) {
            compileStyles(componentSassFiles);
            done();
        }

        function adminStyles(done) {
            compileStyles(adminSassFiles);
            done();
        }

        exports.fontStyles      = fontStyles;
        exports.jsonSass        = jsonThemetoSass;
        exports.mainStyles      = mainStyles;
        exports.componentStyles = componentStyles;
        exports.adminStyles     = adminStyles;
        exports.styles          = series(jsonThemetoSass, parallel(mainStyles, componentStyles, adminStyles));
    // !SECTION: Tasks

// !SECTION: CSS

// ========================================================================== //
// =============================== SECTION: JS ============================== //
// ========================================================================== //

    // -------------------------- SECTION: Plugins -------------------------- //
        const
            uglify              = require('gulp-uglify'),
            concat              = require('gulp-concat'),
            babel               = require('gulp-babel'),
            jshint              = require('gulp-jshint'),
            modernizr           = require('gulp-modernizr-build');
            jshintConfig.lookup = false;

    // !SECTION: Plugins

    // ------------------------- SECTION: Variables ------------------------- //
        const
            beautifyJSOpts = pkg.beautifyJSOpts,
            beautifyJS = lazypipe()
                .pipe(beautify.js, beautifyJSOpts),
            minifyJS = lazypipe()
                .pipe(
                    rename, {
                        suffix: '.min'
                    }
                )
                .pipe(uglify);
    // !SECTION: Variables

    // --------------------------- SECTION: Tasks --------------------------- //
        // ======================= SECTION: Compile JS ====================== //
            function compileScripts(files, fileBase = '', shouldConcat = false) {
                return  src(files, {
                        allowEmpty: true,
                    })
                    .pipe(plumber({
                        errorHandler: errorOpts
                    }))
                    .pipe(newy(checkFile))
                    .pipe(sourcemaps.init())
                    .pipe(jshint(jshintConfig))
                    .pipe(jshint.reporter('jshint-stylish'))
                    .pipe(gif(shouldConcat, concat(fileBase)))
                    .pipe(babel(babelConfig))
                    .pipe(fileRename())
                    .pipe(gif(isProd, minifyJS(), beautifyJS()))
                    .pipe(dest('.'))
                    .pipe(sourcemaps.write('.'))
                    .pipe(onSuccess());
            }
        // !SECTION: Compile JS


        // ======================= SECTION: Vendor JS ======================= //
            /**
             * This section is for copying 3rd party javascript files to the
             * project. Plugins can be downloaded to either the project itself
             * or within the user's global node folder. Files are specified
             * in the package.json file under inputFiles[] => js[] => vendor
             */


            function vendorScripts() {

                var jsStream = merge();

                Object.entries(vendorJSFiles).forEach(
                    function(files, i) {

                        var index = i + 2,
                            name = files[0],
                            partials = files[1],
                            paths = [];

                            if(typeof partials === 'object'){

                                Object.values(partials).forEach(function(item){
                                    item = globalNode + item;
                                    paths.push(item);

                                  });
                            } else if(typeof partials === 'string') {
                                item = globalNode + partials;
                                paths.push(item);
                            }

                        jsStream.add(
                            src(paths, {
                                allowEmpty: true,
                                base: './'
                            })
                            .pipe(concat(name))
                        );
                    }
                );

                return jsStream.pipe(concat(gulpSlug + 'vendor.js'))
                .pipe(gif(isProd, minifyJS(), beautifyJS()))
                .pipe(dest(scriptsDistPath))
                .pipe(onSuccess());
            }


        // !SECTION: Vendor JS



        function mainScripts(done) {
            compileScripts(mainJSFiles, 'main.js', true);
            done();
        }

        function componentScripts(done) {
            compileScripts(componentJSFiles, 'components.js');
            done();
        }

        function adminScripts(done) {
            compileScripts(adminJSFiles, 'admin.js', true);
            done();
        }

        exports.mainScripts      = mainScripts
        exports.adminScripts     = adminScripts;
        exports.componentScripts = componentScripts;
        exports.vendorScripts    = vendorScripts;
        exports.scripts          = parallel(
            vendorScripts,
            mainScripts,
            adminScripts
        );
    // !SECTION: Tasks

// !SECTION: JS

// ========================================================================== //
// ============================= SECTION: Images ============================ //
// ========================================================================== //

    // -------------------------- SECTION: Plugins -------------------------- //

        const
            imagemin = require('gulp-imagemin'),
            newer = require('gulp-newer');

    // !SECTION: Plugins

    // ------------------------- SECTION: Variables ------------------------- //

        const
            imageFilter = filter(
                ['**/*.png', '**/*.gif', '**/*.jpg', '**/*.jpeg', '**/*.svg'],
                {
                    restore: true
                }
            );

    // !SECTION: Variables

    // --------------------------- SECTION: Tasks --------------------------- //


        function images() {
            return src(imageFiles, {
                base: './',
                nodir: true
            })
                .pipe(plumber({
                    errorHandler: errorOpts
                }))
                .pipe(imageFilter)
                .pipe(newer(imagesDistPath))
                .pipe(
                    imagemin([
                        imagemin.gifsicle({
                            interlaced: true
                        }),
                        imagemin.mozjpeg({quality: 75, progressive: true}),
                        imagemin.optipng({
                            optimizationLevel: 5
                        }),
                        imagemin.svgo({
                            plugins: [
                                {
                                    removeViewBox: true
                                },
                                {
                                    cleanupIDs: false
                                },
                                {
                                    inlineStyles: true
                                }
                            ]
                        })
                    ])
                )
                .pipe(imageFilter.restore)
                .pipe(
                    rename({
                        dirname: ''
                    })
                )
                .pipe(dest(imagesDistPath))
                .pipe(onSuccess());
        }
        exports.images = images;

    // !SECTION: Tasks

// !SECTION: Images

// ========================================================================== //
// ============================= SECTION: Watch ============================= //
// ========================================================================== //

    // --------------------------- SECTION: Tasks --------------------------- //

        function watchFiles() {
            watch(theme, jsonThemetoSass);
            watch(mainSassFiles, mainStyles);
            watch(adminSassFiles, adminStyles);
            watch(mainJSFiles, mainScripts);
            watch(adminJSFiles, adminScripts);
            watch(imageFiles, images);
        }
        exports.watch = watchFiles;

    // !SECTION: Tasks

// !SECTION: Watch

// ========================================================================== //
// ============================= SECTION: Build ============================= //
// ========================================================================== //

    exports.build = parallel(
        images,
        series(
            jsonThemetoSass,
            mainStyles,
            adminStyles,
        ),
        vendorScripts,
        mainScripts,
        adminScripts
    );

// !SECTION: Build
