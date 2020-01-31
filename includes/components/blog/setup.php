<?php

/** ============================================================================
 * Functions for blog
 * @package K&P Attorney
 * @version 1.0.0
 * @author  Sam Rankin <samrankin.dev@gmail.com>
 * -----
 * Created : 12/16/19
 * Modified: 01/09/20 by SR
 * ========================================================================== */


$theme = get_option(THEME_SLUG . '_theme_options');


/**
 * Creating a variable length excerpt
 *
 * @param string $text
 * @param int $length
 * @param int $finish_sentence
 * @param string $excerpt_end
 *
 * @return string
 */
function createVariableLengthExcerpt($text, $length, $finish_sentence = 1, $excerpt_end = '[&hellip;]')
{

    $tokens = array();
    $out    = '';
    $word   = 0;

    //Divide the string into tokens; HTML tags, or words, followed by any whitespace.
    $regex = '/(<[^>]+>|[^<>\s]+)\s*/u';
    preg_match_all($regex, $text, $tokens);
    foreach ($tokens[0] as $t) {
        //Parse each token
        if ($word >= $length && !$finish_sentence) {
            //Limit reached
            break;
        }
        if ($t[0] != '<') {
            //Token is not a tag.
            //Regular expression that checks for the end of the sentence: '.', '?' or '!'
            $regex1 = '/[\?\.\!]\s*$/uS';
            if ($word >= $length && $finish_sentence && preg_match($regex1, $t) == 1) {
                //Limit reached, continue until ? . or ! occur to reach the end of the sentence.
                $out .= trim($t);
                break;
            }
            $word++;
        }
        $out .= $t;
    }

    $out .= $excerpt_end;

    return trim(force_balance_tags($out));
}

/**
 * Outputing the variable length excerpt
 *
 * @param string $text | The original text
 * @param int $length | The length of the excerpt
 * @uses createVariableLengthExcerpt
 *
 * @return string
 */
function variableLengthExcerpt($text, $length = 1)
{

    $text = get_the_content('');
    $text = strip_shortcodes($text);
    $text = apply_filters('the_content', $text);

    $text = str_replace(']]>', ']]&gt;', $text);

    /**By default the code allows all HTML tags in the excerpt**/
    //Control what HTML tags to allow: If you want to allow ALL HTML tags in the excerpt, then do NOT touch.

    //If you want to Allow SOME tags: THEN Uncomment the next line + Line 80.
    $allowed_tags = '<p>,<em>,<strong>'; /* Here I am allowing p, a, strong tags. Separate tags by comma. */

    $text = strip_tags($text, $allowed_tags); /* Line 80 */

    //Create the excerpt.
    $text = createVariableLengthExcerpt($text, $length, 1);
    return $text;
}


/**
 * Output the author and publisher schema
 *
 * @param string|int $id   // The ID of the post
 * @param array $author    // Author args (see personSchema())
 * @param array $publisher // Publisher args (see publisherSchema())
 *
 * @uses personSchema
 * @uses publisherSchema
 *
 * @return string|null
 */
function outputAuthor($id = '', $author = array())
{
    if (empty($id)) {
        // For use in loop
        $id = get_the_id();
    }

    $default_author = array(
        'name' => array(
            'display' => 1,
        ),
    );

    $author = parseArgs($default_author, $author);

    return personSchema($author) . publisherSchema($publisher);
}

/**
 * Output the publisher schema
 *
 * @param string|int $id   // The ID of the post
 * @param array $author    // Author args (see personSchema())
 * @param array $publisher // Publisher args (see publisherSchema())
 *
 * @uses personSchema
 * @uses publisherSchema
 *
 * @return string|null
 */
function outputPublisher($publisher = array())
{

    return publisherSchema($publisher);
}

/**
 * Function for ouputing a custom category list
 *
 * @param string|int $post_id  // The post ID
 * @param string $before       // Content to display before the list
 * @param string $after        // Content to display after the list
 *
 * @return string // An HTML list of categories
 */
