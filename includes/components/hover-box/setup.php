<?php
function hoverBox($args = array())
{
    $defaults = array(
        'title_text'     => '',
        'title_atts'     => array(
            'tag'   => 'h4',
            'class' => array(
                'hover-box-title'
            ),
        ),
        'subtitle_text' => '',
        'subtitle_atts' => array(
            'tag'   => 'p',
            'class' => array(
                'hover-box-text'
            ),
        ),
        'icon'           => '',
        'link'           => array(
            'tag'    => 'a',
            'href'   => '',
            'class'  => array(
                'hover-box-link',
                'stretched-link'
            ),
        ),
        'image_id'       => '',
        'image_size'     => 'medium',
        'image_atts'     => array(
            'class'           => array(
                'hover-box-image',
                'lazyload',
                'bg-image'
            ),
            'data-parent-fit' => 'cover'
        ),
        'hover_effect'        => 'sadie',
        'atts'                => array(
            'tag'   => 'figure',
            'class' => array(
                'hover-box'
            ),
            'id'    => '',
        )
    );
    $options = parseArgs($defaults, $args);
    extract($options);

    $image = $title = $subtitle = $url = '';

    $icon_atts = array(
        'tag'   => 'i',
        'class' => array(
            'hover-box-icon',
        ),
    );

    if(!empty($icon)){
        $icon_atts['class'] = outputClasses($icon_atts['class'], $icon);
        $icon = itemWrapperHTML('', $icon_atts);
    }

    if(!empty($title_text)){
        $title_text = __($title_text, THEME_SLUG);
        $title      = itemWrapperHTML($title_text, array('tag' => 'span', 'class' => array('hover-box-title-text')));
    }

    if(!empty($subtitle_text)){
        $subtitle_text = __($subtitle_text, THEME_SLUG);
        $subtitle      = itemWrapperHTML($subtitle_text, $subtitle_atts);
    }

    if(!empty($image_id)){
        $lazysizes         = lazySizes($image_id, $image_size, true);
        $image_atts        = array_merge($image_atts, $lazysizes);
        $image             = itemWrapperHTML('', $image_atts);
    }

    if(!empty($link['href'])){
        $link['title'] = esc_attr($title_text);
        $url           = itemWrapperHTML('', $link);
    }

    array_push($atts['class'], 'effect-' . $hover_effect);

    $title = $icon . $title;
    $title = itemWrapperHTML($title, $title_atts);

    $content = itemWrapperHTML($title . $subtitle, array('class' => array('hover-box-content')));
    $content = itemWrapperHTML($content, array('class' => array('hover-box-content-wrapper-inner')));
    $content = itemWrapperHTML($content . $url, array('class' => array('hover-box-content-wrapper')));
    $hover_box = bootpressItem($image . $content, $atts);

    return $hover_box;
}
?>
