<?php

/** ============================================================================
 * footer-site
 * @package BootPress
 * @version <<version>>
 * @author  Sam Rankin <samrankin.dev@gmail.com>
 * -----
 * Created:  10-5-19
 * Modified: 12-6-19 at 2:11 pm by Sam Rankin <samrankin.dev@gmail.com>
 * =========================================================================== */



$site_footer = themeOptions('site_footer');

if (empty($site_footer)) return;

extract($site_footer);

$site_footer_styles = array(
    'section_wrapper' => array(
        'tag'   => 'footer',
        'id'    => 'colophon',
        'role'  => 'contentinfo',
        'class' => array('site-footer')
    ),
);

$site_footer_content = '';

foreach ($rows as $row) {
    $site_footer_columns = $row['columns'];
    if (empty($site_footer_columns)) return;

    $row_styles = $row['styles'];
    $row_args = array(
        'id'    => $row_styles['id'],
        'class' => array(
            'row'
        )
    );
    if (!empty($row_styles['html_data'])) {

        foreach ($row_styles['html_data'] as $att) {
            $label = $att['label'];
            $value = $att['value'];
            $row_args[$label] = $value;
        }
        unset($row_styles['html_data']);
    }
    if ($row_styles['main_navigation_row'] == 1) {
        $row_args['class'] = outputClasses($row_args['class'], array(
            'main-navigation',
            'navbar',
            'navbar-expand-' . themeConfig('desktop-bp'),
            'row'
        ));
        $row_args['tag'] = 'nav';
        $row_args['role'] = 'navigation';
        $row_args['aria-label'] = 'Main Navigation';
    }
    $row_args = parseArgs($row_args, $row_styles);

    $row_content = '';
    foreach ($site_footer_columns as $column) {
        $column_content_items = $column['content'];
        $column_content = '';

        foreach ($column_content_items as $item) {
            $column_content .= acfContentItem($item);
        }

        $row_content .= acfColumnStyles($column_content, $column['styles']);
    }
    $site_footer_content .= itemWrapperHTML($row_content, $row_args);
}

echo bootpressSection($site_footer_content, $site_footer_styles);
