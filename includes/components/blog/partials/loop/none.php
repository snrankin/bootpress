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
 * Last Modified: 10-5-19 at 11:42 am
 * Modified By:   Sam Rankin <samrankin.dev@gmail.com>
 * -----
 * HISTORY:
 * Date        By    Comments
 * --------    --    --------------------------------------------------------------
 * =========================================================================== */

$args = array(
    'wrapper_classes'       => 'd-md-flex align-items-start border-bottom',
    'body_classes'          => 'w-75',
    'add_image'             => 1,
    'image_wrapper_classes' => 'w-25 embed-responsive border',
    'image_classes'         => 'embed-responsive-item',
    'image_size'            => 'medium',
    'before_title'          => '',
    'add_title'             => 1,
    'title_tag'             => 'h4',
    'title_classes'         => '',
    'after_title'           => '',
    'add_excerpt'           => 1,
    'excerpt_classes'       => '',
    'add_link'              => 1,
    'link_classes'          => 'btn btn-sm btn-primary stretched-link',
    'add_meta'              => 0,
    'meta_classes'          => 'archive-blog-meta',
    'add_author'            => 0,
    'author_classes'        => '',
    'add_date'              => 0,
    'date_classes'          => '',
    'add_tags'              => 0,
    'tag_classes'           => '',
    'add_cats'              => 0,
    'cat_classes'           => '',
);

?>

<div class="col-12">
    <div class="content-wrapper">
        <header class="entry-header">
		<h1 class="entry-title"><?php _e('Nothing Found', 'bootpress'); ?></h1>
	</header>

	<div class="entry-content">
		<p><?php _e('Apologies, but no results were found. Perhaps searching will help find a related post.', 'bootpress'); ?></p>
		<div class="col-sm-6"><?php get_search_form(); ?></div>
	</div><!-- .entry-content -->
    </div>
</div>
