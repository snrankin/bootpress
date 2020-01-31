<?php

/** ============================================================================
 * The template for displaying comments
 *
 * This is the template that displays the area of the page that contains both the current comments
 * and the comment form.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 * @package BootPress
 * @version <<version>>
 * -----
 * @author Sam Rankin <samrankin.dev@gmail.com>
 * @copyright Copyright (c) 2019 Your Company
 * -----
 * Created Date:  10-3-19
 * Last Modified: 11-25-19 at 9:30 am
 * Modified By:   Sam Rankin <samrankin.dev@gmail.com>
 * -----
 * HISTORY:
 * Date        By    Comments
 * --------    --    --------------------------------------------------------------
 * =========================================================================== */


$discussion = discussionData();
$id = get_the_ID();
$post_type = get_post_type($id);
$comments_html = '';
$comment_atts = array(
    'id'         => $post_type . '-' . $id . '-comments',
    'aria-label' => get_the_title() . ' Comments',
    'class'      => array(
        $post_type . '-comments',
        'comments-area'
    )
);
if(!comments_open()){
    $comment_atts['class'] = 'comments-closed';
}
?>

<?php if (comments_open()){ ?>
<?php ob_start(); ?>
<div class="<?php echo $discussion->responses > 0 ? 'comments-title-wrap' : 'comments-title-wrap no-responses'; ?>">
    <h2 class="comments-title">
        <?php
                if (have_comments()){
                    _e('Join the conversation', THEME_SLUG);
                } else {
                    _e('Leave a comment', THEME_SLUG);
                }
            ?>

    </h2><!-- .comments-title -->
    <p class="text-muted">
        <?php
                if ('1' == $discussion->responses) {
                    printf(
                        _x(
                            'One reply on &ldquo;%s&rdquo;',
                            'comments title',
                            THEME_SLUG
                        ),
                        get_the_title()
                    );
                } else {
                    printf(
                        _nx(
                            '%1$s reply on &ldquo;%2$s&rdquo;',
                            '%1$s replies on &ldquo;%2$s&rdquo;',
                            $discussion->responses, 'comments title', THEME_SLUG
                        ),
                        number_format_i18n($discussion->responses),
                        get_the_title()
                    );
                }
            ?>
    </p>
</div><!-- .comments-title-flex -->
<div class="mb-0 comments-list" itemscope itemtype="http://schema.org/UserComments">
    <?php
        $comments = get_comments(array('post_id' => $id));
        wp_list_comments(
            array(
                'walker'      => new WP_Bootstrap_Walker_Comment(),
                'avatar_size' => 60,
                'short_ping'  => true,
                'style'       => 'div',
            ),
            $comments
        );
    ?>
</div><!-- .comments-list -->
<?php
        paginate_comments_links(array(
            'screen_reader_text'=> __('Comments Navigation', THEME_SLUG),
            'prev_text'=> '<i class="fas fa-angle-left"></i>' . __('Previous', THEME_SLUG),
            'next_text'=> __('Next', THEME_SLUG) . '<i class="fas fa-angle-right"></i>',
        ));
    ?>

<?php commentForm(); ?>

<?php
        $comments_html = ob_get_clean();
        echo bootpressItem($comments_html, $comment_atts);
    ?>

<?php } else { ?>
<p class="no-comments">
    <?php _e('Comments are closed.', THEME_SLUG); ?>
</p>
<?php } //End if comments_open() ?>
