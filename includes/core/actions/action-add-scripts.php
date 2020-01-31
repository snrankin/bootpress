<?php

function themeScripts()
{

    $add_scripts = array(
        THEME_SLUG . '-vendor',
        THEME_SLUG . '-main'
    );
    foreach ($add_scripts as $script) {
        $name = $script;
        $rel = ASSETS_PATH_URI . '/js/';
        $abs = ASSETS_PATH . '/js/';
        $file = '';
        if (defined(COMPRESS_SCRIPTS) && COMPRESS_SCRIPTS === true) {
            $name = $name . '.min';
        }

        $file = $name . '.js';

        $file_rel = $rel . $file;
        $file_abs = $abs . $file;

        if (file_exists($file_abs)) {
            $mod_time = filemtime($file_abs);
            wp_register_script($name, $file_rel, array('jquery'), $mod_time, true);
            wp_enqueue_script($name);
        }
    }
}
add_action('wp_enqueue_scripts', 'themeScripts', 9999);
