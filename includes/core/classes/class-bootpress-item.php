<?php

/** ============================================================================
 * Description
 * @package BootPress
 * @version <<version>>
 * -----
 * @author Sam Rankin <samrankin.dev@gmail.com>
 * @copyright Copyright (c) 2019 Your Company
 * -----
 * Created Date:  10-8-19
 * Last Modified: Fri Dec 06 2019
 * Modified By: Sam Rankin
 * -----
 * HISTORY:
 * Date    	By	Comments
 * --------	--	--------------------------------------------------------------
 * =========================================================================== */
function bootpressSection($content, $args = array())
{
    $defaults = array(
        'section_wrapper' => array(
            'tag'   => 'div',
            'id'    => '',
            'class' => 'section-wrapper',
            'style' => ''
        ),
        'section_inner' => array(
            'tag'   => 'div',
            'id'    => '',
            'class' => 'section-inner',
            'style' => ''
        ),
        'container' => array(
            'tag'   => 'div',
            'id'    => '',
            'class' => 'container',
            'style' => ''
        ),
    );

    $options = parseArgs($defaults, $args);
    extract($options);

    $section = '';
    $section = itemWrapperHTML($content, $container);
    $section = itemWrapperHTML($section, $section_inner);
    $section = itemWrapperHTML($section, $section_wrapper);

    return $section;
}

function bootpressRow($content, $args = array())
{
    $defaults = array(
        'tag'   => 'div',
        'id'    => '',
        'class' => 'row',
        'style' => ''
    );

    $options = parseArgs($defaults, $args);

    $section = '';
    $section = itemWrapperHTML($content, $options);


    return $section;
}

function bootpressCol($content, $args = array())
{
    $defaults = array(
        'column' => array(
            'tag'   => 'div',
            'id'    => '',
            'class' => '',
            'style' => ''
        ),
        'content_wrapper' => array(
            'tag'   => 'div',
            'id'    => '',
            'class' => 'content-wrapper',
            'style' => ''
        )
    );

    $options = parseArgs($defaults, $args);
    extract($options);

    $col = '';
    $col = itemWrapperHTML($content, $content_wrapper);
    $col = itemWrapperHTML($col, $column);

    return $col;
}

function bootpressItem($content = '', $args = array())
{
    if (empty($content)) {
        return;
    }
    $defaults = array(
        'tag'   => 'div',
        'id'    => '',
        'class' => 'content-item',
        'style' => ''
    );

    $atts = parseArgs($defaults, $args);

    $item = itemWrapperHTML($content, $atts);

    return $item;
}

function mainCol($content, $args = array())
{
    global $post;
    $post_slug    = $post->post_name;
    $classes      = get_post_class();
    $item         = get_post_type();
    $id           = get_the_ID();

    if (is_search()) {
        $item = 'search';
        $id   = 0;
    } elseif (is_404()) {
        $item = 'error';
        $id   = 0;
    }
    $wrapper_classes = array(
        'main-content',
        $item . '-content',
    );

    $layout  = get_field('sidebar_location', $id);
    $sidebar = get_field('sidebar', $id);
    $mainCol = themeConfig('main-col-width');
    $width = '12';

    if (isset($args['width'])) {
        $width = 'col-' . themeConfig('desktop-bp') . '-' . $args['width'];
    } elseif (!empty($sidebar)) {
        if ($layout == 'left' || $layout == 'right') {
            $width = 'col-' . themeConfig('desktop-bp') . '-' . $mainCol;
            if ($layout == 'left') {
                $wrapper_classes[] = 'order-' . themeConfig('desktop-bp') . '-last';
            }
        }
    } else {
        $width = 'col-' . $width;
    }

    $wrapper_classes[] = $width;

    $wrapper_classes = outputClasses($wrapper_classes, $classes);

    $wrapper_atts = array(
        'id'       => $post_slug . '-' . $item . '-content',
        'itemprop' => 'mainEntityOfPage',
        'role'     => 'main',
        'class'    => $wrapper_classes,
    );

    $wrapper_atts['tag'] = (is_single()) ? 'article' : 'div';

    $atts = array(
        'column' => $wrapper_atts
    );

    $atts = parseArgs($atts, $args);

    return bootpressCol($content, $atts);
}


function displayACFContentItem()
{ }
