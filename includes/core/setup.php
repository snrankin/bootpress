<?php

/** ============================================================================
 * Core Setup
 * @package BootPress
 * @version 1.0.0
 * @author  Sam Rankin <samrankin.dev@gmail.com>
 * ========================================================================== */

function themeConfig($val)
{
    $json_file = THEME_CONFIG_PATH;
    if (file_exists($json_file)) {
        $theme_json   = file_get_contents($json_file);
        $theme_config = json_decode($theme_json, true);
        $option = $theme_config[$val];
        return $option;
    } else {
        return false;
    }
}

// Ping functions
function themeCustomPings($comment)
{
    $GLOBALS['comment'] = $comment;
    echo '<li ' . comment_class() . ' id="li-comment-' . comment_ID() . '">' . comment_author_link() . '</li>';
}

function getUrls($string)
{
    //adapted from: https://stackoverflow.com/questions/11588542/get-all-urls-in-a-string-with-php
    $regex = '/https?\:\/\/[^\" \n]+/i';
    preg_match_all($regex, $string, $matches);
    //note below that we use $matches[0], this is because we have an array of arrays
    return $matches[0];
}

/**
 * Function to get the slug of a post
 *
 * @param integer $post_id The id of post, defaults to current post
 *
 * @return string $slug The post slug
 */

function getSlug($post_id = null)
{
    $slug = '';
    $post = get_post($post_id);
    $object = get_queried_object();

    if (!empty($post)) {
        $slug   = $post->post_name;
    } elseif (!empty($object)) {
        $slug = $object->name;
    }
    return $slug;
}
/**
 * Get an item id from its slug (useful for shortcodes so the user does not have
 * to find the id manually)
 *
 * @param array $styles
 *
 * @return integer post id
 */

function getIdBySlug($slug, $type)
{
    $item = get_page_by_path($slug, object, $type);
    if ($item) {
        return $item->ID;
    } else {
        return null;
    }
}

// ========================================================================== //
// ============================= Core Functions ============================= //
// ========================================================================== //

require_once INCLUDES_PATH . '/core/functions/validation.php';
require_once INCLUDES_PATH . '/core/functions/formatting.php';
require_once INCLUDES_PATH . '/core/functions/function-attachment-meta.php';
require_once INCLUDES_PATH . '/core/functions/function-lazyloading.php';
require_once INCLUDES_PATH . '/core/functions/function-display-images.php';
require_once INCLUDES_PATH . '/core/functions/function-display-videos.php';

// ========================================================================== //
// ============================== Core Classes ============================== //
// ========================================================================== //

require_once INCLUDES_PATH . '/core/classes/class-bootpress-item.php';
require_once INCLUDES_PATH . '/core/classes/class-wp-bootstrap-navwalker.php';

// ========================================================================== //
// ============================== Core Filters ============================== //
// ========================================================================== //

require_once INCLUDES_PATH . '/core/filters/filter-body-class.php';
require_once INCLUDES_PATH . '/core/filters/filter-add-link-titles.php';
require_once INCLUDES_PATH . '/core/filters/filter-lazyload-images.php';

// ========================================================================== //
// ============================== Core Actions ============================== //
// ========================================================================== //

require_once INCLUDES_PATH . '/core/actions/action-image-sizes.php';
require_once INCLUDES_PATH . '/core/actions/action-theme-setup.php';
require_once INCLUDES_PATH . '/core/actions/action-add-styles.php';
require_once INCLUDES_PATH . '/core/actions/action-add-scripts.php';
require_once INCLUDES_PATH . '/core/actions/action-favicons.php';
require_once INCLUDES_PATH . '/core/actions/action-async-fonts.php';
