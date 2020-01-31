<?php

/** ============================================================================
 * setup
 * @package BootPress
 * @version <<version>>
 * @author  Sam Rankin <samrankin.dev@gmail.com>
 * -----
 * Created:  11-21-19
 * Modified: 12-6-19 at 11:24 am by Sam Rankin <samrankin.dev@gmail.com>
 * =========================================================================== */

function registerSidebars()
{
    $sidebars = themeOptions('sidebars');
    if ($sidebars) {
        foreach ($sidebars as $sidebar) {
            $id   = sanitize_key($sidebar['id']);
            $name = __($sidebar['name'], THEME_SLUG);
            register_sidebar(array(
                'name' => $name,
                'id'   => $id,
                'before_widget' => '<div id="%1$s" class="widget %2$s content-item">',
                'after_widget'  => '</div>',
                'before_title'  => '<h4 class="widget-title h6">',
                'after_title'   => '</h4>',
            ));
        }
    }
}
add_action('acf/save_post', 'registerSidebars', 15);
add_action('after_setup_theme', 'registerSidebars');

function addSidebarChoices($field)
{
    $sidebars = $GLOBALS['wp_registered_sidebars'];
    $field['choices'] = array();
    if ($sidebars) {

        foreach ($sidebars as $sidebar) {
            $id   = $sidebar['id'];
            $name = $sidebar['name'];
            $field['choices'][$id] = $name;
        }
    }
    return $field;
}

add_filter('acf/load_field/name=widget_area', 'addSidebarChoices');

function sidebarCol($content)
{
    $slug = getSlug();
    $id   = getID();

    if (!empty($id)) {
        $item = $slug . '-' . $id;
    }

    $wrapper_classes = array(
        'sidebar',
    );

    $layout  = get_field('sidebar_location', $id);
    $width = themeConfig('sidebar-col-width');

    if ($layout == 'left' || $layout == 'right') {
        $wrapper_classes[] = 'bp_col-' . themeConfig('desktop-bp') . '-' . $width;
        if ($layout == 'left') {
            $wrapper_classes[] = 'bp_order-' . themeConfig('desktop-bp') . '-first';
        }
    }

    $wrapper_classes[] = $width;
    $col       = new BP_Item();
    $col->set_class(get_post_class($wrapper_classes));
    $col->set_tag('aside');
    $col->set_id($item . '-sidebar');
    $col->set_data(array(
        'itemprop' => 'WPSideBar',
        'role'     => 'complementary',
    ));

    $col->set_content($content);

    return $col->build_item();
}

function getSidebar($name = null)
{
    $content = '';
    if (is_active_sidebar($name)) {
        ob_start();
        dynamic_sidebar($name);
        $content = ob_get_clean();
    }

    if (!empty($content)) {
        return sidebarCol($content);
    }
}
