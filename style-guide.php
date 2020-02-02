<?php

/** ============================================================================
 * Template Name: Style Guide
 * @package BootPress
 * @version 1.0.0
 * @author  Sam Rankin <samrankin.dev@gmail.com>
 * ========================================================================== */

get_header();
getComponent('header', 'header-page');
getComponent('style-guide', 'colors');
getComponent('style-guide', 'type');
getComponent('style-guide', 'buttons');
getComponent('style-guide', 'grid');
get_footer();
