<?php

/** ============================================================================
 * Description
 * @package BootPress Test Project
 * @version <<version>>
 * -----
 * @author Sam Rankin <samrankin.dev@gmail.com>
 * @copyright Copyright (c) 2019 Your Company
 * -----
 * Created Date:  2-4-19
 * Last Modified: 11-15-19 at 2:47 pm
 * Modified By:   Sam Rankin <samrankin.dev@gmail.com>
 * -----
 * HISTORY:
 * Date        By    Comments
 * --------    --    --------------------------------------------------------------
 * =========================================================================== */

function searchForm($args = null)
{
    $label = __('Search Our Site', THEME_SLUG);

    $defaults = array(
        'label'     => __($label, THEME_SLUG),
        'btn_label' => __('Search', THEME_SLUG),
        'form'      => array(
            'id'     => 'form-search',
            'class'  => 'grid-half',
            'action' => esc_url(home_url('/')),
            'role'   => 'search',
            'method' => 'get'
        ),
        'input'     => array(
            'type'        => 'search',
            'value'       => get_search_query(),
            'name'        => 's',
            'placeholder' => __($label, THEME_SLUG),
            'id'          => 's',
            'class'       => 'form-control'
        ),
        'button'    => array(
            'type'  => 'submit',
            'value' => __($label, THEME_SLUG),
            'id'    => 'btn-search',
            'class' => 'btn btn-primary',
        )
    );

    $atts = wp_parse_args( $args, $defaults );

    extract($atts);

    $output = '<form' . outputHTMLData($form) . '>';
    $output .= '<div class="form-group row flex-nowrap"><div class="col-auto flex-fill">';
    $output .= '<label class="sr-only" for="' . $input['id'] . '">' . $label . '</label>';
    $output .= '<input' . outputHTMLData($input) . '>';
    $output .= '</div>';
    $output .= '<div class="col-auto"><button' . outputHTMLData($button) . '>' . $btn_label . '</button></div>';
    $output .= '</div>';
    $output .= '</form>';

    return $output;
};

add_filter('get_search_form', 'searchForm');
