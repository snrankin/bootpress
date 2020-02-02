<?php

/** ============================================================================
 * grid
 * @package BootPress
 * @version 1.0.0
 * @author  Sam Rankin <samrankin.dev@gmail.com>
 * ========================================================================== */
$section = new bpStyleSection();
$theme_colors = $section->theme_colors;

$section_title = 'Grid';

$section_intro = '';
$section->set_intro($section_title, $section_intro);

$block_classes = array(
    'p-1',
    'border'
);

$block_1 = new bpItem();
$block_1->__set('class', $block_classes);

$block_2 = new bpItem();
$block_2->__set('class', $block_classes);

for ($i = 0; $i < 6; $i++) {
    $col_1_width = $i + 6;
    $block_1->__set('content', "<p>.col-{$col_1_width}</p>");
    $col_1_class = 'col-lg-' . $col_1_width;
    $col_1 = new bpCol();
    $col_1->__set('class', 'col-lg-' . $col_1_width);
    $col_1->__set('content', $block_1->build_item());
    $section->add_content($col_1->build_item());

    $col_2_width = 6 - $i;
    $block_2->__set('content', "<p class='embed-responsive-item'>.col-{$col_2_width}</p>");
    $col_2_class = 'col-lg-' . $col_2_width;
    $col_2 = new bpCol();
    $col_2->__set('class', 'col-lg-' . $col_2_width);
    $col_2->__set('content', $block_2->build_item());
    $section->add_content($col_2->build_item());
}

$col_1_width = 12;
$block_1->__set('content', "<p>.col-{$col_1_width}</p>");
$col_1_class = 'col-lg-' . $col_1_width;
$col_1 = new bpCol();
$col_1->__set('class', 'col-lg-' . $col_1_width);
$col_1->__set('content', $block_1->build_item());
$section->add_content($col_1->build_item());

echo $section->buildSection();