function outputCategories($post_id = '', $before = '', $after = '')
{
    global $post;
    $id = $post->ID;
    $id   = (!empty($post_id)) ? $post_id : $id;
    $post_type = get_post_type($id);
    $category_list = '';
    $categories     = get_the_category($id);
    if ($categories) {
        $list_atts = array(
            'class' => array(
                'meta-wrapper',
                $post_type . '-categories'
            )
        );
        $content = array(
            'before' => $before,
            'content' => '',
            'after' => $after
        );
        $items = array();
        foreach ($categories as $category) {
            $link_atts = array(
                'tag'  => 'a',
                'href' => get_category_link($category->term_id),
                'title' => $category->name,
                'class' => array(
                    'meta-item-link',
                    'category-link',
                    $category->slug . '-link'
                )
            );
            $items[] = itemWrapperHTML(__($category->name, THEME_SLUG), $link_atts);
        }

        $content['content'] = implode(', ', $items);

        $category_list = implode('', $content);
        $category_list = itemWrapperHTML($category_list, $list_atts);
    }
    return $category_list;
}
/**
 * Function for ouputing a custom tag list
 *
 * @param string|int $post_id  // The post ID
 * @param string $before       // Content to display before the list
 * @param string $after        // Content to display after the list
 *
 * @return string // An HTML list of tags
 */
function outputTags($post_id = '', $before = '', $after = '')
{
    global $post;
    $id = $post->ID;
    $id   = (!empty($post_id)) ? $post_id : $id;
    $post_type = get_post_type($id);
    $tag_list = '';
    $tags     = get_the_tags($id);
    if ($tags) {
        $list_atts = array(
            'class' => array(
                'meta-wrapper',
                $post_type . '-tags'
            )
        );
        $content = array(
            'before' => $before,
            'content' => '',
            'after' => $after
        );
        $items = array();
        foreach ($tags as $tag) {
            $link_atts = array(
                'tag'  => 'a',
                'href' => get_tag_link($tag->term_id),
                'title' => $tag->name,
                'class' => array(
                    'meta-item-link',
                    'tag-link',
                    $tag->slug . '-link'
                )
            );
            $items[] = itemWrapperHTML(__($tag->name, THEME_SLUG), $link_atts);
        }

        $content['content'] = implode(', ', $items);

        $tag_list = implode('', $content);
        $tag_list = itemWrapperHTML($tag_list, $list_atts);
    }
    return $tag_list;
}


/**
 * Function for ouputing the post date schema (published time and modified time)
 *
 * @param string|int $post_id  // The post ID
 * @param string $before       // Content to display before the list
 * @param string $after        // Content to display after the list
 * @param bool $relative       // Whether to use relative dates
 *
 * @return string|null // An HTML list of time or nothing if it fails
 */
function outputTime($post_id = '', $before = '', $after = '', $relative = true)
{

    $id = $post_id;
    if (empty($post_id)) {
        $id = get_the_ID();
    }

    $post_type = get_post_type($id);
    $time = '';

    $list_atts = array(
        'class' => array(
            'meta-wrapper',
            $post_type . '-date'
        )
    );
    $content = array(
        'before' => $before,
        'content' => '',
        'after' => $after
    );

    $item_atts = array(
        'tag' => 'time',
        'class' => array(
            'meta-item',
            $post_type . '-date'
        )
    );

    $time_args = array(
        'published' => array(
            'show' => 1,
            'format' => '',
            'UTC' => ''
        ),
        'modified' => array(
            'show' => 0,
            'format' => '',
            'UTC' => ''
        )
    );

    $time_args['published']['UTC'] = get_the_date('c', $id);
    $time_args['published']['format'] = ($relative == true) ? __('Posted ' . human_time_diff(get_the_date('U', $id), current_time('U')) . ' ago') : get_the_date(get_option('date_format'), $id);

    $time_args['modified']['UTC'] = get_the_modified_date('c', $id);
    $time_args['modified']['format'] = ($relative == true) ? __(' Modified ' . human_time_diff(get_the_modified_date('U', $id), current_time('U')) . ' ago') : get_the_modified_date(get_option('date_format'), $id);

    foreach ($time_args as $key => $value) {

        if ($value['show'] == 1) {
            $item_atts['datetime'] = $value['UTC'];
            $time .= itemWrapperHTML($value['format'], $item_atts);
        } else {
            $time .= metaItem($value['UTC'], 'date' . toTitleCase($key));
        }
    }

    $content['content'] = $time;

    $time = implode('', $content);
    $time = itemWrapperHTML($time, $list_atts);

    return $time;
}

