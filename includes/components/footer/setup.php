<?php

/** ============================================================================
 * Description
 * @package BootPress Test Project
 * @version <<version>>
 * -----
 * @author Sam Rankin <samrankin.dev@gmail.com>
 * @copyright Copyright (c) 2019 Your Company
 * -----
 * Created Date:  10-5-19
 * Last Modified: 10-8-19 at 10:59 am
 * Modified By:   Sam Rankin <samrankin.dev@gmail.com>
 * -----
 * HISTORY:
 * Date        By    Comments
 * --------    --    --------------------------------------------------------------
 * =========================================================================== */

// Register Sidebars
function footerColumns()
{

    $footer_1 = array(
        'name'          => __('Footer Column 1', THEME_SLUG),
        'id'            => 'footer-1',
        'class'         => 'col-lg-2',
        'before_widget' => '<div id="%1$s" class="widget %2$s content-item">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="widget-title h6">',
        'after_title'   => '</h4>',
    );
    register_sidebar($footer_1);

    $footer_2 = array(
        'name'          => __('Footer Column 2', THEME_SLUG),
        'id'            => 'footer-2',
        'class'         => 'col-lg-2',
        'before_widget' => '<div id="%1$s" class="widget %2$s content-item">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="widget-title h6">',
        'after_title'   => '</h4>',
    );
    register_sidebar($footer_2);

    $footer_3 = array(
        'name'          => __('Footer Column 3', THEME_SLUG),
        'id'            => 'footer-3',
        'class'         => 'col-lg-2',
        'before_widget' => '<div id="%1$s" class="widget %2$s content-item">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="widget-title h6">',
        'after_title'   => '</h4>',
    );
    register_sidebar($footer_3);

    $footer_4 = array(
        'name'          => __('Footer Column 4', THEME_SLUG),
        'id'            => 'footer-4',
        'class'         => 'col-lg-2',
        'before_widget' => '<div id="%1$s" class="widget %2$s content-item">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="widget-title h6">',
        'after_title'   => '</h4>',
    );
    register_sidebar($footer_4);

}
add_action('widgets_init', 'footerColumns');
