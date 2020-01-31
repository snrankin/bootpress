<?php

/**
 * Summary (no period for file headers)
 *
 * Description. (use period)
 *
 * @link URL
 *
 * @package WordPress
 * @subpackage Component
 * @since x.x.x (when the file was introduced)
 */
/**
 * Function for getting custom meta for an image
 * @param int $attachment_id
 * @param string $size
 *
 * @return array [
 *     'alt',
 *     'caption',
 *     'description',
 *     'title',
 *     'width',
 *     'height',
 *     'src',
 *     'full' => [
 *         'width',
 *         'height',
 *         'src'
 *     ],
 *     'thumbnail' => [
 *         'width',
 *         'height',
 *         'src'
 *     ]
 * ]
 */
if (!function_exists('bp_GetAttachmentMeta')) {
    function bp_GetAttachmentMeta($attachment_id, $size = 'full')
    {
        $attachment = get_post($attachment_id);
        $meta = wp_get_attachment_metadata($attachment_id);
        extract($meta);
        $directory = dirname(wp_get_original_image_url($attachment_id));
        $img_meta = array();
        $alt = get_post_meta($attachment_id, '_wp_attachment_image_alt', true);
        $caption = $attachment->post_excerpt;
        $description = $attachment->post_content;
        $title = $attachment->post_title;
        if (!empty($alt)) {
            $img_meta['alt'] = $alt;
        }
        if (!empty($caption)) {
            $img_meta['caption'] = $caption;
        }
        if (!empty($description)) {
            $img_meta['description'] = $description;
        }
        if (!empty($title)) {
            $img_meta['title'] = $title;
        }
        $full_size = array(
            'width' => $width,
            'height' => $height,
            'src' => wp_get_original_image_url($attachment_id)
        );
        if ($size !== 'full') {
            $img_meta['width'] = $sizes[$size]['width'];
            $img_meta['height'] = $sizes[$size]['height'];
            $img_meta['src'] = $directory . '/' . $sizes[$size]['file'];
            $img_meta['full'] = $full_size;
        } else {
            $img_meta = array_merge($img_meta, $full_size);
        }

        if (isset($sizes['thumbnail'])) {
            $img_meta['thumbnail'] = array(
                'width' => $sizes['thumbnail']['width'],
                'height' => $sizes['thumbnail']['height'],
                'src' => $directory . '/' . $sizes['thumbnail']['file']
            );
        }
        return $img_meta;
    }
}
