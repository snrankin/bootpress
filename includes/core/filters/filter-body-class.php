<?php

/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function addBodyClasses($classes)
{
    $classes[] = getSlug(get_the_ID());
    if (is_single()) {
        $classes[] = 'post-page';
    } elseif (is_page()) {
        $classes[] = 'content-page';
    } elseif (is_singular()) {
        $classes[] = get_post_type() . '-page';
    } elseif (is_archive() || is_author() || is_category() || is_home() || is_tag()) {
        $classes[] = 'archive-page';
    } elseif (is_404()) {
        $classes[] = 'error-page';
    } elseif (is_search()) {
        $classes[] = 'search-page';
    }
    // Adds a class of hfeed to non-singular pages.
    if (!is_singular()) {
        $classes[] = 'hfeed';
    }

    $bodyClasses = outputClasses($classes);

    return $bodyClasses;
}
add_filter('body_class', 'addBodyClasses');
