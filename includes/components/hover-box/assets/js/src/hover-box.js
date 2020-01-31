jQuery(function($) {
    $.fn.extend({
        cssTransform: function(property, value) {
            $(this).css({
                '-webkit-transform': '' + property + '(' + value + ')',
                '-moz-transform': '' + property + '(' + value + ')',
                '-ms-transform': '' + property + '(' + value + ')',
                '-o-transform': '' + property + '(' + value + ')',
                transform: '' + property + '(' + value + ')'
            });
        }
    });

    $('.hover-box.effect-lily').each(function() {
        var textHeight = $(this)
            .find('.hover-box-text')
            .outerHeight(true);
        $(this)
            .find('.hover-box-title')
            .cssTransform('translateY', textHeight + 'px');
        $(this)
            .find('.hover-box-text')
            .cssTransform('translateY', textHeight + 'px');
    });
});