/**
 * Function for outputing all of the post meta (date, author, tags, categories)
 *
 * @param string|int $post_id
 * @param array $args
 *
 * @uses outputAuthor
 * @uses outputCategories
 * @uses outputTags
 * @uses outputDate
 * @uses itemHTMLWrapper
 *
 * @return string|null
 */
function outputPostMeta($post_id = '', $args = array())
{
    global $post;
    $id = $post->ID;
    $id   = (!empty($post_id)) ? $post_id : $id;
    $post_type = get_post_type($id);
    $item = $post_type;
    $defaults = array(
        'outer_atts' => array(
            'tag' => 'footer',
            'class' =>  array(
                $item . '-footer',
                $item . '-meta',
            )
        ),
        'inner_atts' => array(
            'tag' => 'ul',
            'class' =>  array(
                'list-inline',
            )
        ),
        'add_author'     => 0,
        'author' =>  array(
            'tag'   => 'li',
            'class' => array(
                'list-inline-item',
                $item . '-author',
            )
        ),
        'add_publisher'     => 0,
        'publisher' =>  array(
            'tag'   => 'li',
            'class' => array(
                'list-inline-item',
                $item . '-publisher',
            )
        ),
        'add_date'       => 0,
        'date'   => array(
            'tag'   => 'li',
            'class' => array(
                'list-inline-item',
                $item . '-date',
            )
        ),
        'add_tags'       => 0,
        'tags'    =>  array(
            'tag'   => 'li',
            'class' => array(
                'list-inline-item',
                $item . '-tags',
            )
        ),
        'add_cats'       => 0,
        'cats'    =>  array(
            'tag'   => 'li',
            'class' => array(
                'list-inline-item',
                $item . '-categories',
            )
        ),
    );

    $atts = parseArgs($defaults, $args);
    extract($atts);

    $author_atts = $author['atts'];
    unset($author['atts']);

    $publisher_atts = $publisher['atts'];
    unset($publisher['atts']);

    $date = itemWrapperHTML(outputTime($id), $date);

    $author = itemWrapperHTML(outputAuthor($id, $author_atts), $author);

    $publisher = itemWrapperHTML(outputPublisher($publisher_atts), $publisher);

    $cats = itemWrapperHTML(outputCategories($id), $cats);

    $tags = itemWrapperHTML(outputTags($id), $tags);

    $edit_atts = array(
        'tag'   => 'li',
        'class' => array(
            'list-inline-item',
            $item . '-edit-link',
        )
    );
    $edit_link = get_edit_post_link(__('Edit', THEME_SLUG), '<i class="fas fa-edit"></i> ', '');
    $edit_link = itemWrapperHTML($edit_link, $edit_atts);

    $meta = '';
    $meta .= ($add_date == 1) ? $date : '';
    $meta .= ($add_author == 1) ? $author : '';
    $meta .= ($add_author == 1) ? $author : '';
    $meta .= ($add_publisher == 1) ? $publisher : '';
    $meta .= ($add_cats == 1 && get_the_category_list($id)) ? $cats : '';
    $meta .= ($add_tags == 1 && get_the_tag_list($id)) ? $tags : '';
    $meta .= $edit_link;

    $meta = itemWrapperHTML($meta, $inner_atts);
    $meta = itemWrapperHTML($meta, $outer_atts);


    return $meta;
}

