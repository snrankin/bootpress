<?php

/** ============================================================================
 * Functions for setting up general schema
 * @package K&P Attorney
 * @version 1.0.0
 * @author  Sam Rankin <samrankin.dev@gmail.com>
 * -----
 * Created : 12/16/19
 * Modified: 01/09/20 by SR
 * ========================================================================== */

function formatBusinessHours($hob = array(), $time_format = 'g:ia', $day_format = 'D')
{
    $all_schedules = '';
    $schedules     = $hob;

    foreach ($schedules as $schedule) {
        $open_days  = $schedule['days'];
        $open_time  = $schedule['opening_time'];
        $close_time = $schedule['closing_time'];
        $day = '';
        $time = '';
        $schedule_atts = array(
            'tag' => 'span',
            'class' => array(
                'business-hours-item'
            )
        );
        $day_atts = array(
            'tag' => 'span',
            'class' => array(
                'day-value'
            )
        );
        $time_atts = array(
            'tag' => 'span',
            'class' => array(
                'time-value'
            )
        );
        if ($open_days) {
            $day_01 = strtotime($open_days[0]['label']);
            $day_01 = date($day_format, $day_01);
            $day_01 = itemWrapperHTML($day_01, $day_atts);
            $day  .= $day_01;

            if (count($open_days) > 1) {
                $day_02 = end($open_days);
                $day_02 = strtotime($day_02['label']);
                $day_02 = date($day_format, $day_02);
                $day_02 = itemWrapperHTML($day_02, $day_atts);
                $day  .= $day_02;
            }
            $day = itemWrapperHTML(
                $day,
                array(
                    'tag' => 'span',
                    'class' => array(
                        'days'
                    )
                )
            );
        }

        if (!empty($open_time) || !empty($close_time)) {
            $open_time  = strtotime($time_format, $open_time);
            $open_time  = itemWrapperHTML($open_time, $time_atts);
            $close_time = strtotime($time_format, $close_time);
            $close_time = itemWrapperHTML($close_time, $time_atts);

            if (!empty($open_time)) {
                $time  .= $open_time;
            }

            if (!empty($close_time)) {
                $time  .= $close_time;
            }
            $time = itemWrapperHTML(
                $time,
                array(
                    'tag' => 'span',
                    'class' => array(
                        'times'
                    )
                )
            );
        }

        $all_schedules .= itemWrapperHTML($day . $time, $schedule_atts);
    }

    return $all_schedules;
}

function addressStringToArray($address = array())
{
    if (empty($address)) {
        return;
    }

    $street_regex = '/^\w+\s\w+\.?\s\w+\s\w*\.?/';
    $unit_regex = '/(?i)(\#|unit|ste|apt|bldg|floor|suite)\.?\s?\w*/';
    $state_regex = '/((A[LKSZR])|(C[AOT])|(D[EC])|(F[ML])|(G[AU])|(HI)|(I[DLNA])|(K[SY])|(LA)|(M[EHDAINSOT])|(N[EVHJMYCD])|(MP)|(O[HKR])|(P[WAR])|(RI)|(S[CD])|(T[NX])|(UT)|(V[TIA])|(W[AVIY]))/';
    $postal_regex = '/\d{5}-\d{4}|\d{5}|[A-Z]\d[A-Z] \d[A-Z]\d$/';

    if (!is_array($address)) {
        preg_match($street_regex, $address, $street);
        preg_match($unit_regex, $address, $unit);
        preg_match($state_regex, $address, $region);
        preg_match($postal_regex, $address, $postal);
        $locality = str_replace($street[0], '', $address);
        $locality = str_replace($unit[0], '', $locality);
        $locality = str_replace($region[0], '', $locality);
        $locality = str_replace($postal[0], '', $locality);
        $locality = trim($locality, ', ');

        $address['street'] = trim($street[0], ', ');
        $address['unit'] = trim($unit[0], ', ');
        $address['locality'] = trim($locality, ', ');
        $address['region'] = trim($region[0], ', ');
        $address['postal'] = trim($postal[0], ', ');
    }
    return $address;
}

