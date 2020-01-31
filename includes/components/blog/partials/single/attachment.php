<?php

/** ============================================================================
 * Description
 * @package BootPress
 * @version <<version>>
 * -----
 * @author Sam Rankin <samrankin.dev@gmail.com>
 * @copyright Copyright (c) 2019 Your Company
 * -----
 * Created Date:  10-21-19
 * Last Modified: 11-25-19 at 4:09 pm
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
$post_class = get_post_class(array('content-page', $post_type . '-content'), $id );

$image = wp_get_attachment_image( $id, 'full', false, array('class' => 'figure-img'));

$description = $post->post_content;

$description_atts = array(
	'tag'   => 'figcaption',
    'class' => array('figure-caption'),
);

if(!empty($description)) {
	$description = itemWrapperHTML($description, $description_atts);
}

$atts = array(
	'tag'   => 'figure',
	'id'  => $slug . '-' . $post_type . '-' . $id . '-content',
    'class' => $post_class,
);

$args = array(
        'section_wrapper' => array(
            'tag' => 'section',
            'id'  => $slug . '-' . $post_type . '-' . $id . '-content',
            'class' => array(
                'content-page',
                $post_type . '-content',
            )
        )
    );

$attachment = bootpressItem($image . $description, $atts);
echo $attachment;

    getComponent('blog', 'meta');
?>
