<?php

/**
 * Function to create all the image sizes for lazy loading images
 *
 * @param integer|string $id Image ID or external url
 * @param string $size Optional. The maximum size of the image
 *
 * @return array HTML data attributes
 */
function lazySizes($id = '', $size = 'full', $bg = false)
{
    if (is_admin() || empty($id)) {
        return;
    }

    $url = $width  = $height = $srcset = $img_id = '';

    $directory = wp_get_upload_dir();
    $directory = $directory['basedir'];

    if (is_object($id)) {
        $img_id = get_the_ID($id);
    } else {
        $img_id = $id;
    }

    $lazy_sizes = array(
        'data-sizes' => 'auto',
        'class'      => array(
            'lazyload',
            'img-fluid'
        )
    );

    if (is_int($img_id) || is_numeric($img_id)) {
        $img_size = wp_get_attachment_image_src($img_id, $size);
        $srcset = wp_get_attachment_image_srcset($img_id, $size);
        $url = $img_size[0];
        $width  = intval($img_size[1]);
        $height = intval($img_size[2]);
    } elseif (isUrl($img_id)) {
        $url = $img_id;
        $img_size = getimagesize($url);
        $width  = intval($img_size[0]);
        $height = intval($img_size[1]);
    }

    $lazy_sizes['data-src'] = $url;

    if (!empty($srcset)) {
        $lazy_sizes['data-srcset'] = $srcset;
        if ($bg == true) {
            $lazy_sizes['wrapper']['data-bgset'] = $srcset;
        }
    }

    if (!empty($width) && !empty($height)) {
        $lazy_sizes['data-aspectratio'] = ($width / $height);
    }

    if ($bg == true) {
        $lazy_sizes['wrapper']['class'][] = 'bg-img-wrapper';
        $lazy_sizes['wrapper']['data-sizes'] = 'auto';
        $lazy_sizes['wrapper']['data-bg'] = $url;
        $lazy_sizes['data-parent-fit'] = 'cover';
        $lazy_sizes['class'][] = 'bg-img';
        $lazy_sizes['wrapper']['class'][] = 'lazyload';
        if (empty($srcset)) {
            $lazy_sizes['wrapper']['data-bgset'] = $url . ' ' . $width . 'w';
        }
    }

    return $lazy_sizes;
}
