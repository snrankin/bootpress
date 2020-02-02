<?php

/** ============================================================================
 * buttons
 * @package BootPress
 * @version 1.0.0
 * @author  Sam Rankin <samrankin.dev@gmail.com>
 * ========================================================================== */

$section = new bpStyleSection();
$theme_colors = $section->theme_colors;

$section_title = 'Buttons';

$section_intro = '';
$section->set_intro($section_title, $section_intro);
$column = new bpCol();
$block = new bpItem();
$types = array(
    'Solid' => '',
    'Outline' => 'outline-'
);

foreach ($types as $key => $variable) {
    $block->add_content("<h3>{$key} Buttons</h3>");
    $buttons = '<ul class="list-inline">';
    foreach ($theme_colors as $color) {
        $buttons .= "<li class='list-inline-item mb-2'><button type='button' class='btn btn-{$variable}{$color}'>.btn-{$color}</button></li>";
    }
    $buttons .= '</ul>';

    $block->add_content($buttons);

    $column_content = $block->build_item();
    $column_classes = array(
        'col-ms-6',
        'col-md-4',
        'col-ml-3'
    );
    $column->add_content($block->build_item());
}

ob_start(); ?>
<h3>Buttons Sizes</h3>
<button type="button" class="btn btn-secondary btn-sm">Small</button>
<button type="button" class="btn btn-secondary">Default</button>
<button type="button" class="btn btn-secondary btn-lg">Large</button>
<button type="button" class="btn btn-secondary btn-block">Block level button</button>
<?php
$block_content = ob_get_clean();
$block->__set('content', $block_content);
$column->add_content($block->build_item());

ob_start(); ?>
<h3>Button States</h3>
<p>
    <button type="button" class="btn btn-tertiary" role="button">Default Button</button>
    <button type="button" class="btn btn-tertiary active" role="button" aria-pressed="true">Active Button</button>
    <button class="btn btn-tertiary" role="button" disabled>Disabled Button</button>
</p>
<?php
$block_content = ob_get_clean();
$block->__set('content', $block_content);
$column->add_content($block->build_item());

$section->add_content($column->build_item());
echo $section->buildSection();

?>
