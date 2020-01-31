<?php

/**
 * Function to add schema and lazyloading to videos
 *
 * @param string $src
 * @param array $args
 * @param bool $display
 *
 * @return string
 */
function displayVideo($src = '', $args = array(), $display = false)
{
    if (is_admin() || empty($src)) {
        return;
    }

    $defaults = array(
        'remove_wrapper' => false,
        'host'  => '',
        'url'   => '',
        'width' => '',
        'height' => '',
        'thumb' => '',
        'video_wrapper' => array(
            'class'     => array(
                'embed-responsive',
                'video-wrapper'
            ),
        ),
        'video' => array(
            'class' => array(
                'embed-responsive-item',
                'lazyload'
            ),
        ),
        'wrapper' => array(
            'tag' => 'figure',
            'class'     => array(
                'video-embed',
                'd-print-none',
            ),
            'itemprop'  => 'video',
            'itemscope' => '',
            'itemtype'  => 'http://schema.org/VideoObject',
        ),
        'caption'   => array(
            'content' => '',
            'tag' => 'figcaption',
            'class' => array('figure-caption', 'sr-only'),
        ),
        'title' => array(
            'content' => '',
            'tag'   => 'h5',
            'class' => array('video-title', 'sr-only'),
            'itemprop' => 'name'
        ),
        'desc'  => array(
            'content' => '',
            'tag'   => 'p',
            'class' => array('video-description', 'sr-only'),
            'itemprop' => 'description'
        ),
        'date'  => '',
    );

    $atts = parseArgs($args, $defaults);

    extract($atts);

    if (empty($src)) {
        return;
    }

    $wrapper['class'][] = 'type-' . $host;

    if (empty($width)) $width = intval($width);
    if (empty($height)) $height = intval($height);

    $video_meta_items = array(
        array(
            'itemprop' => 'contentURL',
            'content'  => $url
        ),
        array(
            'itemprop' => 'embedURL',
            'content'  => $url
        ),
        array(
            'itemprop' => 'uploadDate',
            'content'  => $date
        ),
        array(
            'itemprop' => 'width',
            'content'  => $width
        ),
        array(
            'itemprop' => 'height',
            'content'  => $height
        ),
        array(
            'itemprop' => 'thumbnailUrl',
            'content'  => $thumb
        ),
    );

    $schema = '';

    foreach ($video_meta_items as $item) {
        $schema .= '<meta' . outputHTMLData($item) . '>';
    }

    if (!empty($width) && !empty($height)) {
        $percentage = ($height / $width) * 100;
        $percentage = round($percentage, 2);
        $percentage = strval($percentage) . '%';
        $ratio = getRatio($width, $height, 'by');
        $allowed_ratios = array(
            '21by9',
            '16by9',
            '4by3',
            '3by4',
            '3by2',
            '2by3',
            '2by1',
            '1by2',
            '1by1'
        );
        if (in_array($ratio, $allowed_ratios)) {
            $video_wrapper['class'][] = 'embed-responsive-' . $ratio;
        } else {
            $video_wrapper['style']['padding-bottom'] = $percentage;
            $video['data-aspectratio'] = getRatio($width, $height, '/');
        }
    }

    if (!empty($thumb)) {
        $thumb = displayImage($thumb, 'full', array(), true);
    }
    $content = '';
    $video_content = $schema;
    if ($host === 'youtube' || $host === 'vimeo') {
        if ($host === 'youtube') {
            $video_wrapper['data-ytparams'] = 'modestbranding=1&playsinline=1';
            $video_wrapper['data-youtube'] = $src;
        } elseif ($host === 'vimeo') {
            $video_wrapper['data-vimeoparams'] = 'byline=0&responsive=1&title=0&autoplay=0&portrait=0';
            $video_wrapper['data-vimeo'] = $src;
        }
        $video_wrapper['class'] = outputClasses($video_wrapper['class'], array('bg-image', 'bg-image-xc-yc', 'lazyload'));
        $video['class'] = outputClasses($video['class'], array('d-flex', 'flex-column', 'justify-content-center', 'align-items-center'));

        $icon = iconFont('fas fa-play-circle', 'Play Video');
        $icon = itemWrapperHTML($icon, array('tag' => 'button', 'class' => 'play-btn btn btn-link bg-transparent p-0'));
        $video_content .= itemWrapperHTML($icon, $video);
    } elseif ($host === 'iframe') {
        $video['tag'] = 'iframe';
        $video['data-src'] = $video['src'];
        $video['allowfullscreen'] = '';
        $video['data-src'] = $video['src'];
        $video['frameborder'] = 0;
        $video['class'][] = 'lazyload';
        $video_content .= itemWrapperHTML('', $video);
    } else {
        $video['tag'] = 'video';
        $video['controls'] = '';

        $srcs = '';
        if (is_array($src)) {
            foreach ($src as $video_src) {
                $srcs .= '<source data-src="' . $video_src['url'] . '" type="' . $video_src['type'] . '">';
            }
        }
        $srcs .= __('Your browser does not support the video tag.', THEME_SLUG);
        $video_content .= itemWrapperHTML($srcs, $video);
    }

    // ---------------------------- Video Output ---------------------------- //

    $video_content = itemWrapperHTML($video_content, $video_wrapper);
    $content .= $video_content;

    // ------------------------- Widget/Block Title ------------------------- //

    if (isset($title['content']) && !empty($title['content'])) {
        $item_content = $title['content'];
        unset($title['content']);
        $content .= itemWrapperHTML($item_content, $title);
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
