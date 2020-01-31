<?php


/**
 * Better print_r function, wraps output in <pre> tags
 */
function betterPrint($val)
{
    echo '<pre>';
    print_r($val);
    echo '</pre>';
}

/**
 * Turn hex values into rgb values
 *
 * @param string $hex
 * @param string $opacity
 *
 * @return string rgba(r,g,b,a)
 */
function hexToRGBA($hex, $opacity)
{
    $hex = str_replace("#", "", $hex);

    if (strlen($hex) == 3) {
        $r = hexdec(substr($hex, 0, 1) . substr($hex, 0, 1));
        $g = hexdec(substr($hex, 1, 1) . substr($hex, 1, 1));
        $b = hexdec(substr($hex, 2, 1) . substr($hex, 2, 1));
    } else {
        $r = hexdec(substr($hex, 0, 2));
        $g = hexdec(substr($hex, 2, 2));
        $b = hexdec(substr($hex, 4, 2));
    }

    $a = intval($opacity) * 0.01;

    $rgba = array($r, $g, $b, $a);

    $Final_Rgb_color = implode(", ", $rgba);

    return $Final_Rgb_color;
}

/**
 * Function to format a phone number for a url
 *
 * @return string $number The formatted phone number
 */
function formatPhoneURL($number = '')
{
    if (empty($number) || !isPhoneNumber($number)) {
        return;
    }

    $number = preg_replace('/\s*\D/', '', $number);

    // get number length.
    $length = strlen($number);

    if ($length == 7) {
        $number = substr($number, 0, 3) . '-' . substr($number, 3, 4);
    } elseif ($length == 10) {
        $number = substr($number, 0, 3) . '-' . substr($number, 3, 3) . '-' . substr($number, 6, 4);
    } elseif ($length > 10) {
        $number = substr($number, 0, 1) . '-' . substr($number, 1, 3) . '-' . substr($number, 7, 4);
    }

    return $number;
}

function outputURL($str, $display = false)
{
    $url = '';
    if (isPhoneNumber($str)) {
        $url = esc_url('tel:' . formatPhoneURL($str), 'tel');
    } elseif (is_email($str)) {
        $url = esc_url('mailto:' . antispambot(sanitize_email($str)), 'mailto');
    } else {
        $url = esc_url($str);
    }

    if ($display == true) {

        $url = 'href="' . $url . '"';
    }
    return $url;
}

/**
 * Formats the string to a specific case
 *
 * @param string $string
 *
 * @return string
 */
function changeCase($string, $case = 'kebab')
{
    switch ($case) {
        case 'title':
            $string = str_replace(array('_', '-'), ' ', $string);
            // Words that should be entirely lower-case
            $articles_conjunctions_prepositions = array(
                'a',
                'an',
                'and',
                'at',
                'but',
                'by',
                'else',
                'for',
                'from',
                'if',
                'in',
                'into',
                'nor',
                'off',
                'on',
                'or',
                'out',
                'over',
                'the',
                'then',
                'to',
                'when',
                'with',
            );
            // Words that should be entirely upper-case
            // (need to be lower-case in this list!)
            $acronyms_and_such = array(
                'asap', 'unhcr', 'wpse', 'wtf',
            );
            // split title string into array of words
            $words = explode(' ', mb_strtolower($string));
            // iterate over words
            foreach ($words as $position => $word) {
                // re-capitalize acronyms
                if (in_array($word, $acronyms_and_such)) {
                    $words[$position] = mb_strtoupper($word);
                    // capitalize first letter of all other words, if...
                } elseif (
                    // ...first word of the title string...
                    0 === $position ||
                    // ...or not in above lower-case list*/
                    !in_array($word, $articles_conjunctions_prepositions)
                ) {
                    $words[$position] = ucwords($word);
                }
            }
            // re-combine word array
            $string = implode(' ', $words);
            break;

            // Formats the string to Snake Case (snake_case)
        case 'snake':
            $string = strtolower($string);
            $string = sanitize_title_with_dashes($string);
            $string = str_replace('-', '_', $string);
            break;

            // Formats the string to Kebab Case (kebab-case)
        case 'kebab':
            $string = strtolower($string);
            $string = sanitize_title_with_dashes($string);
            $string = str_replace('_', '-', $string);

            break;
        default:
            # code...
            break;
    }

    return $string;
}


