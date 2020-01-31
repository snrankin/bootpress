<?php

/** ============================================================================
 * Description
 * @package BootPress
 * @version <<version>>
 * -----
 * @author Sam Rankin <samrankin.dev@gmail.com>
 * @copyright Copyright (c) 2019 Your Company
 * -----
 * Created Date:  2-4-19
 * Last Modified: 11-27-19 at 9:11 am
 * Modified By:   Sam Rankin <samrankin.dev@gmail.com>
 * -----
 * HISTORY:
 * Date    	By	Comments
 * --------	--	--------------------------------------------------------------
* =========================================================================== */


function socialProfileLink($profile = array())
{


    if (empty($profile) ) {
        return;
    } else {
        extract($profile);
    }

    $company_name = companyName() . ' ' . $title;

    $icon_atts = array(
        'class' => array(
            'social-profile-icon'
        )
    );

    $icon = '';

    // Build icon

    if($icon_type === 'icon'){

        $icon_wrapper_atts = array(
            'tag'   => 'span',
            'class' => array(
                'social-profile-icon-wrapper',
                'embed-responsive',
                'embed-responsive-1by1',
            )
        );
        $class = explode(' ', $icon_class);
        $icon_atts['class'][] = 'embed-responsive-item';
        $icon_atts['class'] = array_merge_recursive($class, $icon_atts['class']);
        $icon = '<i' . outputHTMLData($icon_atts) . '/></i>';
        $icon = itemWrapperHTML($icon, $icon_wrapper_atts);

    } elseif($icon_type === 'image' && !empty($icon_image)){

        $type = $icon_image['subtype'];
        $icon_atts['class'] = 'custom-icon-image';

        if($type === 'svg'){

            $meta = wp_get_attachment_metadata( $icon_image['ID'] );
            $path = $meta['file'];
            $uploads_dir = wp_get_upload_dir();
            $uploads_dir = $uploads_dir['basedir'];
            $icon = file_get_contents($uploads_dir . '/' . $path);

        } else {

            $icon_atts['data-src'] = $icon_image['url'];
            $icon_atts['class'][]  = 'img-fluid';
            $icon_atts['class'][]  = 'lazyload';
            $icon_atts['alt']      = !empty($icon_image['alt']) ? $icon_image['alt'] : $company_name;
            $icon_atts['title']    = !empty($icon_image['alt']) ? $icon_image['alt'] : $company_name;
            $icon_atts['width']    = $icon_image['width'];
            $icon_atts['height']   = $icon_image['height'];
            $icon_atts['style']    = array(
                'max-width' => $icon_image['width']
            );
            $icon = '<img' . outputHTMLData($icon_atts) . '/>';

        }
    }

    // Add a title

    $title_atts = array(
        'tag'   => 'span',
        'class' => array(
            'social-profile-title'
        )
    );

    if($show_title != 1){
        $title_atts['class'] = 'sr-only';
    }

    $title_text = itemWrapperHTML($title, $title_atts);

    $icon .= $title_text;

    // Wrap icon in a link

    $link_atts = array(
        'tag'    => 'a',
        'href'   => $link,
        'title'  => $company_name,
        'target' => '_blank',
        'rel'    => 'nofollow',
        'class'  => array(
            'social-profile-link',
            toKebabCase($title),
        ),
    );

    $item = itemWrapperHTML($icon, $link_atts);

    return $item;
}

function displaySocialProfiles($location = 'main', $args = array())
{

    $social_links = getLocationItem($location, 'social_links');
    $social_links = $social_links['info'];

    $custom_social_links = getLocationItem($location, 'custom_social_links');
    $custom_social_links = $custom_social_links['info'];

    if (empty($social_links) && empty($custom_social_links)) {
        return;
    }

    $defaults = array(
        'tag'      => 'ul',
        'id'       => '',
        'item_tag' => 'li',
        'style'    => '',
        'class'    => array(
            'social-profiles',
            'list-inline'
        ),
    );

    $options = parseArgs($defaults, $args);

    extract($options);

    $atts = array(
        'tag'      => $tag,
        'id'       => $id,
        'style'    => $styles,
        'class'    => $class
    );

    $profiles = '';

    if (!empty($social_links)) {

        foreach ($social_links as $social) {
            $title      = !empty($social['title']) ? $social['title'] : $social['acf_fc_layout'];

            $link_atts = array(
                'title'      => $title,
                'show_title' => $social['show_title'],
                'icon_type'  => $social['icon_type'],
                'icon_class' => $social['icon_class'],
                'icon_image' => $social['icon_image'],
                'link'       => $social['link'],
            );

            $link = socialProfileLink($link_atts);

            $profile_atts = array(
                'tag'   => 'li',
                'class' => array(
                    'social-profile',
                    'list-inline-item',
                    toKebabCase($title),
                )
            );

            $profile = itemWrapperHTML($link, $profile_atts);

            $profiles .= $profile;
        }

    }
    if (!empty($custom_social_links)) {

        foreach ($custom_social_links as $social) {
            $title      = !empty($social['title']) ? $social['title'] : $social['acf_fc_layout'];

            $link_atts = array(
                'title'      => $title,
                'show_title' => $social['show_title'],
                'icon_type'  => $social['icon_type'],
                'icon_class' => $social['icon_class'],
                'icon_image' => $social['icon_image'],
                'link'       => $social['link'],
            );

            $link = socialProfileLink($link_atts);

            $profile_atts = array(
                'tag'   => $options['item_tag'],
                'class' => array(
                    'social-profile',
                    'list-inline-item',
                    toKebabCase($title),
                )
            );

            $profile = itemWrapperHTML($link, $profile_atts);

            $profiles .= $profile;
        }

    }
    $profiles = itemWrapperHTML($profiles, $atts);

    return $profiles;
}

