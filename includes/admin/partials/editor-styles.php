<?php
/** ===========================================================================
 * Description: Add a formats dropdown to TinyMCE Editor
 * @link https://codex.wordpress.org/TinyMCE_Custom_Styles
 * @package amerisleep
 * @version 1.0.0
 * -----
 * @author Sam Rankin (samrankin.dev@gmail.com>)
 * -----
 * Created Date:  3-13-19
 * Last Modified: 6-13-19 at 4:20 pm
 * Modified By:   Sam Rankin <samrankin.dev@gmail.com>
 * -----
 * HISTORY:
 * Date        By    Comments
 * --------    --    --------------------------------------------------------------
 * ========================================================================= */

/**
 * Enabling styleselect
 *
 * Before any registered formats/styles will show, we need to activate the
 * styleselect pulldown menu in the Visual editor. We do this by filtering the
 * array of buttons loaded by TinyMCE. We use the mce_buttons_2 filter because
 * that is the second row and it looks good there.
 *
 * @return array $buttons
 */

function addTinyMCEButtons($buttons)
{
    array_unshift($buttons, 'styleselect');
    return $buttons;
}
add_filter('mce_buttons_2', 'addTinyMCEButtons');

/**
 *  Registering Custom Styles
 *
 * Once styleselect is in place we can register our actual styles in two
 * different ways. Both involve using the tiny_mce_before_init filter, which
 * receives the full configuration parameters of TinyMCE and into which we'll
 * inject our custom styles.
 *
 * @param array $styles
 *
 * @return array $init_array
 */

// Callback function to insert 'styleselect' into the $buttons array

function insertTinyMCEFormats($init_array)
{

    $theme_config = file_get_contents(CONFIG_PATH . '/editor-styles.json');
    $theme_array  = json_decode($theme_config, true);
    $styles       = wp_json_encode($theme_array);

    $init_array['style_formats'] = $styles;

    return $init_array;
}
add_filter('tiny_mce_before_init', 'insertTinyMCEFormats');

add_editor_style(ADMIN_PATH_URI . '/assets/css/' . THEME_SLUG . '-editor.css');
//add_editor_style('https://use.fontawesome.com/releases/v' . FA_VER . '/css/all.css');
