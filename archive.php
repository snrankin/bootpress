<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package BootPress
 */

get_header();

getComponent('header', 'header-page');

$content == '';

if ( is_author() && get_the_author_meta( 'description' ) ) {
	ob_start();
	getComponent('blog', 'author');
	$content = ob_get_clean();
	$content = bootpressItem($content);
} elseif (get_the_archive_description()) {
	$content = bootpressItem(get_the_archive_description());
}

if ( have_posts() ) {
	ob_start();
	while (have_posts()){
		the_post();
		getComponent('blog', '/loop/' . get_post_type());
	}
} else {
	getComponent('blog', '/loop/none');
}
$posts = ob_get_clean();
$content .= bootpressItem($posts, array('class' => 'card-columns'));
$content .= bootpressItem(pagination());


$content = mainCol($content);
$content .= getSidebar();

echo bootpressRow($content);

get_footer();
