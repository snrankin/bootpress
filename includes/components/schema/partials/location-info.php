<?php

/** ============================================================================
 * Functions for generating local schema
 * @package <<projectname>>
 * @version <<projectversion>>
 * @author  Sam Rankin <samrankin.dev@gmail.com>
 * -----
 * Created : 03/01/19
 * Modified: 01/12/20 by SR
 * ========================================================================== */


function displayAddress($location = 'main', $args = array())
{
    $item = 'address';

    $location_item = getLocationItem($item, $location);

    if (empty($location_item)) {
        return;
    } else {
        extract($location_item);
    }

    $street = (!empty($info['unit'])) ? $info['street'] . ' ' . $info['unit'] : $info['street'];

    $full = $street . ' ' . $info['locality'] . ' ' . $info['region'] . ' ' . $info['postal'];

    $url = (!empty($map_url)) ? $location_item['$map_url'] : 'http://maps.google.com/?q=' . urlencode($full);

    $defaults = array(
        'wrapper' => array(
            'tag'   => 'div',
            'class' => array(
                'address',
                'schema-item'
            ),
        ),
        'atts'  => array(
            'tag'   => 'address',
            'class' => 'schema-item-text'
        ),
        'link'  => array(
            'add'  => 1,
            'atts' => array(
                'href'   => $url,
                'title'  => __('Get Directions', THEME_SLUG),
                'rel'    => 'nofollow',
                'target' => '_blank',
            )
        ),
    );

    $options = parseArgs($defaults, $args);

    extract($options);

    $address = formatAddress($info);

    $schema_info .= formatSchemaItem($address, $options);

    return $schema_info;
}


function displayPhone($location = 'main', $args = array())
{

    $location_item = getLocationItem('phone', $location);

    if (empty($location_item)) {
        return;
    } else {
        extract($location_item);
    }

    $url = formatPhoneURL($info);

    $defaults = array(
        'wrapper' => array(
            'class' => array(
                'phone',
                'schema-item'
            )
        ),
        'icon'  => '',
        'link'  => array(
            'add'  => true,
            'atts' => array(
                'href'   => $url,
                'title'  => __('Place A Call to ' . $url, THEME_SLUG),
                'rel'    => 'nofollow',
                'target' => '_self',
                'class'  => 'schema-info-link',
            )
        ),
    );

    $options = parseArgs($defaults, $args);

    extract($options);

    $schema_info = formatSchemaItem($info, $options);

    return $schema_info;
}


function displayFax($location = 'main', $args = array())
{

    $location_item = getLocationItem('fax', $location);

    if (empty($location_item)) {
        return;
    } else {
        extract($location_item);
    }

    $defaults = array(
        'wrapper' => array(
            'class' => array(
                'fax',
                'schema-item'
            ),
        ),
        'link'  => array(
            'add'  => false,
        ),
    );

    $options = parseArgs($defaults, $args);

    extract($options);

    $schema_info = formatSchemaItem($info, $options);

    return $schema_info;
}

function displayEmail($location = 'main', $args = array())
{

    $location_item = getLocationItem('email', $location);

    if (empty($location_item)) {
        return;
    } else {
        extract($location_item);
    }

    $defaults = array(
        'wrapper' => array(
            'class' => array(
                'email',
                'schema-item'
            ),
        ),
        'link'  => array(
            'add'  => true,
            'atts' => array(
                'href'   => $info,
                'title'  => __('Email us at ' . $info, THEME_SLUG),
                'rel'    => 'nofollow',
                'target' => '_self',
                'class'  => 'schema-info-link',
            )
        ),
    );

    $options = parseArgs($defaults, $args);

    extract($options);

    $schema_info .= formatSchemaItem($info, $options);

    return $schema_info;
}


function displayBusinessHours($location = 'main', $args = array())
{

    $location_item = getLocationItem('business_hours', $location);

    if (empty($location_item)) {
        return;
    } else {
        extract($location_item);
    }

    $defaults = array(
        'tag'   => 'div',
        'class' => array(
            'business-hours',
            'schema-item'
        ),
        'title' => '',
        'icon'  => '',
        'atts'  => array(),
        'link'  => array(
            'add'  => false,
        )
    );

    $options = parseArgs($defaults, $args);

    extract($options);

    $hours = formatBusinessHours($location_item['info']);

    $schema_info = formatSchemaItem($hours, $options);

    return $schema_info;
}


