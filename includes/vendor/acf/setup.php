<?php

/** ============================================================================
 * ACF Fields Pro setup and custom functions
 * @package BootPress
 * @version 1.0.0
 * @author  Sam Rankin <samrankin.dev@gmail.com>
 * ========================================================================== */

define('ACF_PATH', VENDOR_PATH . '/acf/');
define('ACF_PATH_URI', VENDOR_PATH_URI . '/acf/');

if (!class_exists('ACF')) {
    include_once 'acf.php';
}

function newACFPath($url)
{
    return ACF_PATH_URI;
}

function combineThemeOptions()
{
    $fields       = get_fields('option');
    $field_values = array();
    if ($fields) {
        foreach ($fields as $field_name => $value) {
            if (!is_object($value)) {
                $field_values[$field_name] = $value;
            }
        }
        update_option(THEME_SLUG . '_options', $field_values, true);
    }
}

function newACFLoadPoint($paths)
{

    unset($paths[0]);

    // append path
    $paths[] = ASSETS_PATH . '/json';

    // return
    return $paths;
}

function newACFSavePoint($path)
{
    // update path
    $path = ASSETS_PATH . '/json';

    // return
    return $path;
}

if (class_exists('ACF')) {
    add_filter('acf/settings/url', 'newACFPath');
    add_filter('acf/settings/save_json', 'newACFSavePoint');
    add_filter('acf/settings/load_json', 'newACFLoadPoint');
    add_action('acf/save_post', 'combineThemeOptions', 20);
}
