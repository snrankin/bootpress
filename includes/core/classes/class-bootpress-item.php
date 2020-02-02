<?php

/** ============================================================================
 * class-bootpress-item
 * @package BootPress
 * @version 1.0.0
 * @author  Sam Rankin <samrankin.dev@gmail.com>
 * ========================================================================== */

class bpBuildHTMLItem
{
    public $content = '';
    public $tag     = '';
    public $id      = '';
    public $class   = '';
    public $style   = '';
    public $data    = '';
    public $inner   = '';

    public function __construct($content, $tag, $id, $class, $style, $data, $inner)
    {
        $this->content = $content;
        $this->tag     = $tag;
        $this->id      = $id;
        $this->class   = $class;
        $this->style   = $style;
        $this->data    = $data;
        $this->inner   = $inner;
    }

    function __set($name, $value)
    {
        if (property_exists($this, $name)) {
            if ($name == 'class') {
                $this->$name = outputClasses($this->$name, $value);
            } else if ($name == 'style') {
                $this->$name = outputStyles($this->$name, $value);
            } else if ($name == 'data' || $name == 'inner') {
                $this->$name = parseArgs($value);
            } else {
                $this->$name = $value;
            }
        } else {
            $this->$name = $value;
        }
    }

    function __get($name)
    {
        if (method_exists($this, $name)) {
            return $this->$name();
        } elseif (property_exists($this, $name)) {
            // Getter/Setter not defined so return property if it exists
            return $this->$name;
        }
        return null;
    }

    function get()
    {
        return $this;
    }

    public function add_content($content)
    {
        if (!empty($content)) {
            $this->content .= $content;
        }
    }

    public function build_item()
    {
        $args = array();

        $content = $this->content;

        if (!empty($this->tag)) {
            $args['tag'] = $this->tag;
        }
        if (!empty($this->id)) {
            $args['id'] = $this->id;
        }
        if (!empty($this->class)) {
            $args['class'] = $this->class;
        }
        if (!empty($this->style)) {
            $args['style'] = $this->style;
        }
        if (!empty($this->data)) {
            $args = parseArgs($args, $this->data);
        }
        if (!empty($this->inner)) {
            $content = itemWrapperHTML($content, $this->inner);
        }

        return itemWrapperHTML($content, $args);
    }
}

class bpItem extends bpBuildHTMLItem
{
    public function __construct()
    {
        $this->__set('class', 'content-item');
    }
}

class bpCol extends bpBuildHTMLItem
{

    public function __construct()
    {
        $this->__set('class', 'bp_col');
        $this->__set('inner', array(
            'class' => 'content-wrapper'
        ));
    }
}

class bpRow extends bpBuildHTMLItem
{

    public function __construct()
    {
        $this->__set('class', 'container');
        $this->__set('inner', array(
            'class' => 'row'
        ));
    }
}

class bpSection extends bpBuildHTMLItem
{

    public function __construct()
    {
        $this->__set('tag', 'section');
        $this->__set('class', 'section-outer');
        $this->__set('inner', array(
            'class' => 'section-inner'
        ));
    }
}


function bootpressSection($content, $args = array())
{
    $defaults = array(
        'section_wrapper' => array(
            'tag'   => 'div',
            'id'    => '',
            'class' => 'section-wrapper',
            'style' => ''
        ),
        'section_inner' => array(
            'tag'   => 'div',
            'id'    => '',
            'class' => 'section-inner',
            'style' => ''
        ),
        'container' => array(
            'tag'   => 'div',
            'id'    => '',
            'class' => 'container',
            'style' => ''
        ),
    );

    $options = parseArgs($defaults, $args);
    extract($options);

    $section = '';
    $section = itemWrapperHTML($content, $container);
    $section = itemWrapperHTML($section, $section_inner);
    $section = itemWrapperHTML($section, $section_wrapper);

    return $section;
}

function bootpressRow($content, $args = array())
{
    $defaults = array(
        'tag'   => 'div',
        'id'    => '',
        'class' => 'row',
        'style' => ''
    );

    $options = parseArgs($defaults, $args);

    $section = '';
    $section = itemWrapperHTML($content, $options);


    return $section;
}

function bootpressCol($content, $args = array())
{
    $defaults = array(
        'column' => array(
            'tag'   => 'div',
            'id'    => '',
            'class' => '',
            'style' => ''
        ),
        'content_wrapper' => array(
            'tag'   => 'div',
            'id'    => '',
            'class' => 'content-wrapper',
            'style' => ''
        )
    );

    $options = parseArgs($defaults, $args);
    extract($options);

    $col = '';
    $col = itemWrapperHTML($content, $content_wrapper);
    $col = itemWrapperHTML($col, $column);

    return $col;
}

function bootpressItem($content = '', $args = array())
{
    if (empty($content)) {
        return;
    }
    $defaults = array(
        'tag'   => 'div',
        'id'    => '',
        'class' => 'content-item',
        'style' => ''
    );

    $atts = parseArgs($defaults, $args);

    $item = itemWrapperHTML($content, $atts);

    return $item;
}

function mainCol($content, $args = array())
{
    global $post;
    $post_slug    = $post->post_name;
    $classes      = get_post_class();
    $item         = get_post_type();
    $id           = get_the_ID();

    if (is_search()) {
        $item = 'search';
        $id   = 0;
    } elseif (is_404()) {
        $item = 'error';
        $id   = 0;
    }
    $wrapper_classes = array(
        'main-content',
        $item . '-content',
    );

    $layout  = get_field('sidebar_location', $id);
    $sidebar = get_field('sidebar', $id);
    $mainCol = themeConfig('main-col-width');
    $width = '12';

    if (isset($args['width'])) {
        $width = 'col-' . themeConfig('desktop-bp') . '-' . $args['width'];
    } elseif (!empty($sidebar)) {
        if ($layout == 'left' || $layout == 'right') {
            $width = 'col-' . themeConfig('desktop-bp') . '-' . $mainCol;
            if ($layout == 'left') {
                $wrapper_classes[] = 'order-' . themeConfig('desktop-bp') . '-last';
            }
        }
    } else {
        $width = 'col-' . $width;
    }

    $wrapper_classes[] = $width;

    $wrapper_classes = outputClasses($wrapper_classes, $classes);

    $wrapper_atts = array(
        'id'       => $post_slug . '-' . $item . '-content',
        'itemprop' => 'mainEntityOfPage',
        'role'     => 'main',
        'class'    => $wrapper_classes,
    );

    $wrapper_atts['tag'] = (is_single()) ? 'article' : 'div';

    $atts = array(
        'column' => $wrapper_atts
    );

    $atts = parseArgs($atts, $args);

    return bootpressCol($content, $atts);
}


function displayACFContentItem()
{
}
