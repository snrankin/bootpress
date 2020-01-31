<?php

/** ============================================================================
 * Add a settings page to the backend for all of our theme options
 * @package BootPress Test Project
 * @version 1.0.0
 * @link https://www.advancedcustomfields.com/resources/acf_add_options_page/
 * @uses acf_add_options_page()
 * -----
 * @author Sam Rankin <samrankin.dev@gmail.com>
 * -----
 * Created Date:  3-13-19
 * Last Modified: Fri Dec 06 2019
 * Modified By: Sam Rankin
 * -----
 * HISTORY:
 * Date        By    Comments
 * --------    --    -----------------------------------------------------------
 * ========================================================================== */


function registerOptionsPages()
{

    // Check function exists.
    if (!function_exists('acf_add_options_page'))
        return;

    acf_add_options_page(array(
        'page_title' => 'General Theme Settings',
        'menu_title' => 'Theme Settings',
        'menu_slug'  => 'theme-general-settings',
        'capability' => 'edit_posts',
        'redirect'   => false,
        'autoload'   => true,
    ));

    acf_add_options_sub_page(array(
        'page_title'     => 'Theme Header Settings',
        'menu_title'    => 'Header',
        'parent_slug'    => 'theme-general-settings',
    ));

    acf_add_options_sub_page(array(
        'page_title'     => 'Theme Footer Settings',
        'menu_title'    => 'Footer',
        'parent_slug'    => 'theme-general-settings',
    ));
    acf_add_options_sub_page(array(
        'page_title'     => 'Theme Sidebar Settings',
        'menu_title'    => 'Sidebars',
        'parent_slug'    => 'theme-general-settings',
    ));

    acf_add_options_page(array(
        'page_title' => 'Company Info',
        'menu_title' => 'Company Info',
        'menu_slug'  => 'company-info',
        'capability' => 'edit_posts',
        'redirect'   => false,
        'autoload'   => true,
        'icon_url'   => 'dashicons-building',
    ));
}

// Hook into acf initialization.
add_action('acf/init', 'registerOptionsPages');


function loadMenuOptions($field)
{
    $menus = wp_get_nav_menus();
    if (empty($menus)) return;

    $choices = array();

    foreach ($menus as $menu) {
        $key   = $menu->term_id;
        $value = $menu->name;
        $choices[$key] = $value;
    }

    $field['choices'] = $choices;

    return $field;
}

// acf_load_field - filter for every field
add_filter('acf/load_field/name=menu', 'loadMenuOptions');

function loadWidgetAreaOptions($field)
{
    $widget_areas = $GLOBALS['wp_registered_sidebars'];
    if (empty($widget_areas)) return;

    $choices = array();

    foreach ($widget_areas as $widget_area) {
        $key   = $widget_area['id'];
        $value = $widget_area['name'];
        $choices[$key] = $value;
    }

    $field['choices'] = $choices;

    return $field;
}

// acf_load_field - filter for every field
add_filter('acf/load_field/name=widget_area', 'loadWidgetAreaOptions');



function acfContentItem($item = array())
{
    extract($item);
    $item_content = '';

    if ($acf_fc_layout === 'search') {

        $item_content = get_search_form(array('echo' => false));
    } elseif ($acf_fc_layout === 'logo') {

        $item_content = customLogoHTML();
    } elseif ($acf_fc_layout === 'menu') {

        $item_content = bootpressNav($menu, $dropdown, $item);
    } elseif ($acf_fc_layout === 'company_info') {

        $layout_items = $item['info_to_display'];
        $company_info = array(
            'tag'         => $item['tag'],
            'id'          => $item['id'],
            'class'       => $item['class'],
            'title'       => $item['title'],
        );

        foreach ($layout_items as $layout_item) {
            extract($layout_item);
            $atts = array(
                'tag'   => $tag,
                'class' => $class,
                'id'    => $id,
                'title' => $title,
                'icon'  => $icon_class,
                'link'  => array(
                    'add'  => $add_link
                )
            );
            $company_info['add_' . $acf_fc_layout] = 1;
            $company_info[$acf_fc_layout] = $atts;
        }

        $item_content = displayLocationInfo($item['location'], $company_info);
    } elseif ($acf_fc_layout === 'social') {
        $args = array(
            'tag'      => $tag,
            'id'       => $id,
            'item_tag' => $item_tag,
            'class'    => $class,
        );
        $item_content = displaySocialProfiles($location, $args);
    }
    return $item_content;
}

function acfColumnStyles($content, $styles = array())
{
    extract($styles);
    $classes = array(
        $class,
    );
    foreach ($width as $key => $value) {
        if (empty($value) && $key === 'xs') {
            $classes[] = 'col-12';
        } elseif (!empty($value) && $key === 'xs') {
            $classes[] = 'col-' . $value;
        } elseif (!empty($value) && $key !== 'xs') {
            $classes[] = 'col-' . $key . '-' . $value;
        }
    }
    $args = array(
        'column' => array(
            'id'    => $id,
            'class' => $classes,
            'style' => ''
        )
    );
    return bootpressCol($content, $args);
}
