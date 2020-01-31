<?php

/** ============================================================================
 * Description
 * @package BootPress
 * @version <<version>>
 * -----
 * @author Sam Rankin <samrankin.dev@gmail.com>
 * @copyright Copyright (c) 2019 Your Company
 * -----
 * Created Date:  10-21-19
 * Last Modified: 11-25-19 at 4:09 pm
 * Modified By:   Sam Rankin <samrankin.dev@gmail.com>
 * -----
 * HISTORY:
 * Date    	By	Comments
 * --------	--	--------------------------------------------------------------
* =========================================================================== */

$id      = get_the_ID();
$item    = itemType($id);
?>
<meta itemprop='isFamilyFriendly' content='True' />
<header class="entry-header">
    <?php the_post_thumbnail(); ?>
    <h1 class="entry-title"><?php the_title(); ?></h1>
</header><!-- .entry-header -->

<div class="entry-content" itemprop="mainEntityOfPage">
    <?php the_content(__('Continue reading <span class="meta-nav">&rarr;</span>', THEME_SLUG)); ?>
</div><!-- .entry-content -->

<?php
    getComponent('blog', 'meta');
?>
