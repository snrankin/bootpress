<?php

/** ============================================================================
 * functions
 * @package BootPress
 * @version 1.0.0
 * @author  Sam Rankin <samrankin.dev@gmail.com>
 * ========================================================================== */


define('INCLUDES_PATH', get_stylesheet_directory() . '/includes');
define('INCLUDES_PATH_URI', get_stylesheet_directory_uri() . '/includes');
define('CONFIG_PATH', get_stylesheet_directory() . '/config');
define('CONFIG_PATH_URI', get_stylesheet_directory_uri() . '/config');
define('ASSETS_PATH', get_stylesheet_directory() . '/assets');
define('ASSETS_PATH_URI', get_stylesheet_directory_uri() . '/assets');
define('THEME_CONFIG_PATH', CONFIG_PATH . '/theme-config.json');
define('THEME_CONFIG_PATH_URI', CONFIG_PATH_URI . '/theme-config.json');
define('COMPONENTS_PATH', INCLUDES_PATH . '/components');
define('COMPONENTS_PATH_URI', INCLUDES_PATH_URI . '/components');
define('UTILITIES_PATH', INCLUDES_PATH . '/utilities');
define('UTILITIES_PATH_URI', INCLUDES_PATH_URI . '/utilities');
define('ADMIN_PATH', INCLUDES_PATH . '/admin');
define('ADMIN_PATH_URI', INCLUDES_PATH_URI . '/admin');
define('VENDOR_PATH', INCLUDES_PATH . '/vendor');
define('VENDOR_PATH_URI', INCLUDES_PATH_URI . '/vendor');
define('THEME_SLUG', 'bootpress');
define('YOUTUBE_KEY', 'AIzaSyAoig2BNilZxH7h-pLj5HhZbTAVuKfWqL4');

require_once INCLUDES_PATH . '/core/setup.php';
require_once VENDOR_PATH . '/setup.php';
require_once ADMIN_PATH . '/setup.php';
require_once COMPONENTS_PATH . '/setup.php';
