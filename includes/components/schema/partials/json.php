<?php

/** ============================================================================
 * json
 * @package <<projectname>>
 * @version <<projectversion>>
 * @author  Sam Rankin <samrankin.dev@gmail.com>
 * -----
 * Created : 02/06/19
 * Modified: 01/12/20 by SR
 * ========================================================================== */

$company_info = companyInfo();
$parent_email = getLocationItem('email');
$parent_phone = getLocationItem('phone');
$parent_fax   = getLocationItem('fax');

function addressSchema($location_id = 'main')
{
    $locationJSON = '';
    $location     = getLocationItem('address', $location_id);
    if ($location == false) return;
    $address      = $location['info'];
    extract($address);

    if (!empty($address)) {
        $locationJSON = array();
        $locationJSON['address']  = array(
            '@type' => 'PostalAddress',
        );

        $street = (!empty($unit)) ? $street . ' ' . $unit : $street;

        if (!empty($street)) {
            $locationJSON['address']['streetAddress'] = $street;
        }
        if (!empty($locality)) {
            $locationJSON['address']['addressLocality'] = $locality;
        }
        if (!empty($region)) {
            $locationJSON['address']['addressRegion'] = $region;
        }
        if (!empty($postal)) {
            $locationJSON['address']['postalCode'] = $postal;
        }

        if (!empty($latitude) && !empty($longitude)) {
            $locationJSON['geo'] = array(
                '@type'     => 'GeoCoordinates',
                'latitude'  => $latitude,
                'longitude' => $longitude,
            );
        }

        $full = $street . ' ' . $locality . ' ' . $region . ' ' . $postal;

        $url = (!empty($map_link)) ? $map_link : 'http://maps.google.com/?q=' . urlencode($full);

        $locationJSON['hasMap'] = $url;
    }

    return $locationJSON;
}

function contactSchema($location_id = 'main')
{
    $contactJSON = '';
    $parent_email = getLocationItem('email');
    $parent_phone = getLocationItem('phone');
    $parent_fax   = getLocationItem('fax');

    $phone       = getLocationItem('phone', $location_id);
    $fax         = getLocationItem('fax', $location_id);
    $email       = getLocationItem('email', $location_id);
    $phone       = (!empty($phone['info'])) ? $phone['info'] : $parent_phone['info'];
    $fax         = (!empty($fax['info'])) ? $fax['info'] : $parent_fax['info'];
    $email       = (!empty($email['info'])) ? $email['info'] : $parent_email['info'];

    if (!empty($phone) || !empty($email) || !empty($fax)) {
        $contactJSON = array();
        if (!empty($phone) && !is_null($phone)) {
            $contactJSON['telephone'] = formatPhoneURL($phone);
        }
        if (!empty($email) && !is_null($email)) {
            $contactJSON['email'] = $email;
        }
        if (!empty($fax) && !is_null($fax)) {
            $contactJSON['faxNumber'] = formatPhoneURL($fax);
        }
    }
    return $contactJSON;
}

function hobSchema($location_id = 'main')
{
    $hobJSON  = '';
    $location = getLocationItem('business_hours', $location_id);
    $hob      = $location['info'];

    if (!empty($hob)) {
        $schedules = $hob;
        $hobJSON   = array();
        foreach ($schedules as $schedule) {
            $open_days     = $schedule['days'];
            $open_time     = $schedule['opening_time'];
            $close_time    = $schedule['closing_time'];
            $open24        = $schedule['open_24_hours'];
            $open_time  = date('H:i', strtotime($open_time));
            $close_time = date('H:i', strtotime($close_time));
            $schedule_slot = array(
                '@type' => 'OpeningHoursSpecification',
            );
            foreach ($open_days as $day) {
                $schedule_slot['dayOfWeek'][] = $day['label'];
            }
            if ($open24 == true) {
                $schedule_slot['opens'] = date('H:i', strtotime('12:00 am'));
                $schedule_slot['closes'] = date('H:i', strtotime('11:59 pm'));
            } else {
                if (!empty($open_time)) {
                    $schedule_slot['opens'] = $open_time;
                }
                if (!empty($close_time)) {
                    $schedule_slot['closes'] = $close_time;
                }
            }
            $hobJSON[] = $schedule_slot;
        }
    }

    return $hobJSON;
}

