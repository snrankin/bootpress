<?php

/** ============================================================================
 * Description
 * @package BootPress
 * @version <<version>>
 * -----
 * @author Sam Rankin <samrankin.dev@gmail.com>
 * @copyright Copyright (c) 2019 Your Company
 * -----
 * Created Date:  1-16-19
 * Last Modified: 11-26-19 at 2:18 pm
 * Modified By:   Sam Rankin <samrankin.dev@gmail.com>
 * -----
 * HISTORY:
 * Date    	By	Comments
 * --------	--	--------------------------------------------------------------
 * =========================================================================== */

/**
 * Component: Admin Functions
 * Description: Functions to change/edit admin styles
 *
 * @package amerisleep
 */

// =============================================================================
// Add Styles and Scripts to Admin
// =============================================================================

function adminStyles()
{
    wp_enqueue_style(THEME_SLUG . '-admin', ADMIN_PATH_URI . '/assets/css/' . THEME_SLUG . '-admin.css');
}
add_action('admin_enqueue_scripts', 'adminStyles', 999);



function themeOptions($option = '')
{
    $theme_options = get_option(THEME_SLUG . '_theme_options');
    if (!($theme_options)) {
        return;
    }

    $theme_option = $theme_options[$option];

    if (isset($theme_option) && !empty($theme_option)) {
        return $theme_option;
    } else {
        return false;
    }
}


include_once ADMIN_PATH . '/partials/editor-styles.php';

include_once ADMIN_PATH . '/partials/theme-settings.php';
