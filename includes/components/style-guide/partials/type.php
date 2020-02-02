<?php

/** ============================================================================
 * grid
 * @package BootPress
 * @version 1.0.0
 * @author  Sam Rankin <samrankin.dev@gmail.com>
 * ========================================================================== */
$section = new bpStyleSection();
$theme_colors = $section->theme_colors;

$section_title = 'Typography';

$section_intro = '';
$section->set_intro($section_title, $section_intro);
$column = new bpCol();
$column->__set('class', array(
    'col-12'
));

$block = new bpItem();
ob_start(); ?>
<h3>Headings</h3>
<div class="p-3 border">
    <p class="h1">Heading 1 <small>Sub-heading</small></p>
    <p class="h2">Heading 2 <small>Sub-heading</small></p>
    <p class="h3">Heading 3 <small>Sub-heading</small></p>
    <p class="h4">Heading 4 <small>Sub-heading</small></p>
    <p class="h5">Heading 5 <small>Sub-heading</small></p>
    <p class="h6">Heading 6 <small>Sub-heading</small></p>
</div>
<?php
$block_content = ob_get_clean();
$block->__set('content', $block_content);
$column->add_content($block->build_item());
ob_start();
?>
<h3>Display Headings</h3>
<div class="p-3 border">
    <p class="display-1">Display 1</p>
    <p class="display-2">Display 2</p>
    <p class="display-3">Display 3</p>
    <p class="display-4">Display 4</p>
</div>
<?php
$block_content = ob_get_clean();
$block->__set('content', $block_content);
$column->add_content($block->build_item());
ob_start();
?>
<h3>Inline text elements</h3>
<p>Styling for common inline HTML5 elements.</p>
<div class="p-3 border">
    <p class="lead">This is the article lead it stands out at the start of the article.</p>
    <p>You can use the mark tag to <mark>highlight</mark> text.</p>
    <p><del>This line of text is meant to be treated as deleted text.</del></p>
    <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
    <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
    <p><u>This line of text will render as underlined</u></p>
    <p><small>This line of text is meant to be treated as fine print.</small></p>
    <p><strong>This line rendered as bold text.</strong></p>
    <p><em>This line rendered as italicized text.</em></p>
    <p><abbr title="attribute">attr</abbr></p>
    <p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr></p>
    <?php
    foreach ($theme_colors as $color) {
        $atts = array(
            'tag' => 'p',
            'class' => "text-{$color}"
        );

        $text = changeCase($color, 'title') . ' Color Text';

        echo itemWrapperHTML($text, $atts);
    }
    ?>
</div>
<?php
$block_content = ob_get_clean();
$block->__set('content', $block_content);
$column->add_content($block->build_item());
ob_start();
?>
<h3>Blockquotes</h3>
<blockquote class="blockquote">
    <p>The most important moment of your life is now. The most important person in your life is the one you are with now, and the most important activity in your life is the one you are involved with now.</p>
    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
<?php
$block_content = ob_get_clean();
$block->__set('content', $block_content);
$column->add_content($block->build_item());
ob_start();
?>
<h3>Lists</h3>
Remove the default list-style and left margin on list items (immediate children only). This only applies to immediate children list items, meaning you will need to add the class for any nested lists as well.
<ul class="list-unstyled">
    <li>Lorem ipsum dolor sit amet</li>
    <li>Consectetur adipiscing elit</li>
    <li>Integer molestie lorem at massa</li>
    <li>Facilisis in pretium nisl aliquet</li>
    <li>Nulla volutpat aliquam velit
        <ul>
            <li>Phasellus iaculis neque</li>
            <li>Purus sodales ultricies</li>
            <li>Vestibulum laoreet porttitor sem</li>
            <li>Ac tristique libero volutpat at</li>
        </ul>
    </li>
    <li>Faucibus porta lacus fringilla vel</li>
    <li>Aenean sit amet erat nunc</li>
    <li>Eget porttitor lorem</li>
</ul>
<?php
$block_content = ob_get_clean();
$block->__set('content', $block_content);
$column->add_content($block->build_item());
$section->add_content($column->build_item());
echo $section->buildSection();
