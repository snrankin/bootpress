"use strict";
require("core-js/modules/es.array.index-of");
require("core-js/modules/es.array.join");
require("core-js/modules/es.array.map");
require("core-js/modules/es.regexp.exec");
require("core-js/modules/es.string.replace");
require("core-js/modules/es.string.split");
var theme = JSON.parse('../../theme-config.json');
var desktopBP = theme.dbp;
var windowWidth = verge.viewportW();
var windowHeight = verge.viewportH();
jQuery(function ($) {
    $.fn.extend({
        sameHeight: function sameHeight(options) {
            var settings = $.extend({
                    breakpoint: desktopBP
                }, options),
                elem = $(this);
            var elementHeights = elem.map(function () {
                    return elem.outerHeight();
                }).get(),
                minHeight = Math.max.apply(null, elementHeights);
            if (windowWidth > settings.breakpoint) {
                elem.css('min-height', minHeight);
            }
            $(window).resize(function () {
                var heights = elem.map(function () {
                        return elem.outerHeight();
                    }).get(),
                    min = Math.max.apply(null, heights);
                if (windowWidth > settings.breakpoint) {
                    elem.css('min-height', min);
                } else {
                    elem.css('min-height', '0px');
                }
            });
        },
        makeFullHeight: function makeFullHeight() {
            $(this).css('min-height', windowHeight);
            $(window).on('resize', function () {
                $(this).css('min-height', windowHeight);
            });
        },
        sameWidth: function sameWidth(options) {
            var settings = $.extend({
                    breakpoint: desktopBP
                }, options),
                elem = $(this),
                elementWidths = elem.map(function () {
                    return elem.outerWidth();
                }).get(),
                minWidth = Math.max.apply(null, elementWidths);
            if (windowWidth > settings.breakpoint) {
                elem.css('min-width', minWidth);
            }
            $(window).resize(function () {
                var width = elem.map(function () {
                        return elem.outerWidth();
                    }).get(),
                    min = Math.max.apply(null, width);
                if (windowWidth > settings.breakpoint) {
                    elem.css('min-width', min);
                } else {
                    elem.css('min-width', '0px');
                }
            });
        },
        toTitleCase: function toTitleCase() {
            return $(this).each(function () {
                var ignore = 'and,the,in,with,an,or,at,of,a,to,for'.split(',');
                var theTitle = $(this).text();
                var split = theTitle.split(' ');
                for (var x = 0; x < split.length; x++) {
                    if (x > 0) {
                        if (ignore.indexOf(split[x].toLowerCase()) < 0) {
                            split[x] = split[x].replace(/\w\S*/g, function (txt) {
                                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                            });
                        }
                    } else {
                        split[x] = split[x].replace(/\w\S*/g, function (txt) {
                            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                        });
                    }
                }
                var title = split.join(' ');
                $(this).text(title);
            });
        }
    });
});
jQuery(function ($) {
    function themeJS() {
        $('.section-full-height').makeFullHeight();
        $('[data-toggle="tooltip"]').tooltip();
        $('[data-toggle="popover"]').popover({
            trigger: 'focus'
        });
    }
    $(document).ready(function () {
        themeJS();
    });
});

function logElementEvent(eventName, element) {
    console.log(Date.now(), eventName, element.getAttribute('data-src'));
}
var callback_enter = function callback_enter(element) {
    logElementEvent('🔑 ENTERED', element);
};
var callback_exit = function callback_exit(element) {
    logElementEvent('🚪 EXITED', element);
};
var callback_reveal = function callback_reveal(element) {
    logElementEvent('👁️ REVEALED', element);
};
var callback_loaded = function callback_loaded(element) {
    logElementEvent('👍 LOADED', element);
};
var callback_error = function callback_error(element) {
    logElementEvent('💀 ERROR', element);
    element.src = 'https://via.placeholder.com/440x560/?text=Error+Placeholder';
};
var callback_finish = function callback_finish() {
    logElementEvent('✔️ FINISHED', document.documentElement);
};
window.lazyLoadOptions = {
    elements_selector: '.lazyload',
    threshold: 0,
    callback_enter: callback_enter,
    callback_exit: callback_exit,
    callback_reveal: callback_reveal,
    callback_loaded: callback_loaded,
    callback_error: callback_error,
    callback_finish: callback_finish,
    use_native: true
};
window.addEventListener('LazyLoad::Initialized', function (event) {
    window.lazyLoadInstance = event.detail.instance;
}, false);