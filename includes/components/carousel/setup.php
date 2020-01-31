<?php

/** ============================================================================
 * setup
 * @package K&P Attorney
 * @version 1.0.0
 * @author  Sam Rankin <samrankin.dev@gmail.com>
 * -----
 * Created : 07/25/19
 * Modified: 01/09/20 by SR
 * ========================================================================== */

/**
 * Create a carousel using owlCarousel.js
 *
 * @param string $content
 * @param array $args
 *
 * return string|null
 */

function bpCarousel($content = '', $args = array())
{
    if (empty($content)) return;
    $defaults = array(
        'wrapper' => array(
            'class'             => array(
                'owl-carousel',
                'bp-carousel'
            ),
        ),
        'carousel' => array()
    );
    $options = parseArgs($defaults, $args);
    extract($options);

    // Encode the options so that they are custom to each instance
    $json = json_encode($carousel);

    $wrapper['data-owlcarousel'] = $json;

    $carousel = itemWrapperHTML($content, $wrapper);

    return $carousel;
}