function formatAddress($address = '')
{
    if (empty($address)) {
        return;
    }

    $address = addressStringToArray($address);
    extract($address);

    $address_line_1 = '';

    if (!empty($street) || !empty($unit)) {
        $address_line_1 .= "<span class='address-line-1'>";
        if (!empty($street)) {
            $address_line_1 .= "<span class='street'>$street";
        }
        if (!empty($unit)) {
            $address_line_1 .= ' ' . $unit;
        }
        $address_line_1 .= "</span><span class='separator'>, </span></span>";
    }

    $address_line_2 = '';

    if (!empty($locality) || !empty($region) || !empty($postal)) {
        $address_line_2 .= "<span class='address-line-2'>";
        if (!empty($locality)) {
            $address_line_2 .= "<span class='locality'>$locality</span><span class='separator'>, </span>";
        }
        if (!empty($region)) {
            $address_line_2 .= "<span class='region'>$region</span> ";
        }
        if (!empty($postal)) {
            $address_line_2 .= "<span class='postal'>$postal</span> ";
        }
        $address_line_2 .= "</span>";
    }

    $address_html .= $address_line_1;
    $address_html .= $address_line_2;

    return $address_html;
}
function companyInfo($option = '')
{
    $company_info = themeOptions('company_info');

    if ($company_info == false) {
        return false;
    }

    if (!empty($option)) {
        return $company_info[$option];
    } else {
        return $company_info;
    }
}

function companyName()
{
    $name = '';

    if (!empty(companyInfo('company_name'))) {
        $name = companyInfo('company_name');
    } else {
        $name = get_bloginfo('name');
    }

    return $name;
}

function companyDescription()
{
    $description = '';

    if (!empty(companyInfo('description'))) {
        $description = companyInfo('description');
    } else {
        $description = get_bloginfo('description');
    }

    return $description;
}

function companyLogoID()
{
    $logo = '';

    if (!empty(companyInfo('company_logo'))) {
        $logo = companyInfo('company_logo');
    } elseif (has_custom_logo()) {
        $logo = get_theme_mod('custom_logo');
    }

    return $logo;
}

function companyLogoURL()
{
    $logo = '';

    if (!empty(companyInfo('company_logo'))) {
        $logo = companyInfo('company_logo');
    } elseif (has_custom_logo()) {
        $logo = get_theme_mod('custom_logo');
    }

    $logo = wp_get_attachment_url($logo);

    return $logo;
}

function customLogoHTML($img_id = '', $link = 1, $args = array())
{

    if (empty($img_id)) {
        $img_id = companyLogoID();
    }

    if (empty($img_id)) {
        return;
    }

    $defaults = array(
        'tag' => 'div',
        'id'  => '',
        'class' => array(
            'company-logo'
        )
    );

    $atts = parseArgs($defaults, $args);

    $logo = '';

    $image_url      = companyLogoURL();
    $image_type = wp_check_filetype($image_url);

    $link_atts = array(
        'tag'   => 'a',
        'href'  => get_bloginfo('url'),
        'title' => companyName(),
        'class' => array(
            'company-logo-link',
        ),
        'role'  => 'image',
    );

    if ($link == 1) {
        $atts = parseArgs($args, $link_atts);
    }

    $img_atts = array(
        'title'    => companyName(),
        'alt'      => companyName(),
        'class'    => array(
            'company-logo-img'
        ),
        'role'     => 'image',
        'wrapper'  => $atts,
        'data-parent-fit' => 'contain'
    );

    if ($image_type['ext'] === 'svg') {
        $logo = file_get_contents($image_url);
        $logo = itemWrapperHTML($logo, $atts);
    } else {
        $logo = displayImage($img_id, 'full', $img_atts);
    }

    return $logo;
}

function companyLogoShortcode($atts)
{
    // Attributes
    $atts = shortcode_atts(
        array(
            'class' => '',
            'id'    => '',
            'link'  => 1
        ),
        $atts
    );

    extract($atts);

    $args = array(
        'id'    => $id,
        'class' => $class,
    );

    $info = customLogoHTML($id = '', intval($link), $args);

    return $info;
}
add_shortcode('company_logo', 'companyLogoShortcode');

