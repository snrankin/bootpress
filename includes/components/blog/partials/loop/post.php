<?php

/** ============================================================================
 * Description
 * @package BootPress Test Project
 * @version <<version>>
 * -----
 * @author Sam Rankin <samrankin.dev@gmail.com>
 * @copyright Copyright (c) 2019 Your Company
 * -----
 * Created Date:  2-4-19
 * Last Modified: 11-11-19 at 9:31 am
 * Modified By:   Sam Rankin <samrankin.dev@gmail.com>
 * -----
 * HISTORY:
 * Date        By    Comments
 * --------    --    --------------------------------------------------------------
 * =========================================================================== */

$args = array(
    'wrapper_classes'       => 'card',
    'body_classes'          => '',
    'add_image'             => 1,
    'image_wrapper_classes' => 'card-img-top',
    'image_classes'         => 'embed-responsive-item',
    'image_size'            => 'medium',
    'before_title'          => '',
    'add_title'             => 1,
    'title_tag'             => 'h4',
    'title_classes'         => 'card-title',
    'after_title'           => '',
    'add_excerpt'           => 1,
    'excerpt_classes'       => 'card-text',
    'add_link'              => 1,
    'link_classes'          => 'btn btn-sm btn-primary stretched-link',
    'add_meta'              => 1,
    'meta_classes'          => 'archive-blog-meta card-footer',
    'add_author'            => 1,
    'author_classes'        => '',
    'add_date'              => 1,
    'date_classes'          => '',
    'add_tags'              => 1,
    'tag_classes'           => '',
    'add_cats'              => 1,
    'cat_classes'           => '',
);

echo postGridItem(get_the_ID(), $args);
