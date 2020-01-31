<?php

function themeStyles()
{
    $name = THEME_SLUG . '-main';
    $rel = ASSETS_PATH_URI . '/css/';
    $abs = ASSETS_PATH . '/css/';
    $file = '';
    if (defined(COMPRESS_CSS) && COMPRESS_CSS === true) {
        $name = $name . '.min';
    }

    $file = $name . '.css';

    $file_rel = $rel . $file;
    $file_abs = $abs . $file;

    if (file_exists($file_abs)) {
        $mod_time = filemtime($file_abs);
        wp_register_style($name, $file_rel, '', $mod_time, 'all');
        wp_enqueue_style($name);
    }
};
add_action('wp_footer', 'themeStyles', 9999);
