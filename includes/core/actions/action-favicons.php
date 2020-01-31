<?php

/**
 * Insert generated favicons into head
 * @link https://realfavicongenerator.net/
 */

function addFavicon()
{
    $folder       = ASSETS_PATH . '/imgs/favicons';
    $url          = ASSETS_PATH_URI . '/imgs/favicons';

    $version     = '7k4ydwrB8A';
    $theme_color = themeConfig('primary');
    if (file_exists($folder)) {
        $favicons = '';
        $favicons .= "\n" . '<link rel="apple-touch-icon" sizes="180x180" href="' . $url . '/apple-touch-icon.png?v=' . $version . '">';
        $favicons .= "\n" . '<link rel="icon" type="image/png" sizes="32x32" href="' . $url . '/favicon-32x32.png?v=' . $version . '">';
        $favicons .= "\n" . '<link rel="icon" type="image/png" sizes="16x16" href="' . $url . '/favicon-16x16.png?v=' . $version . '">';
        $favicons .= "\n" . '<link rel="manifest" href="' . $url . '/site.webmanifest?v=' . $version . '">';
        $favicons .= "\n" . '<link rel="mask-icon" href="' . $url . '/safari-pinned-tab.svg?v=' . $version . '" color="' . $theme_color . '">';
        $favicons .= "\n" . '<link rel="shortcut icon"  href="' . $url . '/favicon.ico?v=' . $version . '">';
        $favicons .= "\n" . '<meta name="msapplication-TileColor" content="' . $theme_color . '">';
        $favicons .= "\n" . '<meta name="msapplication-TileImage" content="' . $url . '/mstile-144x144.png?v=' . $version . '">';
        $favicons .= "\n" . '<meta name="msapplication-config" content="' . $url . '/browserconfig.xml?v=' . $version . '">';
        $favicons .= "\n" . '<meta name="theme-color" content="' . $theme_color . '">';
        echo $favicons;
    }
}
add_action('wp_head', 'addFavicon');
add_action('login_head', 'addFavicon');
add_action('admin_head', 'addFavicon');
