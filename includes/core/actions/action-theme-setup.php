<?php

function themeSetup()
{
    /**
     * Add support for core custom logo.
     *
     * @link https://codex.wordpress.org/Theme_Logo
     */
    add_theme_support('custom-logo', array(
        'height'      => 250,
        'width'       => 250,
        'flex-width'  => true,
        'flex-height' => true,
        'header-text' => array('site-title', 'site-description'),
    ));
    add_theme_support('automatic-feed-links');

    add_theme_support('custom-header');
    add_theme_support('title-tag');

    add_theme_support('starter-content', [
        // Static front page set to Home, posts page set to Blog
        'options'   => [
            'show_on_front'  => 'page',
            'page_on_front'  => '{{home}}',
            'page_for_posts' => '{{blog}}',
        ],
        // Starter pages to include
        'posts'     => [
            'home',
            'about',
            'contact',
            'style-guide',
            'blog',
        ],
        // Add pages to primary navigation menu
        'nav_menus' => [
            'primary_navigation' => [
                'name'  => __('Primary Navigation', 'id'),
                'items' => [
                    'home_link',
                    'page_about',
                    'page_blog',
                    'page_style-guide',
                    'page_contact',
                ],
            ],
        ],
        // Add test widgets to footer sidebar
        'widgets'   => [
            'footer-1' => [
                'text', [
                    'title' => '', // Blank title
                    'text'  => '[company_logo]',
                ],
            ],
            'footer-2' => [
                'text', [
                    'title' => '', // Blank title
                    'text'  => '[company_address]',
                ],
            ],
            'footer-3' => [
                'text', [
                    'title' => '', // Blank title
                    'text'  => '[company_contact]',
                ],
            ],
            'footer-4' => [
                'text', [
                    'title' => '', // Blank title
                    'text'  => '[company_social]',
                ],
            ],
        ],
    ]);

    /**
     * Add theme support for selective refresh for widgets.
     */

    add_theme_support('customize-selective-refresh-widgets');
    /**
     * Switch default core markup for search form, comment form, and comments
     * to output valid HTML5.
     */
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));


    /**
     * Load desired plugins into theme
     */

    $plugins = glob(VENDOR_PATH . '/*', GLOB_ONLYDIR);
    foreach ($plugins as $plugin) {
        $path = $plugin . '/setup.php';
        if (file_exists($path)) {
            require_once $path;
        }
    }

    register_nav_menus(array(
        'primary' => __('Primary Menu', THEME_SLUG),
    ));
}
add_action('after_setup_theme', 'themeSetup');
