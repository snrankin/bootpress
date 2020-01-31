<?php

function addLazyloadToImages($attr, $attachment, $size)
{
    $id = $attachment->ID;
    $attr['class'] .= ' img-fluid';
    $ratio = lazySizes($id, $size);
    if ($attachment->post_mime_type !== 'image/svg+xml') {
        $attr['class'] .= ' lazyload';
        $attr['data-aspectratio'] = $ratio['data-aspectratio'];
        if (isset($attr['src'])) {
            $attr['data-src'] = $attr['src'];
            $attr['src']      = '';
            unset($attr['src']);
        }
        if (isset($attr['srcset'])) {
            $attr['data-srcset'] = $attr['srcset'];
            $attr['srcset']      = '';
            unset($attr['srcset']);
        }
        if (isset($attr['sizes'])) {
            $attr['data-sizes'] = 'auto';
            $attr['sizes']      = '';
            unset($attr['sizes']);
        } else {
            $attr['data-sizes'] = 'auto';
        }
    } else {
        $attr['class'] .= ' style-svg';
    }
    return $attr;
}

add_filter('wp_get_attachment_image_attributes', 'addLazyloadToImages', 15, 3);
