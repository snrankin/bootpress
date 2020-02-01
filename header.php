<?php

/** ============================================================================
 * header
 * @package BootPress
 * @version <<version>>
 * @author  Sam Rankin <samrankin.dev@gmail.com>
 * -----
 * Created:  10-3-19
 * Modified: 12-9-19 at 10:31 am by Sam Rankin <samrankin.dev@gmail.com>
 * =========================================================================== */


?>
<!doctype html>
<html <?php language_attributes();
        schemaPageType(); ?>>

    <head>
        <meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="X-UA-Compatible" content="IE=Edge">
        <link rel="pingback" href="<?php echo esc_url(get_bloginfo('pingback_url')); ?>">
        <link rel="profile" href="https://gmpg.org/xfn/11">
        <?php wp_head(); ?>
    </head>

    <body <?php body_class(); ?>>
        <?php do_action('bp_hook_top'); ?>
        <div id="wrapper" class="site">
            <?php getComponent('header', 'header-site'); ?>
            <div id="content" class="site-content flex-fill">
                <div id="primary" class="content-area">
                    <main id="main" class="site-main">
