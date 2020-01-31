<?php

/** ============================================================================
 * The template for displaying all single posts
 * @package BootPress
 * @version <<version>>
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 * -----
 * @author Sam Rankin <samrankin.dev@gmail.com>
 * @copyright Copyright (c) 2019 Your Company
 * -----
 * Created Date:  10-3-19
 * Last Modified: 12-3-19 at 9:25 am
 * Modified By:   Sam Rankin <samrankin.dev@gmail.com>
 * -----
 * HISTORY:
 * Date    	By	Comments
 * --------	--	--------------------------------------------------------------
 * =========================================================================== */

get_header();
getComponent('header', 'header-page');
if (have_posts()) {


    while (have_posts()) {

        the_post();
        the_content();
    }
}

get_footer();
