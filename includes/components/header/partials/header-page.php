<?php

/** ============================================================================
 * Description
 * @package BootPress
 * @version <<version>>
 * -----
 * @author Sam Rankin <samrankin.dev@gmail.com>
 * @copyright Copyright (c) 2019 Your Company
 * -----
 * Created Date:  11-15-19
 * Last Modified: 12-3-19 at 9:27 am
 * Modified By:   Sam Rankin <samrankin.dev@gmail.com>
 * -----
 * HISTORY:
 * Date    	By	Comments
 * --------	--	--------------------------------------------------------------
 * =========================================================================== */
global $post;
$id = $post->ID;
$slug = $post->post_name;
$post_type = get_post_type($id);
$title_atts = array(
    'tag' => 'h1',
    'id'  => $slug . '-' . $post_type . '-' . $id . '-title',
    'class' => array(
        'display-1',
        'title-page'
    )
);
$title_text = '';

$link_atts = array(
    'tag' => 'a',
    'class' => array(
        'title-page-link'
    )
);

if (is_author()) {
    $link_atts['href'] = get_author_posts_url(get_the_author_meta("ID"));
    $link_atts['title'] = get_the_author();
    $link_atts['rel'] = 'me';
    $title_text = itemWrapperHTML(get_the_author(), $link_atts);
    $title_text = 'Author Archives: ' . $title_text;
} elseif (is_home()) {
    $page_for_posts = get_option('page_for_posts');
    $title_text = get_the_title($page_for_posts);
} elseif (is_search()) {
    $title_text = 'Search Results for: ' . get_search_query();
} elseif (is_404()) {
    $title_text = itemWrapperHTML('Error: 404', array('class' => array('d-block')));
    $title_text .= itemWrapperHTML('Page Not Found', array('class' => array('d-block')));
} elseif (is_archive()) {

    $title_text = get_the_archive_title();
} elseif (is_singular()) {
    $title_text = get_the_title();
}

$title_text = esc_html__($title_text, THEME_SLUG);

$title = bootpressItem($title_text, $title_atts);

$args = array(
    'section_wrapper' => array(
        'tag' => 'header',
        'id'  => $slug . '-' . $post_type . '-' . $id . '-header',
        'class' => array(
            'header-page',
            $post_type . '-header',
        )
    )
);
$column = bootpressCol($title);
$row = bootpressRow($column);
$row = bootpressSection($row, $args);
echo $row;
