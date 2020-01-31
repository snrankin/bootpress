<?php

/** ============================================================================
 * Description
 * @package BootPress
 * @version <<version>>
 * -----
 * @author Sam Rankin <samrankin.dev@gmail.com>
 * @copyright Copyright (c) 2019 Your Company
 * -----
 * Created Date:  11-9-19
 * Last Modified: 11-9-19 at 6:31 pm
 * Modified By:   Sam Rankin <samrankin.dev@gmail.com>
 * -----
 * HISTORY:
 * Date        By    Comments
 * --------    --    --------------------------------------------------------------
 * =========================================================================== */

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
        update_option('bp_theme_options', $field_values, true);
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