function displayLocationInfo($location = 'main', $args = array())
{
    $location_item = getLocationItem('', $location);

    if (empty($location_item)) {
        return;
    } else {
        $location_item;
    }

    $defaults = array(
        'title'       => '',
        'add_address' => 0,
        'add_phone'   => 0,
        'add_fax'     => 0,
        'add_email'   => 0,
        'add_hob'     => 0,
        'address'     => '',
        'phone'       => '',
        'fax'         => '',
        'email'       => '',
        'hob'         => '',
        'wrapper'     => array(
            'tag'         => '',
            'id'          => '',
            'class'       => 'schema-info',
            'style'       => '',
        )
    );

    $options = parseArgs($defaults, $args);

    extract($options);

    $content = '';

    if (!empty($title)) {
        $content .= itemWrapperHTML(__($title, THEME_SLUG), array('tag' => 'h4', 'class' => 'widget-title schema-title'));
    }

    if ($add_address == 1) {
        $content .= displayAddress($location, $address);
    }

    if ($add_phone == 1) {
        $content .= displayPhone($location, $phone);
    }

    if ($add_fax == 1) {
        $content .= displayFax($location, $fax);
    }

    if ($add_email == 1) {
        $content .= displayEmail($location, $email);
    }

    if ($add_hob == 1) {
        $content .= displayBusinessHours($location, $hob);
    }

    if (!empty($wrapper['tag'])) {
        $schema_info = itemWrapperHTML($content, $wrapper);
    } else {
        $schema_info = $content;
    }



    return $schema_info;
}


function displayInfoShortcode($atts)
{
    // Attributes
    $atts = shortcode_atts(
        array(
            'location'           => 'main',
            'id'                 => '',
            'tag'                => '',
            'class'              => '',
            'title'              => '',
            'style'              => '',
            'add_address'        => 0,
            'address_tag'        => '',
            'address_class'      => '',
            'address_title'      => '',
            'address_icon'       => '',
            'address_link'       => '',
            'address_link_class' => '',
            'address_link_title' => '',
            'address_link_url'   => '',
            'add_email'          => 0,
            'email_tag'          => '',
            'email_class'        => '',
            'email_title'        => '',
            'email_icon'         => '',
            'email_link'         => '',
            'email_link_class'   => '',
            'email_link_title'   => '',
            'email_link_url'     => '',
            'add_phone'          => 0,
            'phone_tag'          => '',
            'phone_class'        => '',
            'phone_title'        => '',
            'phone_icon'         => '',
            'phone_link'         => '',
            'phone_link_class'   => '',
            'phone_link_title'   => '',
            'phone_link_url'     => '',
            'add_fax'            => 0,
            'fax_tag'            => '',
            'fax_class'          => '',
            'fax_title'          => '',
            'fax_icon'           => '',
            'add_hob'            => 0,
            'hob_tag'            => '',
            'hob_class'          => '',
            'hob_title'          => '',
            'hob_icon'           => '',
        ),
        $atts
    );

    extract($atts);

    $args = array(
        'title'       => $title,
        'add_address' => intval($add_address),
        'add_phone'   => intval($add_phone),
        'add_fax'     => intval($add_fax),
        'add_email'   => intval($add_email),
        'add_hob'     => intval($add_hob),
        'address'     => array(
            'title' => $address_title,
            'icon'  => $address_icon,
            'wrapper' => array(
                'tag'   => $address_tag,
                'class' => $address_class,
            ),
            'link'  => array(
                'add'  => $address_link,
                'atts' => array(
                    'title'  => __($address_link_title, THEME_SLUG),
                    'class'  => $address_link_class,
                )
            ),
        ),
        'phone'       => array(
            'wrapper' => array(
                'tag'   => $phone_tag,
                'class' => $phone_class,
            ),
            'title' => $phone_title,
            'icon'  => $phone_icon,
            'link'  => array(
                'add'  => $phone_link,
                'atts' => array(
                    'title'  => __($phone_link_title, THEME_SLUG),
                    'class'  => $phone_link_class,
                )
            ),
        ),
        'fax'         => array(
            'wrapper' => array(
                'tag'   => $fax_tag,
                'class' => $fax_class,
            ),
            'title' => $fax_title,
            'icon'  => $fax_icon
        ),
        'email'       => array(
            'wrapper' => array(
                'tag'   => $email_tag,
                'class' => $email_class,
            ),
            'title' => $email_title,
            'icon'  => $email_icon,
            'link'  => array(
                'add'  => $email_link,
                'atts' => array(
                    'title'  => __($email_link_title, THEME_SLUG),
                    'class'  => $email_link_class,
                )
            ),
        ),
        'hob'         => array(
            'tag'   => $hob_tag,
            'class' => $hob_class,
            'title' => $hob_title,
            'icon'  => $hob_icon
        ),
        'wrapper'     => array(
            'tag'         => $tag,
            'id'          => $id,
            'class'       => $class,
            'style'       => $style,
        )
    );

    $info = displayLocationInfo($location, $args);

    return $info;
}
add_shortcode('company_info', 'displayInfoShortcode');

