<?php

/** ============================================================================
 * Description
 * @package BootPress
 * @version <<version>>
 * -----
 * @author Sam Rankin <samrankin.dev@gmail.com>
 * @copyright Copyright (c) 2019 Your Company
 * -----
 * Created Date:  11-15-19
 * Last Modified: 11-15-19 at 10:56 am
 * Modified By:   Sam Rankin <samrankin.dev@gmail.com>
 * -----
 * HISTORY:
 * Date    	By	Comments
 * --------	--	--------------------------------------------------------------
* =========================================================================== */

?>

<div class="author-info card card-horizontal">
    <div class="row flex-md-nowrap no-gutters">
        <div class="col-md-auto">
            <?php
                $args = array(
                    'size'     => 200,
                    'class'    => 'card-img flex-fill d-flex justify-content-center align-items-center',
                    'img_atts' => array(
                        'class'        => 'embed-responsive-item',
                        'alt'          => get_the_author(),
                        'parent-fit'   => 'cover',
                        'wrapper_atts' => array(
                            'class' => 'card-img flex-fill embed-responsive embed-responsive-1by1 d-flex justify-content-center align-items-center'
                        )
                    )
                );
                echo getAvatar(get_the_author_meta('id'), $args);
            ?>
        </div>
        <div class="col-md-auto flex-fill">
            <div class="card-body">
                <h5 class="card-title"><?php printf(__('About %s', THEME_SLUG), get_the_author()); ?></h5>
                <p class="card-text"><?php the_author_meta('description'); ?></p>
                <p class="card-text"> <a class="card-text" href="<?php echo esc_url(get_author_posts_url(get_the_author_meta('ID'))); ?>" rel="author">
                        <?php printf(__('View all posts by %s <i class="fal fa-angle-right"></i>', THEME_SLUG), get_the_author()); ?>
                    </a></p>
            </div>
        </div>
    </div>
</div><!-- .author-info -->
