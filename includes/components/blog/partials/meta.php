<?php

/** ============================================================================
 * Description
 * @package BootPress
 * @version <<version>>
 * -----
 * @author Sam Rankin <samrankin.dev@gmail.com>
 * @copyright Copyright (c) 2019 Your Company
 * -----
 * Created Date:  11-25-19
 * Last Modified: 11-25-19 at 4:10 pm
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
$img_metadata = wp_get_attachment_metadata();
$meta_atts = array(
    'tag' => 'footer',
    'class' => array(
        $post_type . '-meta',
        'entry-footer'
    )
);

$content = outputPostMeta($id, array('class' => array('bg-light')));
if (is_singular() && get_the_author_meta('description') && is_multi_author()):
    ob_start();
    getComponent('blog', 'author');
    $content .= ob_get_clean();
endif;

$footer = bootpressItem($content, $meta_atts);

echo $footer;
