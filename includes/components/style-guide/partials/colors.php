<?php

/** ============================================================================
 * colors
 * @package BootPress
 * @version 1.0.0
 * @author  Sam Rankin <samrankin.dev@gmail.com>
 * ========================================================================== */
$section = new bpStyleSection();
$theme_colors = $section->theme_colors;

$section_title = 'Colors';

$section_intro = 'Color utility classes are available for setting text color using <code>.text-{color}</code> and for setting background color using <code>.bg-{color}</code>.';
$section->set_intro($section_title, $section_intro);

foreach ($theme_colors as $color) {
    $block_classes = array(
        'embed-responsive',
        'embed-responsive-1by1',
        "bg-{$color}"
    );
    $block_content = "<p class='embed-responsive-item p-3'>.bg-{$color}</p>";

    $block = new bpItem();
    $block->__set('class', $block_classes);
    $block->add_content($block_content);

    $column_content = $block->build_item();
    $column_classes = array(
        'col-ms-6',
        'col-md-4',
        'col-ml-3'
    );
    $column = new bpCol();
    $column->__set('class', $column_classes);
    $column->add_content($column_content);
    $section->add_content($column->build_item());
}

echo $section->buildSection();