function formatSchemaItem($content = '', $args = array())
{


    $defaults = array(
        'title' => '',
        'icon'  => array(
            'class' => '',
            'label' => '',
            'list'  => 0
        ),
        'display' => 1,
        'add' => 1,
        'wrapper' => array(
            'tag'   => 'span',
            'id'    => '',
            'class' => 'schema-item',
        ),
        'atts'  => array(
            'tag'   => 'span',
            'class' => 'schema-item-text'
        ),
        'link'  => array(
            'add'  => 0,
            'atts' => array(
                'tag'    => 'a',
                'title'  => '',
                'rel'    => 'nofollow',
                'target' => '',
                'class'  => 'schema-info-link',
            )
        ),
    );

    $options = parseArgs($defaults, $args);

    extract($options);

    if (empty($content) || $add == 0) return;

    $schema_info = '';

    if ($display == 1) {

        $title_atts = array(
            'tag' => 'h5',
            'class' => 'schema-info-title'
        );

        if (isset($icon['class']) && !empty($icon['class'])) {
            $icon['class'][] = 'schema-icon';
            $schema_info .= iconFont($icon['class'], $icon['label'], $icon['list'], $icon['atts']);
        }

        $schema_info .= itemWrapperHTML($content, $atts);

        if ($link['add']) {
            $schema_info = itemWrapperHTML($schema_info, $link['atts']);
        }

        if (!empty($title)) {
            $schema_info = itemWrapperHTML(__($title, THEME_SLUG), $title_atts) . $schema_info;
        }

        if (!empty($wrapper['tag'])) {
            $schema_info = itemWrapperHTML($schema_info, $wrapper);
        }
    } else {
        $schema_info = metaItem($content, $atts['itemprop']);
    }

    return $schema_info;
}

function formatEmailSchema($content = '', $args = array())
{

    $defaults = array(
        'title' => '',
        'icon'  => '',
        'display' => 1,
        'add' => 1,
        'wrapper' => array(
            'class' => array(
                'email',
                'schema-item'
            ),
        ),
        'atts'  => array(
            'tag'   => 'span',
            'class' => 'schema-item-text',
            'itemprop' => 'email'
        ),
        'link'  => array(
            'add'  => 1,
            'atts' => array(
                'tag'    => 'a',
                'title'  => __('Send an email to ' . $content, THEME_SLUG),
                'rel'    => 'nofollow',
                'href'   => $content,
                'class'  => 'schema-info-link',
            )
        ),
    );

    $options = parseArgs($defaults, $args);

    $schema_info = formatSchemaItem($content, $options);

    return $schema_info;
}

function formatPhoneSchema($content = '', $args = array())
{
    $content = formatPhoneURL($content);
    $defaults = array(
        'title' => '',
        'icon'  => '',
        'display' => 1,
        'add' => 1,
        'wrapper' => array(
            'class' => array(
                'phone',
                'schema-item'
            ),
        ),
        'atts'  => array(
            'tag'   => 'span',
            'class' => 'schema-item-text',
            'itemprop' => 'telephone'
        ),
        'link'  => array(
            'add'  => 1,
            'atts' => array(
                'tag'    => 'a',
                'title'  => __('Call ' . $content, THEME_SLUG),
                'rel'    => 'nofollow',
                'href'   => $content,
                'class'  => 'schema-info-link',
            )
        ),
    );

    $options = parseArgs($defaults, $args);



    $schema_info = formatSchemaItem($content, $options);

    return $schema_info;
}

function formatAddressSchema($content = '', $args = array())
{

    $defaults = array(
        'title' => '',
        'icon'  => '',
        'display' => 1,
        'add' => 1,
        'wrapper' => array(
            'tag'   => 'address',
            'class' => array(
                'address',
                'schema-item'
            ),
        ),
        'atts'  => array(
            'tag'   => 'span',
            'class' => 'schema-item-text',
            'itemprop' => 'telephone'
        ),
        'link'  => array(
            'add'  => 1,
            'atts' => array(
                'tag'    => 'a',
                'title'  => __('Get Directions to ' . $content, THEME_SLUG),
                'rel'    => 'nofollow',
                'target' => '_blank',
                'class'  => 'schema-info-link',
            )
        ),
    );

    $options = parseArgs($defaults, $args);

    if (!empty($options['link']['atts']['href'])) $options['link']['atts']['href'] = 'http://maps.google.com/?q=' . urlencode($content);

    $address = formatAddress($content);

    $address = formatSchemaItem($address, $options);

    return $address;
}

