<?php

/**
 * Function to output a better image structure.
 *
 * Outputs an image structure that allows for lazyloading and image schema
 *
 * @param integer $id image id
 * @param string $size Maximum size of the image
 * @param array $attr Additional attributes
 * @param boolean $display Whether or not the value should be echoed or returned
 *
 * @return string|null
 *
 */

function displayImage($id = '', $size = 'full', $attr = array(), $bg = false, $add_meta = 0, $display = false)
{
    if (is_admin() || empty($id)) {
        return;
    }

    $content = $img = $img_meta = $schema = $output = '';

    $defaults = array(
        'remove_wrapper' => false,
        'wrapper' => array(
            'class'     => array('image-wrapper'),
        ),

        'block_title' => array(
            'content' => '',
            'tag' => 'h4',
            'class' => array('widget-title'),
        ),
        'caption'   => array(
            'content' => '',
            'tag' => 'figcaption',
            'class' => array('figure-caption'),
        ),
        'class' => array()
    );

    /**
     * Add lazyloading info to default array first in case there are any
     * overrides from $args
     */
    $defaults = parseArgs($defaults, lazySizes($id, $size, $bg));
    $attr = parseArgs($defaults, $attr);

    if (is_int($id) || is_numeric($id)) {
        // If the image is found in Wordpress
        $img_meta = bp_GetAttachmentMeta($id);
        $img_meta_items = array(
            array(
                'itemprop' => 'url',
                'content'  => $img_meta['src']
            ),
            array(
                'itemprop' => 'width',
                'content'  => $img_meta['width']
            ),
            array(
                'itemprop' => 'height',
                'content'  => $img_meta['height']
            )
        );

        if (isset($img_meta['thumbnail']) && !empty($img_meta['thumbnail'])) {
            $thumb = array(
                'itemprop' => 'thumbnail',
                'content'  => $img_meta['thumbnail']['src']
            );
            $img_meta_items[] = $thumb;
        }

        // Only add the title if there isn't one already set

        if ((!isset($attr['title']) || empty($attr['title'])) && (isset($img_meta['title']) || !empty($img_meta['title']))) {
            $attr['title'] = $img_meta['title'];
        }

        // Only add the alt if there isn't one already set

        if ((!isset($attr['alt']) || empty($attr['alt'])) && (isset($img_meta['alt']) || !empty($img_meta['alt']))) {
            $attr['alt'] = $img_meta['alt'];
        }

        foreach ($img_meta_items as $item) {
            $schema .= metaItem($item['content'], $item['itemprop']);
        }
    }

    $wrapper = $attr['wrapper'];
    unset($attr['wrapper']);

    $block_title = $attr['block_title'];
    unset($attr['block_title']);

    $remove_wrapper = $attr['remove_wrapper'];
    unset($attr['remove_wrapper']);

    $caption = $attr['caption'];
    unset($attr['caption']);


    // ------------------------- Widget/Block Title ------------------------- //

    if (isset($block_title['content']) && !empty($block_title['content'])) {
        $item_content = $block_title['content'];
        unset($block_title['content']);
        $content .= itemWrapperHTML($item_content, $block_title);
    }

    // ------------------------------ Meta Tags ----------------------------- //

    if ($add_meta == true) {
        $wrapper['itemprop'] = 'image';
        $wrapper['itemscope'] = '';
        $wrapper['itemtype'] = 'http://schema.org/ImageObject';
        $content .= $schema;
        $attr['itemprop'] = 'contentUrl';
    }

    // ---------------------------- Image Output ---------------------------- //

    $img = '<img' . outputHTMLData($attr) . '/>';
    if ($bg != true) {
        $content .= $img;
    }



    // ------------------------------- Caption ------------------------------ //

    if (isset($caption['content']) && !empty($caption['content'])) {
        $item_content = $caption['content'];
        unset($caption['content']);
        $content .= itemWrapperHTML($item_content, $caption);
    }

    // ------------------------------- Wrapper ------------------------------ //

    if ($remove_wrapper != true) {
        $content = itemWrapperHTML($content, $wrapper);
    }

    // ------------------------------- Display ------------------------------ //

    if ($display == true) {
        echo $content;
    } else {
        return $content;
    }
}
