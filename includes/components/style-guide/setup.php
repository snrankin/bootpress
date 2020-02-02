<?php

/** ============================================================================
 * Style Guide Setup
 * @package BootPress
 * @version 1.0.0
 * @author  Sam Rankin <samrankin.dev@gmail.com>
 * ========================================================================== */
class bpStyleSection extends bpSection
{

    public function __construct()
    {
        $theme_colors = array(
            'primary',
            'secondary',
            'tertiary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark',
            'white'
        );
        for ($i = 1; 9 >= $i; $i++) {
            $theme_colors[] = 'gray-' . $i . '00';
        }
        $this->__set('theme_colors', $theme_colors);

        parent::__construct();
    }

    public function set_intro($title = '', $intro = '')
    {
        $column = new bpCol();
        $column->__set('class', 'col-12');
        if (!empty($title)) {
            $this->__set('id', changeCase($title));
            $section_title = new bpItem();
            $section_title->__set('tag', 'h2');
            $section_title->__set('class', 'display-2');
            $section_title->add_content(__($title, THEME_SLUG));
            $column->add_content($section_title->build_item());
        }
        if (!empty($intro)) {
            $section_intro = new bpItem();
            $section_intro->__set('tag', 'p');
            $section_intro->__set('class', 'lead');
            $section_intro->add_content(__($intro, THEME_SLUG));
            $column->add_content($section_intro->build_item());
        }
        $this->__set('content', $column->build_item());
    }

    public function buildSection()
    {
        $section_row = new bpRow();
        $section_row->__set('content', $this->content);
        $this->__set('content', $section_row->build_item());

        return $this->build_item();
    }
}
