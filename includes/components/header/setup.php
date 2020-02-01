<?php

/** ============================================================================
 * setup
 * @package BootPress
 * @version 1.0.0
 * @author  Sam Rankin <samrankin.dev@gmail.com>
 * ========================================================================== */

/**
 * Add a skip to content link for screen readers
 */

function skipLink()
{
    echo '<a class="skip-link sr-only" href="#content">' . esc_html('Skip to content', THEME_SLUG) . '</a>';
}
add_action('bp_hook_top', 'skipLink', 999);