// Post social share
function displaySocialShare()
{
    $social_links = '<ul class="social-icons share nav">';

    $id    = get_the_ID();
    $url   = get_permalink($id);
    $title = get_the_title($id);

    $list_item_classes = array(
        'nav-item',
    );

    $icon_wrapper_class = array(
        'nav-icon-wrapper',
        'embed-responsive',
        'embed-responsive-1by1',
    );

    $icon_classes = array(
        'nav-icon',
        'embed-responsive-item',
    );

    // -------------------------- Share on Facebook ------------------------- //

    $facebook_query = array(
        'u' => $url,
    );

    $facebook_url = add_query_arg($facebook_query, 'https://www.facebook.com/sharer.php');

    $facebook_atts = array(
        'href'    => $facebook_url,
        'onclick' => 'window.open(\'' . $facebook_url . '\',\'popup\',\'width=600,height=600\'); return false;',
        'target'  => 'popup',
        'title'   => 'Share this post on Facebook',
        'rel'     => 'nofollow',
        'class'   => 'nav-link',
    );

    $social_links .= '<li ' . outputClasses($list_item_classes, 'facebook', true) . '>';
    $social_links .= '<a ' . outputHTMLData($facebook_atts, '', true) . '>';
    $social_links .= '<span ' . outputClasses($icon_wrapper_class, '', true) . '>';
    $social_links .= '<i ' . outputClasses($icon_classes, 'fab fa-facebook-f', true) . '></i>';
    $social_links .= '</span>';
    $social_links .= '</a>';
    $social_links .= '</li>';

    // -------------------------- Share on Twitter -------------------------- //

    $twitter_query = array(
        'url'  => $url,
        'text' => rawurlencode($title),
    );

    $twitter_url = add_query_arg($twitter_query, 'https://twitter.com/intent/tweet');

    $twitter_atts = array(
        'href'    => $twitter_url,
        'onclick' => 'window.open(\'' . $twitter_url . '\',\'popup\',\'width=600,height=600\'); return false;',
        'target'  => 'popup',
        'title'   => 'Share this post on Twitter',
        'rel'     => 'nofollow',
        'class'   => 'nav-link',
    );

    $social_links .= '<li ' . outputClasses($list_item_classes, 'twitter', true) . '>';
    $social_links .= '<a ' . outputHTMLData($twitter_atts, '', true) . '>';
    $social_links .= '<span ' . outputClasses($icon_wrapper_class, '', true) . '>';
    $social_links .= '<i ' . outputClasses($icon_classes, 'fab fa-twitter', true) . '></i>';
    $social_links .= '</span>';
    $social_links .= '</a>';
    $social_links .= '</li>';

    // -------------------------- Share on LinkedIn ------------------------- //

    $linkedin_query = array(
        'url'  => $url,
        'text' => rawurlencode($title),
    );

    $linkedin_url = add_query_arg($linkedin_query, 'https://www.linkedin.com/shareArticle');

    $linkedin_atts = array(
        'href'    => $linkedin_url,
        'onclick' => 'window.open(\'' . $linkedin_url . '\',\'popup\',\'width=600,height=600\'); return false;',
        'target'  => 'popup',
        'title'   => 'Share this post on LinkedIn',
        'rel'     => 'nofollow',
        'class'   => 'nav-link',
    );

    $social_links .= '<li ' . outputClasses($list_item_classes, 'twitter', true) . '>';
    $social_links .= '<a ' . outputHTMLData($linkedin_atts, '', true) . '>';
    $social_links .= '<span ' . outputClasses($icon_wrapper_class, '', true) . '>';
    $social_links .= '<i ' . outputClasses($icon_classes, 'fab fa-linkedin-in', true) . '></i>';
    $social_links .= '</span>';
    $social_links .= '</a>';
    $social_links .= '</li>';

    // --------------------------- Share via Email -------------------------- //

    $msg = $title . "\n";
    $msg .= $url . "\n\n";
    if (has_excerpt()) {
        $msg .= get_the_excerpt();
    }
    $email_query = array(
        'url'     => $url,
        'subject' => rawurlencode('Check Out This Article From ' . get_bloginfo('title')),
        'body'    => rawurlencode($msg),
    );

    $email_url = add_query_arg($email_query, 'mailto:');

    $email_atts = array(
        'href'    => $email_url,
        'onclick' => 'window.open(\'' . $email_url . '\',\'popup\',\'width=600,height=600\'); return false;',
        'target'  => 'popup',
        'title'   => 'Share this post via email',
        'rel'     => 'nofollow',
        'class'   => 'nav-link',
    );

    // $social_links .= '<li ' . outputClasses($list_item_classes, 'facebook', true) . '>';
    // $social_links .= '<a ' . outputHTMLData($email_atts, '', true) . '>';
    // $social_links .= '<span ' . outputClasses($icon_wrapper_class, '', true) . '>';
    // $social_links .= '<i ' . outputClasses($icon_classes, 'fas fa-envelope', true) . '></i>';
    // $social_links .= '</span>';
    // $social_links .= '</a>';
    // $social_links .= '</li>';

    $social_links .= '</ul>';

    return $social_links;
}

function shortcodeSocialLinks($atts)
{
    $args = shortcode_atts(
        array('location' => 'main'),
        $atts
    );

    return displaySocialProfiles($args['location'], $args);
}
add_shortcode('company_social', 'shortcodeSocialLinks');

function shortcodeSocialShare()
{
    return displaySocialShare();
}
add_shortcode('social_share', 'shortcodeSocialShare');
