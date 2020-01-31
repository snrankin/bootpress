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
 * Last Modified: 11-18-19 at 9:02 am
 * Modified By:   Sam Rankin <samrankin.dev@gmail.com>
 * -----
 * HISTORY:
 * Date        By    Comments
 * --------    --    --------------------------------------------------------------
 * =========================================================================== */

$item      = 'blog';
$post = get_post(get_the_ID());
$next_post = get_next_post();
$prev_post = get_previous_post();
?>
<nav class="single-post-nav content-item container grid-half d-print-none">
    <div class="row align-items-start">
        <?php if (!empty($prev_post)): ?>
        <?php getComponent('blog', 'single/prev'); ?>
        <?php endif; ?>
        <?php if (!empty($next_post)): ?>
        <?php getComponent('blog', 'single/next'); ?>
        <?php endif; ?>
    </div>
</nav>
