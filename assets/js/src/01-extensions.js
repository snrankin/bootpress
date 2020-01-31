/** ============================================================================
 * jQuery Extensions
 * Project: BootPress
 * Version: 1.0.0
 * Author:  Sam Rankin <samrankin.dev@gmail.com>
 * ========================================================================== */

const theme = JSON.parse('../../theme-config.json');
const desktopBP = theme.dbp;
const windowWidth = verge.viewportW();
const windowHeight = verge.viewportH();

jQuery(function($) {
    $.fn.extend({
        sameHeight: function(options) {
            const settings = $.extend(
                    {
                        breakpoint: desktopBP
                    },
                    options
                ),
                elem = $(this);
            let elementHeights = elem
                    .map(function() {
                        return elem.outerHeight();
                    })
                    .get(),
                minHeight = Math.max.apply(null, elementHeights);

            if (windowWidth > settings.breakpoint) {
                elem.css('min-height', minHeight);
            }
            $(window).resize(function() {
                let heights = elem
                        .map(function() {
                            return elem.outerHeight();
                        })
                        .get(),
                    min = Math.max.apply(null, heights);
                if (windowWidth > settings.breakpoint) {
                    elem.css('min-height', min);
                } else {
                    elem.css('min-height', '0px');
                }
            });
        },
        makeFullHeight: function() {
            $(this).css('min-height', windowHeight);
            $(window).on('resize', function() {
                $(this).css('min-height', windowHeight);
            });
        },
        sameWidth: function(options) {
            let settings = $.extend(
                    {
                        breakpoint: desktopBP
                    },
                    options
                ),
                elem = $(this),
                elementWidths = elem
                    .map(function() {
                        return elem.outerWidth();
                    })
                    .get(),
                minWidth = Math.max.apply(null, elementWidths);

            if (windowWidth > settings.breakpoint) {
                elem.css('min-width', minWidth);
            }
            $(window).resize(function() {
                let width = elem
                        .map(function() {
                            return elem.outerWidth();
                        })
                        .get(),
                    min = Math.max.apply(null, width);
                if (windowWidth > settings.breakpoint) {
                    elem.css('min-width', min);
                } else {
                    elem.css('min-width', '0px');
                }
            });
        },
        toTitleCase: function() {
            return $(this).each(function() {
                let ignore = 'and,the,in,with,an,or,at,of,a,to,for'.split(',');
                let theTitle = $(this).text();
                let split = theTitle.split(' ');

                for (let x = 0; x < split.length; x++) {
                    if (x > 0) {
                        if (ignore.indexOf(split[x].toLowerCase()) < 0) {
                            split[x] = split[x].replace(/\w\S*/g, function(
                                txt
                            ) {
                                return (
                                    txt.charAt(0).toUpperCase() +
                                    txt.substr(1).toLowerCase()
                                );
                            });
                        }
                    } else {
                        split[x] = split[x].replace(/\w\S*/g, function(txt) {
                            return (
                                txt.charAt(0).toUpperCase() +
                                txt.substr(1).toLowerCase()
                            );
                        });
                    }
                }
                let title = split.join(' ');
                $(this).text(title);
            });
        }
    });


});
