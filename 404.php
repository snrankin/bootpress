<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package BootPress
 */

get_header();

getComponent('header', 'header-page');

$content = '<p class="text-center">' . __( 'The page you were looking for could not be found. It might have been removed, renamed, or did not exist in the first place.', THEME_SLUG ) . '</p>';
$content = bootpressItem($content);

$search = get_search_form(false);
$content .= bootpressItem($search);
$content .= bootpressItem('<a href="' . get_home_url() . '" title="' . __('Go Back Home', THEME_SLUG ) . '" class="btn btn-info btn-lrg">' . __('Go Back Home', THEME_SLUG ) . '</a>');


$content = mainCol($content, array('width' => 6, 'content_wrapper' => array('class' => ' align-items-center')));

echo bootpressRow(
	$content,
	array(
		'row' => array(
            'class' => 'justify-content-center',
		),
	)
);

get_footer();