function personSchema($args = array())
{
    $defaults = array(
        'id' => '',
        'type' => 'post',
        'name' => array(
            'add' => 0,
            'display' => 0,
            'prefix' => array(
                'display' => 1,
                'add' => 1,
                'content'  => '',
                'atts'   => array(
                    'tag' => 'span',
                    'class' => 'user-prefix',
                    'itemprop' => 'honorificPrefix'
                )
            ),
            'first'  => array(
                'display' => 1,
                'add' => 1,
                'content'  => '',
                'atts'   => array(
                    'tag' => 'span',
                    'class' => 'name first',
                    'itemprop' => 'givenName'
                )
            ),
            'last'   => array(
                'display' => 1,
                'add' => 1,
                'content'  => '',
                'atts'   => array(
                    'tag' => 'span',
                    'class' => 'name last',
                    'itemprop' => 'familyName'
                )
            ),
            'suffix' => array(
                'display' => 1,
                'add' => 1,
                'content'  => '',
                'atts'   => array(
                    'tag' => 'span',
                    'class' => 'user-suffix',
                    'itemprop' => 'honorificSuffix'
                )
            ),
            'atts'   => array(
                'tag' => 'span',
                'class' => 'user-name'
            )
        ),
        'phone' => array(
            'link' => array('add' => true),
            'display' => 0,
            'add' => 0,
            'content'  => '',
            'atts'   => array(
                'tag' => 'span',
                'class' => 'user-phone',
                'itemprop' => 'telephone'
            )
        ),
        'email' => array(
            'link' => array('add' => true),
            'display' => 0,
            'add' => 0,
            'content'  => '',
            'atts'   => array(
                'tag' => 'span',
                'class' => 'user-email',
                'itemprop' => 'email'
            )
        ),
        'img'   => array(
            'display' => 0,
            'add' => 0,
            'content'  => '',
            'size' => 'medium',
            'atts'   => array(
                'class' => 'user-img'
            ),
            'bg' => 0
        ),
        'job'   => array(
            'display' => 0,
            'add' => 0,
            'content'  => '',
            'atts'   => array(
                'tag' => 'span',
                'class' => 'user-job',
                'itemprop' => 'jobTitle'
            )
        ),
        'item' => array(
            'class' => array(
                'person'
            ),
            'itemscope' => '',
            'itemtype'  => 'http://schema.org/Person',
        ),
        'link' => array(
            'display' => 0,
            'add' => 0,
            'content' => '',
            'atts'   => array(
                'tag' => 'a',
                'class' => 'user-link stretched-link',
                'itemprop' => 'url',
                'href' => ''
            )

        )
    );

    $options = parseArgs($defaults, $args);
    extract($options);


    $user = $meta = $img_html = $name_html = $contact_html = $content_html = '';

    if (!empty($id) && (is_int($id) || is_numeric($id))) {
        if ($type === 'author') {
            $id = get_the_author_meta('id', $id);
            $name['first']['content'] = get_the_author_meta('first_name', $id);
            $name['last']['content']  = get_the_author_meta('last_name', $id);
            if (function_exists('get_field')) {
                $name['prefix']['content'] = get_field('prefix', 'user_' . $id);
                $name['suffix']['content'] = get_field('suffix', 'user_' . $id);
            }
            $avatar = getAvatar($id);
            if ($avatar['found_avatar'] == true && empty($img['content'])) {
                $img['content'] = $avatar['url'];
            }
            if (empty($link['atts']['href'])) {
                $link['atts']['href'] = get_author_posts_url($id);
            }
            $item['class'][] = 'author';
            $item['itemprop'][] = 'author';
        } elseif ($type === 'post') {
            $post_title = explode(' ', get_the_title($id));
            $name['first']['content']  = $post_title[0];
            $name['last']['content'] = $post_title[1];
            if (function_exists('get_field')) {
                $name['prefix']['content'] = get_field('prefix', $id);
                $name['suffix']['content'] = get_field('suffix', $id);
            }
            if (empty($img['content']) && has_post_thumbnail($id)) {
                $img['content'] = get_post_thumbnail_id($id);
            }
            if (empty($link['atts']['href'])) {
                $link['atts']['href'] = get_permalink($id);
            }
        }
    }

    // ---------------------------------- //
    // -------------- Image ------------- //
    // ---------------------------------- //
    if (!empty($img['content']) && $img['add'] == 1) {
        if ($img['display'] == 1) {
            $img_html = displayImage($img['content'], $img['size'], $img['atts'], $img['bg'], 1);
        } else {
            $img_url = '';
            if (is_int($id) || is_numeric($id)) {
                $img_url = wp_get_attachment_image_url($img['content'], 'full');
            } else {
                $img_url = $img['content'];
            }
            $meta .= metaItem($img_url, 'image');
        }
    }

    // ---------------------------------- //
    // -------------- Name -------------- //
    // ---------------------------------- //

    // ------------- Prefix ------------- //
    $prefix = $name['prefix'];
    if (!empty($prefix['content'])) {
        $name_html .= formatSchemaItem($prefix['content'], $prefix);
    }

    // ----------- First Name ----------- //
    $first = $name['first'];
    if (!empty($first['content'])) {
        $name_html .= formatSchemaItem($first['content'], $first);
    }

    // ------------ Last Name ----------- //
    $last = $name['last'];
    if (!empty($last['content'])) {
        $name_html .= ' ' . formatSchemaItem($last['content'], $last);
    }
    // ------------- Suffix ------------- //
    $suffix = $name['suffix'];
    if (!empty($suffix['content'])) {
        $name_html .= formatSchemaItem($suffix['content'], $suffix);
    }

    if (!empty($name_html) && $name['add'] == 1) {
        if (!empty($link['atts']['href']) && $link['add'] == 1 && $link['display'] == 1  && empty($link['content'])) {
            $name_html = itemWrapperHTML($name_html, $link['atts']);
        }
        $content_html .= itemWrapperHTML($name_html, $name['atts']);
    }



    // ---------------------------------- //
    // ------------ Job Title ----------- //
    // ---------------------------------- //
    if (!empty($job['content']) && $job['add'] == 1) {
        if ($job['add'] == 1) {
            $content_html .= formatSchemaItem($job['content'], $job);
        } else {
            $meta .= metaItem($job['content'], $job['atts']['itemprop']);
        }
    }

    // ---------------------------------- //
    // ------- Contact Information ------ //
    // ---------------------------------- //

    // -------------- Email ------------- //
    if (!empty($email['content'])) {

        if ($email['show'] == 1) {
            $content_html .= formatEmailSchema($email_content, $email);
        } else {
            $meta .= metaItem($email['content'], $email['atts']['itemprop']);
        }
    }

    // -------------- Phone ------------- //
    if (!empty($phone['content'])) {

        if ($phone['show'] == 1) {
            $content_html .= formatPhoneSchema($phone_content, $phone);
        } else {
            $meta .= metaItem($phone['content'], $phone['atts']['itemprop']);
        }
    }

    if (!empty($link['atts']['href']) && $link['add'] == 1) {
        if ($link['display'] == 1 && !empty($link['content'])) {
            $content_html .= itemWrapperHTML($link['content'], $link['atts']);
        } else {
            $meta .= metaItem($link['atts']['href'], $link['atts']['itemprop']);
        }
    }

    $user_content = $meta  . $img_html . $content_html;
    $user = itemWrapperHTML($user_content, $item);
    return $user;
}

