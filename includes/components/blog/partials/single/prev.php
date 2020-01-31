<?php

/** ============================================================================
 * Description
 * @package BootPress Test Project
 * @version <<version>>
 * -----
 * @author Sam Rankin <samrankin.dev@gmail.com>
 * @copyright Copyright (c) 2019 Your Company
 * -----
 * Created Date:  2-4-19
 * Last Modified: 10-5-19 at 11:51 am
 * Modified By:   Sam Rankin <samrankin.dev@gmail.com>
 * -----
 * HISTORY:
 * Date        By    Comments
 * --------    --    --------------------------------------------------------------
 * =========================================================================== */

$prev_post = get_previous_post();
$id        = $prev_post->ID;
$title     = '<h4>Previous Post:</h4><h5 class="blog-title" itemprop="name headline">' . get_the_title($id) . '</h5>';
$classes   = array(
    'single-nav-item',
    'prev-post',
    'd-flex',
    'flex-row',
    'align-items-center',
);
$args = array(
    'wrapper_classes'       => $classes,
    'body_classes'          => 'w-75',
    'add_image'             => 1,
    'image_wrapper_classes' => 'w-25',
    'image_classes'         => '',
    'image_size'            => 'admin-thumb',
    'add_title'             => 1,
    'before_title'          => '<h4>Previous Post:</h4>',
    'title_tag'             => 'h5',
);
?>
<?php if (!empty($prev_post)): ?>
<div class="col-ms-6">
    <div class="content-wrapper">
        <div class="content-item">
            <?php echo postGridItem($id, $args); ?>
        </div>
    </div>
</div>
<?php endif; ?>