function unsetEmptyArrayValue($array, $allowed_empty = array())
{
    if (!empty($array) && is_array($array)) {
        foreach ($array as $key => $value) {
            if (($value === NULL || $value === '' || (is_array($value) && count($value) == 0) && !in_array($key, $allowed_empty))) {
                unset($array[$key]);
            } elseif (is_array($value) && count($value) >= 1) {
                $array[$key] = unsetEmptyArrayValue($array[$key]);
            }
        }
    }
    return $array;
}

/**
 * Returns a sanitized array or string of classes
 *
 * @param array|string $classes_1
 * @param array|string $classes_2
 *
 * @return array|null
 */
function outputClasses($classes_1 = '', $classes_2 = '', $display = false)
{
    $classes = array();
    if (!empty($classes_1)) {
        if (is_array($classes_1)) {
            $classes = $classes_1;
        } elseif (is_object($classes_1)) {
            $classes = (array) $classes_1;
        } else {
            $classes = explode(' ', $classes_1);
        }
    }
    if (!empty($classes_2)) {
        if (is_array($classes_2)) {
            $classes = array_merge_recursive($classes, $classes_2);
        } elseif (is_object($classes_2)) {
            $classes_2 = (array) $classes_2;
            $classes = array_merge_recursive($classes, $classes_2);
        } else {
            $classes_2 = explode(' ', $classes_2);
            $classes   = array_merge_recursive($classes, $classes_2);
        }
    }
    if (!empty($classes)) {
        $classes = array_unique($classes);
        $classes = unsetEmptyArrayValue($classes);
        array_walk($classes, 'sanitize_html_class');
        if ($display == true) {
            $classes = implode(' ', $classes);
            return 'class="' . $classes . '"';
        } else {
            return $classes;
        }
    } else {
        return null;
    }
}

/**
 * Add html markup for inline styles from array
 *
 * @param array $styles
 * @param boolean $display Whether or not the value should be echoed or returned
 *
 * @return array|string|null
 */

function outputStyles($styles_1 = '', $styles_2 = '', $display = false)
{
    $styles = array();
    if (!empty($styles_1)) {
        if (is_array($styles_1)) {
            $styles = $styles_1;
        } elseif (is_object($styles_1)) {
            $styles = (array) $styles_1;
        } else {
            $styles = explode(' ', $styles_1);
        }
    }
    if (!empty($styles_2)) {
        if (is_array($styles_2)) {
            $styles = parseArgs($styles, $styles_2);
        } elseif (is_object($styles_2)) {
            $styles_2 = (array) $styles_2;
            $styles = parseArgs($styles, $styles_2);
        } else {
            $styles_2 = explode(' ', $styles_2);
            $styles   = parseArgs($styles, $styles_2);
        }
    }
    if (!empty($styles)) {
        $styles = array_unique($styles);
        $styles = unsetEmptyArrayValue($styles);
        $css = '';

        if ($display == true) {
            foreach ($styles as $property => $value) {
                if (preg_match('/https?\:\/\/[^\" \n]+/i', $value)) {
                    $css .= $property . ': url(' . $value . '); ';
                } else {
                    $css .= $property . ': ' . $value . '; ';
                }
            }

            return 'style="' . trim($css) . '"';
        } else {
            return $styles;
        }
    } else {
        return null;
    }
}