function publisherSchema($args = array())
{

    $defaults = array(
        'name' => array(
            'display' => 0,
            'add' => 1,
            'content'  => companyName(),
            'atts'   => array(
                'tag' => 'h4',
                'class' => 'publisher-name',
                'itemprop' => 'name'
            )
        ),
        'phone' => array(
            'link' => array('add' => true),
            'display' => 0,
            'add' => 1,
            'content'  => getLocationItem('phone'),
            'atts'   => array(
                'tag' => 'span',
                'class' => 'publisher-phone',
                'itemprop' => 'telephone'
            )
        ),
        'email' => array(
            'link' => array('add' => true),
            'display' => 0,
            'add' => 1,
            'content'  => getLocationItem('email'),
            'atts'   => array(
                'tag' => 'span',
                'class' => 'publisher-email',
                'itemprop' => 'email'
            )
        ),
        'img'   => array(
            'display' => 0,
            'add' => 1,
            'content'  => companyLogoID(),
            'size' => 'full',
            'atts'   => array(
                'class' => 'publisher-img',
                'itemprop' => 'logo image'
            )
        ),
        'item' => array(
            'class' => array(
                'meta-wrapper',
                'publisher',
            ),
            'itemscope' => '',
            'itemprop'  => 'publisher',
            'itemtype'  => 'http://schema.org/Organization',
        ),
        'link' => array(
            'display' => 0,
            'add' => 0,
            'content' => '',
            'atts'   => array(
                'tag' => 'a',
                'class' => 'user-link stretched-link',
                'itemprop' => 'url',
                'href' => ''
            )

        )
    );

    $options = parseArgs($defaults, $args);
    extract($options);
    extract($name);

    $publisher = $content_html = '';

    if (!empty($img['content'])) {

        if ($img['show'] == 1) {
            $content_html .= customLogoHTML($img['content'], $img['link']['add']);
        } else {
            $content_html .= metaItem(companyLogoURL(), $img['atts']['itemprop']);
        }
    }

    if (!empty($name['content'])) {
        if ($name['show'] == 1) {
            $content_html .= itemWrapperHTML($name['content'], $name['atts']);
        } else {
            $content_html .=  metaItem($name['content'], $name['atts']['itemprop']);
        }
    }

    // ---------------------------------- //
    // ------- Contact Information ------ //
    // ---------------------------------- //

    // -------------- Email ------------- //

    if (!empty($email['content'])) {

        if ($email['show'] == 1) {
            $content_html .= formatEmailSchema($email_content, $email);
        } else {
            $content_html .= metaItem($email['content']['info'], $email['atts']['itemprop']);
        }
    }

    // -------------- Phone ------------- //
    if (!empty($phone['content'])) {

        if ($phone['show'] == 1) {
            $content_html .= formatPhoneSchema($phone_content, $phone);
        } else {
            $content_html .= metaItem($phone['content']['info'], $phone['atts']['itemprop']);
        }
    }

    if ($link['show'] == 1) {
        $content_html = itemWrapperHTML($content_html, $link['atts']);
    }

    $publisher = itemWrapperHTML($content_html, $item);
    return $publisher;
}

