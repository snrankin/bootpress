/** ============================================================================
 * 02-setup
 * Project: BootPress
 * Version: 1.0.0
 * Author:  Sam Rankin <samrankin.dev@gmail.com>
 * ========================================================================== */

jQuery(function($) {
    function themeJS() {
        $('.section-full-height').makeFullHeight();

        $('[data-toggle="tooltip"]').tooltip();
        $('[data-toggle="popover"]').popover({
            trigger: 'focus'
        });
    }
    $(document).ready(function() {
        themeJS();
    });
});