function parseArgs($defaults = array(), $args = array(), $allowed_empty = array())
{
    $empty_atts = array(
        'itemscope',
        'value',
        'allowfullscreen',
        'controls'
    );
    $empty_atts =  wp_parse_args($allowed_empty, $empty_atts);
    if (!empty($args)) {
        if (is_array($args)) {
            foreach ($args as $key => $value) {
                if ($key === 'class' && isset($defaults['class'])) {
                    $args['class'] = outputClasses($defaults['class'], $args['class']);
                } elseif ($key === 'style' && isset($defaults['style'])) {
                    $args['style'] = outputStyles($defaults['style'], $args['style']);
                } elseif (is_array($value) && array_key_exists($key, $defaults) && is_array($defaults[$key])) {
                    $args[$key] = parseArgs($defaults[$key], $args[$key], $empty_atts);
                }
            }

            $args = unsetEmptyArrayValue($args, $empty_atts);
            $defaults = unsetEmptyArrayValue($defaults, $empty_atts);
            $args = array_replace_recursive($defaults, $args);
            return unsetEmptyArrayValue($args, $empty_atts);
        } else {
            return wp_parse_args($args, $defaults);
        }
    } else {
        return $defaults;
    }
}



/**
 * Sanitizes data attributes from an array and outputs them as a string
 *
 * @param array $data
 *
 * @return string
 */

function outputHTMLData($data = array())
{
    if (empty($data)) {
        return;
    }

    if (isset($data['tag'])) {
        unset($data['tag']);
    }

    $html = '';
    foreach ($data as $property => $value) {
        if ('href' === $property) {
            $html .= ' ' . outputURL($value, true);
        } elseif ($property === 'style') {
            $html .= ' ' . outputStyles($value, '', true);
        } elseif ($property === 'class') {
            $html .= ' ' . outputClasses($value, '', true);
        } elseif (is_array($value)) {
            $html .= ' ' . esc_attr($property) . '="' . json_encode($value) . '"';
        } else {
            $html .= ' ' . esc_attr($property) . '="' . esc_attr($value) . '"';
        }
    }
    return $html;
}

function itemWrapperHTML($content = '', $args = array())
{

    $defaults = array(
        'tag'   => 'div',
        'id'    => '',
        'class' => '',
        'style' => ''
    );

    $options = parseArgs($defaults, $args);
    extract($options);

    $item = '';

    $item .= '<' . esc_attr($tag) . outputHTMLData($options) . '>' . $content . '</' . esc_attr($tag) . '>';

    return $item;
}


function screenReaderText($text = '')
{
    if (empty($text)) return;
    $args = array(
        'tag' => 'span',
        'class' => 'sr-only'
    );
    $text = esc_html__($text, THEME_SLUG);
    $text = itemWrapperHTML($text, $args);

    return $text;
}

/**
 * Function for making sure icons are ADA compliant
 *
 * @param string|array|object $class The icon classes
 * @param string              $label (Optional) The hidden label to add
 * @param bool                $list If this is a list item
 * @param array               $args Additional arguments
 */
function iconFont($class = '', $label = '', $list = false, $args = array())
{
    if (empty($class)) return;
    $icon_args = array(
        'tag'         => 'i',
        'aria-hidden' => 'true',
        'role'        => 'presentation',
        'class'       => outputClasses($class)
    );

    $atts = parseArgs($icon_args, $args);

    if (!empty($label)) {
        $label = screenReaderText($label);
    }

    $icon = itemWrapperHTML('', $atts);

    if ($list == true) {
        $list_args = array(
            'tag' => 'span',
            'class' => 'fa-li'
        );
        $icon = itemWrapperHTML($icon, $list_args);
        return $icon;
    } else {
        return $icon . $label;
    }
}


function metaItem($content = '', $itemProp = '')
{
    if (empty($content)) return;
    $atts = array(
        'itemprop' => $itemProp,
        'content'  => $content
    );
    return '<meta' . outputHTMLData($atts) . '>';
}