function displayAddressShortcode($atts)
{
    // Attributes
    $atts = shortcode_atts(
        array(
            'location'   => 'main',
            'id'         => '',
            'tag'        => '',
            'class'      => '',
            'style'      => '',
            'title'      => '',
            'icon'       => '',
            'add_link'   => '',
            'link_class' => '',
            'url'        => '',
        ),
        $atts
    );

    extract($atts);

    $locations = explode(',', $location);

    $args = array(
        'title'   => $title,
        'wrapper' => array(
            'tag'         => $tag,
            'id'          => $id,
            'class'       => $class,
            'style'       => $style,
        ),
        'icon'  => array(
            'icon' => $icon,
        ),
        'link'  => array(
            'add'  => $add_link,
            'atts' => array(
                'href'   => $url,
                'title'  => $title,
                'class'  => $link_class,
            )
        ),
    );

    $address = '';

    foreach ($locations as $location) {
        if ($title === 'title') {
            $title = getLocationItem('location_name', $location);
            $args['title'] = $title['info'];
            $title = 'title';
        }
        $address .= displayAddress($location, $args);
    }

    return $address;
}
add_shortcode('address', 'displayAddressShortcode');


function displayPhoneShortcode($atts)
{
    // Attributes
    $atts = shortcode_atts(
        array(
            'location'   => 'main',
            'id'         => '',
            'tag'        => '',
            'class'      => '',
            'style'      => '',
            'title'      => '',
            'icon'       => '',
            'add_link'   => '',
            'link_class' => '',
            'url'        => '',
        ),
        $atts
    );

    extract($atts);

    $args = array(
        'title'   => $title,
        'wrapper' => array(
            'tag'         => $tag,
            'id'          => $id,
            'class'       => $class,
            'style'       => $style,
        ),
        'icon'  => array(
            'icon' => $icon,
        ),
        'link'  => array(
            'add'  => $add_link,
            'atts' => array(
                'href'   => $url,
                'title'  => $title,
                'class'  => $link_class,
            )
        ),
    );

    $phone = displayPhone($location, $args);

    return $phone;
}
add_shortcode('phone', 'displayPhoneShortcode');


function displayContactInfoShortcode($atts)
{
    // Attributes
    $atts = shortcode_atts(
        array(
            'location'   => 'main',
            'id'         => '',
            'tag'        => '',
            'class'      => '',
            'style'      => '',
            'title'      => '',
            'icon'       => '',
            'add_link'   => '',
            'link_class' => '',
            'url'        => '',
        ),
        $atts
    );

    extract($atts);

    $args = array(
        'wrapper' => array(
            'tag'         => $tag,
            'id'          => $id,
            'class'       => $class,
            'style'       => $style,
        ),
        'icon'  => $icon,
        'link'  => array(
            'add'  => $add_link,
            'atts' => array(
                'href'   => $url,
                'title'  => $title,
                'class'  => $link_class,
            )
        ),
    );

    $phone = iconFont('fas fa-phone');
    $phone = itemWrapperHTML($phone, array('tag' => 'span', 'class' => 'fa-li'));
    $phone = $phone . displayPhone($location, $args);
    $phone = itemWrapperHTML($phone, array('tag' => 'li'));

    $contact = get_page_link('34');
    $contact = itemWrapperHTML(__('Contact Us', THEME_SLUG), array('tag' => 'a', 'href' => $contact));

    $email = iconFont('fas fa-envelope');
    $email = itemWrapperHTML($email, array('tag' => 'span', 'class' => 'fa-li'));
    $email = $email . $contact;
    $email = itemWrapperHTML($email, array('tag' => 'li'));

    $contact_list = itemWrapperHTML($email . $phone, array('tag' => 'ul', 'class' => 'fa-ul contact-list'));

    return $contact_list;
}
add_shortcode('contact_info', 'displayContactInfoShortcode');