/**
 * Function for outputing a post block item with schema
 * (for use on archive pages)
 *
 * @param string|int $post_id
 * @param array $args
 *
 * @uses outputPostMeta
 * @uses displayImage
 * @uses toKebabCase
 * @uses variableLengthExcerpt
 * @uses itemHTMLWrapper
 *
 * @return string|null
 */
function postGridItem($post_id = '', $args = array())
{
    $post_id   = (!empty($post_id)) ? $post_id : get_the_ID();
    $item = toKebabCase(get_post_type($post_id));
    $defaults = array(
        'wrapper'      => array(
            'tag'       => 'article',
            'id'        => $item . '-' . $post_id,
            'itemscope' => '',
            'itemtype'  => 'http://schema.org/BlogPosting',
            'class'     => get_post_class('', $post_id)
        ),
        'body'         => array(
            'class' => $item . '-info'
        ),
        'add_image'    => 0,
        'image'        => array(
            'id'       => get_post_thumbnail_id($post_id),
            'size'     => 'medium',
            'attr'     => array(
                'alt' => get_the_title($post_id),
            ),
            'bg'       => 0,
            'add_meta' => 1,
            'display'  => 0
        ),
        'before_title' => '',
        'add_title'    => 1,
        'title'        => array(
            'tag'      => 'h4',
            'itemprop' => 'name headline',
            'class'    => $item . '-title',
        ),
        'after_title'  => '',
        'add_excerpt'  => 0,
        'excerpt'      => array(
            'tag'      => 'p',
            'itemprop' => 'description',
            'class'    => $item . '-excerpt',
        ),
        'add_link'     => 0,
        'link'         => array(
            'tag'      => 'a',
            'href'     => get_the_permalink($post_id),
            'title'    => __('Continue Reading ' . the_title_attribute(
                array(
                    'echo' => false,
                    'post' => $post_id,
                )
            ), THEME_SLUG),
            'class'    => $item . '-link',
            'itemprop' => 'url',
            'rel'      => 'bookmark',
        ),
        'add_meta'     => 1,
        'meta'         => array(
            'add_author' => 0,
            'author'     => '',
            'add_date'   => 0,
            'date'       => '',
            'add_cats'   => 0,
            'cats'       => '',
            'add_tags'   => 0,
            'tags'       => '',
        )
    );

    $atts = parseArgs($defaults, $args);
    extract($atts);

    $content = '';

    if ($add_image == 1 && has_post_thumbnail($post_id)) {
        extract($image);
        $image = displayImage($id, $size, $attr, $bg, $add_meta, $display);
    }

    if (!empty($before_title)) {
        $before_title = itemWrapperHTML($before_title['content'], $before_title['atts']);
    }

    if (!empty($after_title)) {
        $after_title = itemWrapperHTML($after_title['content'], $after_title['atts']);
    }

    if ($add_title == 1) {
        $title = itemWrapperHTML(get_the_title($post_id), $title);
        $content .= $before_title . $title . $after_title;
    }
    if ($add_excerpt == 1) {
        if (has_excerpt()) {
            $excerpt_text = get_the_excerpt($post_id);
        } else {
            $excerpt_text = variableLengthExcerpt(get_the_content('', false, $post_id), 20);
        }
        $excerpt_text = str_replace(array(' â¦', 'â¦', 'â'), '', $excerpt_text);
        $content .= itemWrapperHTML(wp_strip_all_tags(wptexturize($excerpt_text)), $excerpt);
    }

    if ($add_link == 0) $link['class'][] = 'stretched-link';

    $content .= itemWrapperHTML(__('Read More', THEME_SLUG), $link);

    if ($add_meta == 1) {
        $content .= outputPostMeta($post_id, $meta);
    }

    $body = itemWrapperHTML($content, $body);

    $post_item = itemWrapperHTML($image . $body, $wrapper);

    return $post_item;
}

/**
 * Archive Navigation Link
 *
 * @author Bill Erickson
 * @link https://www.billerickson.net/custom-pagination-links/
 *
 * @param int $page
 * @param string $class
 * @param string $label
 * @return string $link
 */
