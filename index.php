<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package BootPress
 */

get_header();

getComponent('header', 'header-page');

$content = '';

if ( get_the_archive_description() ) {
	$archive_desc = new BP_Item(get_the_archive_description());
	$content .= $archive_desc->build_item();
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
$content .= pagination();


$content = mainCol($content);
$content .= getSidebar();

echo bootpressRow($content);

get_footer();