function socialSchema($location_id = 'main')
{
    $location_social   = '';
    $social_links = getLocationItem('social_links', $location_id);
    $social_links = $social_links['info'];
    if (!empty($social_links)) {
        $location_social = array();
        foreach ($social_links as $link) {
            $location_social[] = $link['link'];
        }
    }
    return $location_social;
}

function schemaJSON()
{

    $schema = '';
    $company_main = getLocationItem();
    $company_main = $company_main['info'];
    $main_address = addressSchema();
    $main_contact = contactSchema();
    $main_hob     = hobSchema();
    $main_social  = socialSchema();
    $main_url     = esc_url(home_url('/'));

    $location_id = '';
    // If there are any physical locations
    if (!empty($company_main)) {

        $schema = array(
            '@context'    => array(
                '@vocab' => 'http://schema.org'
            )
        );

        $graph = array();

        $main_schema = array(
            '@id'         => $main_url,
            '@type'       => $company_main['schema_type'],
            'url'         => $main_url,
            'name'        => companyName(),
            'description' => companyDescription(),
            'logo'        => companyLogoURL()
        );

        if (!empty($company_main['schema_type'])) {
            if ($company_main['has_multiple_locations'] == true) {
                $main_schema['@type'] = 'Organization';
            } else {
                $main_schema['@type'] = $company_main['schema_type'];
            }
        }

        if (!empty($company_main['company_image'])) {
            $main_schema['image'] = wp_get_attachment_image_url($company_main['company_image'], 'full');
        }

        if (!empty($company_main['additional_type'])) {
            $main_schema['additionalType'] = $company_main['additional_type'];
        }
        if (!empty($main_address)) {
            if ($company_main['has_multiple_locations'] == true) {
                unset($main_address['hasMap']);
            }
            $main_schema = array_merge($main_schema, $main_address);
        }
        if (!empty($main_hob) && $company_main['has_multiple_locations'] == false) {
            $main_schema['openingHoursSpecification'] = $main_hob;
        }
        if (!empty($main_contact)) {

            $main_schema = array_merge($main_schema, $main_contact);
        }
        if (!empty($main_social)) {
            $main_schema['sameAs'] = $main_social;
        }

        $graph[] = $main_schema;

        if ($company_main['has_multiple_locations'] == true && !empty($company_main['other_locations'])) {
            $all_locations = array();
            $other_locations = companyInfo('other_locations');
            foreach ($other_locations as $other_location) {
                extract($other_location);
                $id = !empty($location_url) ? $location_url : $main_url . '#' . toKebabCase($location_name);
                $locationJSON = array(
                    '@id'                => $id,
                    '@type'              => $schema_type,
                    'parentOrganization' => array(
                        'name' => companyName(),
                    ),
                    'url'                => $main_url,
                    'name'               => toTitleCase($location_name) . ' - ' . companyName(),
                );
                if (!empty($other_location['additional_type'])) {
                    $locationJSON['additionalType'] = $other_location['additional_type'];
                }

                $location_address = addressSchema($location_name);
                $location_contact = contactSchema($location_name);
                $location_hob     = hobSchema($location_name);
                $location_social  = socialSchema($location_name);

                if (!empty($description)) $locationJSON['description'] = $description;

                if (!empty($other_location['location_image'])) {
                    $locationJSON['image'] = wp_get_attachment_image_url($other_location['location_image'], 'full');
                } elseif (!empty($company_main['company_image'])) {
                    $locationJSON['image'] = wp_get_attachment_image_url($company_main['company_image'], 'full');
                }

                if (!empty($location_address)) {
                    foreach ($location_address as $key => $value) {
                        $locationJSON[$key] = $value;
                    }
                }
                if (!empty($location_hob)) {
                    $locationJSON['openingHoursSpecification'] = $location_hob;
                }
                if (!empty($location_contact)) {
                    foreach ($location_contact as $key => $value) {
                        $locationJSON[$key] = $value;
                    }
                }
                if (!empty($location_social)) {
                    $locationJSON['sameAs'] = $location_social;
                }
                $all_locations[] = $locationJSON;
            }
        }
        $graph = array_merge($graph, $all_locations);
        $schema['@graph'] = $graph;
    }

    if (!empty($schema)) {
        $json = json_encode($schema, (JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
        echo '<script type="application/ld+json">' . $json . '</script>';
    }
}
add_action('wp_footer', 'schemaJSON', 999);