function paginationLink($page = false, $class = '', $label = '', $title = '', $current = false)
{

    if (!$page) {
        return;
    }

    $item = array(
        'class' => outputClasses($class, 'page-item d-flex'),
    );

    if ($current == true) {
        $item['aria-current'] = 'page';
    }

    $label = $label ? $label : $page;
    $link  = array(
        'href'  => get_pagenum_link($page),
        'class' => 'page-link flex-fill',
        'title' => __($title),
    );

    $items = '<li ' . outputHTMLData($item) . '>';
    $items .= '<a ' . outputHTMLData($link) . '>' . $label . '</a>';
    $items .= '</li>';
    return $items;
}

/**
 * Archive Navigation
 *
 * @author Bill Erickson
 * @link https://www.billerickson.net/custom-pagination-links/
 *
 */
function pagination()
{

    $pagination = '';

    $settings = array(
        'count'     => 6,
        'prev_text' => '<span class="sr-only">' . __('Previous') . '</span><i class="fas fa-angle-left"></i>',
        'next_text' => '<span class="sr-only">' . __('Next') . '</span><i class="fas fa-angle-right"></i>',
    );

    global $wp_query;
    $current = max(1, get_query_var('paged'));
    $total   = $wp_query->max_num_pages;
    $links   = array();

    // Offset for next link
    if ($current < $total) {
        $settings['count']--;
    }

    // Previous
    if ($current > 1) {
        $settings['count']--;
        $links[] = paginationLink($current - 1, 'prev', $settings['prev_text'], 'Previous Page');
    }

    // Current
    $links[] = paginationLink($current, 'active', '', 'Current Page', true);

    // Next Pages
    for ($i = 1; $i < $settings['count']; $i++) {
        $page = $current + $i;
        if ($page <= $total) {
            $links[] = paginationLink($page, '', '', 'Page ' . $page . ' of ' . $total);
        }
    }

    // Next
    if ($current < $total) {
        $links[] = paginationLink($current + 1, 'next', $settings['next_text'], 'Next Page');
    }

    $content = bp_ScreenReaderText('Posts navigation');

    $pagination       = new BP_Item();
    $pagination->set_tag('nav');
    $pagination->set_class('navigation posts-navigation test');
    $pagination->set_data(array('role' => 'navigation'));

    $content .= '<ul class="pagination">' . join('', $links) . '</ul>';
    $pagination->set_content($content);
    $pagination       = $pagination->build_item();

    return $pagination;
}

/**
 * Generate custom single post navigation (prev/next links)
 *
 * Uses the postGridItem to create custom prev/next links on single post pages
 *
 * @param string $id
 *
 * @uses postGridItem
 * @uses vcItem
 * @uses toTitleCase
 *
 * @return void
 */
function singlePagination($id = '')
{
    $nav = '';
    $post_type = get_post_type($id);

    $nav_atts = array(
        'tag'        => 'nav',
        'role'       => 'navigation',
        'aria-label' => 'Single ' . toTitleCase($post_type) . ' Navigation',
        'class'      => array(
            'single-' . $post_type . '-nav',
            'd-print-none'
        )
    );
    $next_post  = get_adjacent_post(false, '', true);
    $prev_post  = get_adjacent_post(false, '', false);

    if (!empty($prev_post) || !empty($next_post)) {
        if (!empty($prev_post)) {
            $id        = $prev_post->ID;
            $args = array(
                'before_title'          => '<h4>Previous Post:</h4>',
                'title_tag'             => 'h5',
            );
            $nav .= postGridItem($id, $args);
        }
        if (!empty($next_post)) {
            $id        = $next_post->ID;
            $args = array(
                'before_title'          => '<h4>Next Post:</h4>',
                'title_tag'             => 'h5',
            );
            $nav .= postGridItem($id, $args);
        }
        return vcItem($nav, $nav_atts);
    } else {
        return null;
    }
}
