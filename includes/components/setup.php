<?php

/**
 * Include component partial file
 *
 * Includes a file from a specific compontent. The component must be located in
 * the components folder and the file must be located in the partials sub folder.
 * To be used for adding functionality for a specific component
 *
 * @param string $component Name of folder where the partial is located.
 * (subfolder of components)
 * @uses include_once()
 */
function incComponent($component, $partial = 'setup')
{
    if ($partial !== 'setup') {
        $file = COMPONENTS_PATH . '/' . $component . '/partials/' . $partial . '.php';
    } else {
        $file = COMPONENTS_PATH . '/' . $component . '/setup.php';
    }

    if (file_exists($file)) {
        include_once $file;
    }
}

/**
 * Load component partial file
 *
 * Loads a file from a specific compontent. The component must be located in the
 * components folder. If no file name is specified it defaults to template.
 *
 * @param string $component Name of folder where the partial is located.
 * (subfolder of components)
 * @param string $partial Name of file to load.
 * @uses get_template_part()
 */
function getComponent($component, $partial = 'template')
{
    if ($partial !== 'template') {
        $file = COMPONENTS_PATH . '/' . $component . '/partials/' . $partial . '.php';
        $path = 'includes/components/' . $component . '/partials/' . $partial;
    } else {
        $file = COMPONENTS_PATH . '/' . $component . '/partials/template.php';
        $path = 'includes/components/' . $component . '/partials/template';
    }

    if (file_exists($file)) {
        get_template_part($path);
    }
}
/**
 * Load desired components into theme
 */

//$components = glob(COMPONENT_PATH . '/*', GLOB_ONLYDIR);
$components = array(
    'schema',
    'nav',
    'header',
    'footer',
    'blog',
    'comments',
    'search',
    'sidebar',
    'social',
    'style-guide'
);
foreach ($components as $component) {
    incComponent($component);
}