function schemaPageType()
{
    $slug       = get_permalink();
    $schemaType = '';
    if (isBlog()) {
        $schemaType .= 'Blog';
    } elseif (strpos($slug, 'faq') !== false) {
        if (!is_singular()) {
            $schemaType .= 'FAQPage';
        }
    } elseif (strpos($slug, 'team') !== false) {
        if (is_singular()) {
            $schemaType .= 'ProfilePage';
        } else {
            $schemaType .= 'CollectionPage';
        }
    } elseif (is_page()) {
        if (strpos($slug, 'about') !== false) {
            $schemaType .= 'AboutPage';
        } elseif (strpos($slug, 'contact') !== false) {
            $schemaType .= 'ContactPage';
        } else {
            $schemaType .= 'WebPage';
        }
    } elseif (is_post_type_archive()) {
        $schemaType .= 'CollectionPage';
    } elseif (is_singular()) {
        $schemaType .= 'ItemPage';
    } elseif (is_search()) {
        $schemaType .= 'SearchResultsPage';
    } else {
        $schemaType .= 'WebPage';
    }

    $atts = array(
        'itemscope',
        'itemtype' => 'https://schema.org/' . $schemaType,
    );

    $atts = outputHTMLData($atts);

    echo $atts;
}

/**
 * Get contact or address information from a specific location
 *
 * @param string $location The name of the location (uses "Location Name" if
 * referencing other locations than main)
 *
 * @param string $item The type of information to retrieve (ex: An Address)
 *
 * @return array|null
 */

function getLocationItem($item = '', $location = 'main')
{
    $company_info = themeOptions('company_info');
    if ($company_info == false) {
        return false;
    }
    $id = '';
    $info = '';
    $location_info = array(
        'id' => '',
        'info' => '',
    );
    if ($location === 'main' || empty($location)) {
        if (!empty($item)) {
            $info = $company_info[$item];
        } else {
            $info = $company_info;
        }

        $id = 'location-id-main';
    } else {
        $other_locations = $company_info['other_locations'];

        foreach ($other_locations as $other_location) {
            if ($other_location['location_id'] === $location) {
                $id = 'location-id-' . toKebabCase($other_location['location_id']);

                if (!empty($item)) {
                    $info = $other_location[$item];
                } else {
                    $info = $other_location;
                }
            }
        }
    }

    if (!empty($info)) {
        $location_info = array(
            'id' => $id,
            'info' => $info,
        );
        return $location_info;
    } else {
        return false;
    }
}


incComponent('schema', 'location-info');
incComponent('schema', 'json');
