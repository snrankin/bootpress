<?php

/**
 * Remove extra image sizes so that the site itsn't bogged down with THOUSANDS
 * of uncessary images
 *
 * @return void
 */
function themeImageSizes()
{
    $sizes = get_intermediate_image_sizes();
    foreach ($sizes as $size) {
        if (!in_array($size, array('thumbnail', 'medium', 'large'))) {
            remove_image_size($size);
        }
    }

    update_option('thumbnail_size_w', 320, true);
    update_option('thumbnail_size_h', 320, true);
    update_option('thumbnail_crop', 0, true);
    add_image_size('medium_sm', 576, 864);
    update_option('medium_size_w', 768, true);
    update_option('medium_size_h', 1152, true);
    update_option('medium_crop', 0, true);
    add_image_size('medium_lg', 1024, 1536);
    update_option('large_size_w', 1280, true);
    update_option('large_size_h', 1920, true);
    update_option('large_crop', 0, true);
    add_image_size('large_lg', 1440, 2160);

    array_merge($sizes, array(
        'medium_sm'   => __('Large Phone (576px)'),
        'medium_lg'   => __('Tablet Landscape (1024px)'),
        'large_lg'    => __('Large Desktop (1440px)'),
    ));

    return $sizes;
}
// Initialized as late as possible to prevent plugins from adding sizes
add_action('init', 'themeImageSizes', 999);
