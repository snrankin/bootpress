<?php

/**
 * Function to see if the current page is a posts page
 *
 * @return bool
 */
function isBlog()
{
    global $post;
    $posttype = get_post_type($post);
    return (((is_archive()) || (is_author()) || (is_category()) || (is_home()) || (is_single()) || (is_tag())) && ($posttype == 'post')) ? true : false;
}
function isPhoneNumber($str)
{
    $phone_regex = "/(?(DEFINE)(?'spacers'\s?\.?\-?))^\+?\d?(?P>spacers)((\(\d{3}\)?)|(\d{3}))(?P>spacers)(\d{3})(?P>spacers)(\d{4})/";
    preg_match($phone_regex, $str, $matches);

    if (!empty($matches)) {
        return true;
    } else {
        return false;
    }
}
function isUrl($url)
{
    if (filter_var($url, FILTER_VALIDATE_URL) == true) {
        return true;
    } else {
        return false;
    }
}
