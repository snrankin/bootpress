<?php

/**
 * Add google fonts and Font Awesome asynchronously via webfont.js
 */

function asyncFonts()
{
    $webFontConfig = 'WebFontConfig =
            {
                google: {
                    families: [
                        \'Poppins:200,400,400i,700\'
                    ]
                },
                custom: {
                    families: [\'Font Awesome 5 Pro\', \'Font Awesome 5 Pro\', \'Font Awesome 5 Brands\'],
                    urls: [
                        \'' . ASSETS_PATH_URI . '/css/font-awesome-5-pro-300.css\',
                        \'' . ASSETS_PATH_URI . '/css/font-awesome-5-pro-900.css\',
                        \'' . ASSETS_PATH_URI . '/css/font-awesome-5-brands-400.css\',
                    ]
                },
                active: function() {sessionStorage.fonts = true;}
            };';


    $webfonts = $webFontConfig . '(function(d) {var wf = d.createElement(\'script\'),s = d.scripts[0];wf.src = \'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js\';wf.async = true;s.parentNode.insertBefore(wf, s);})(document);';

    $asyncFonts = itemWrapperHTML($webfonts, array('tag' => 'script', 'type' => 'text/javascript'));

    echo $asyncFonts;
}

add_action('wp_head', 'asyncFonts');
