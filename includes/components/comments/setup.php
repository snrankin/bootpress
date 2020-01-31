<?php

/** ============================================================================
 * Description
 * @package BootPress
 * @version <<version>>
 * -----
 * @author Sam Rankin <samrankin.dev@gmail.com>
 * @copyright Copyright (c) 2019 Your Company
 * -----
 * Created Date:  11-11-19
 * Last Modified: Mon Dec 09 2019
 * Modified By: Sam Rankin
 * -----
 * HISTORY:
 * Date        By    Comments
 * --------    --    --------------------------------------------------------------
 * =========================================================================== */

// Comment functions
function enqueueCommentReplyScript()
{
    if (get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}

/**
 * Returns true if comment is by author of the post.
 *
 * @see get_comment_class()
 */
function isCommentByPostAuthor($comment = null)
{
    if (is_object($comment) && $comment->user_id > 0) {
        $user = get_userdata($comment->user_id);
        $post = get_post($comment->comment_post_ID);
        if (!empty($user) && !empty($post)) {
            return $comment->user_id === $post->post_author;
        }
    }
    return false;
}

/**
 * Returns information about the current post's discussion, with cache support.
 */
function discussionData()
{
    static $discussion, $post_id;

    $current_post_id = get_the_ID();
    if ($current_post_id === $post_id) {
        return $discussion; /* If we have discussion information for post ID, return cached object */
    } else {
        $post_id = $current_post_id;
    }

    $comments = get_comments(
        array(
            'post_id' => $current_post_id,
            'orderby' => 'comment_date_gmt',
            'order'   => get_option('comment_order', 'asc'), /* Respect comment order from Settings Â» Discussion. */
            'status' => 'approve',
            'number'  => 20, /* Only retrieve the last 20 comments, as the end goal is just 6 unique authors */
        )
    );

    $authors = array();
    foreach ($comments as $comment) {
        $authors[] = ((int) $comment->user_id > 0) ? (int) $comment->user_id : $comment->comment_author_email;
    }

    $authors    = array_unique($authors);
    $discussion = (object) array(
        'authors' => array_slice($authors, 0, 6), /* Six unique authors commenting on the post. */
        'responses' => get_comments_number($current_post_id), /* Number of responses. */
    );

    return $discussion;
}

/**
 * Custom callback for outputting comments
 *
 * @return void
 * @author Keir Whitaker
 */

function themeComment($comment, $args, $depth)
{
    $GLOBALS['comment'] = $comment;
    $item               = '';
    if ($comment->comment_approved == '1') :
        $wrapper_atts = array(
            'tag'      => 'li',
            'id'       => 'comment-' . get_comment_ID(),
            'itemprop' => 'comment',
            'class'    => array(
                'comment',
                'media',
                'mds-mt-1'
            )
        );

        $avatar = itemWrapperHTML(get_avatar($comment), array('class' => array('media-left', 'comment-avatar')));

        $commentText = itemWrapperHTML(get_comment_text($comment), array('class' => array('comment-content'), 'itemprop' => 'commentText'));

        $commentDate = array(
            'tag'      => 'time',
            'datetime' => get_comment_time('c', comment_ID()),
            'itemprop' => 'commentTime',
            'class'    => array(
                'comment',
                'media',
                'mds-mt-1'
            )
        );

        $commentDate = itemWrapperHTML(comment_author_link() . ' | ' . get_comment_reply_link('', $comment), $commentDate);

        $commentAuthor = array(
            'tag'      => 'span',
            'class'    => array(
                'comment-author'
            )
        );
        $commentAuthor = itemWrapperHTML(comment_author_link() . ' | ' . get_comment_reply_link('', $comment), $commentAuthor);

        ?>
<li id="comment-<?php comment_ID() ?>" class="comment media mds-mt-1" itemprop="comment">
    <div class="media-left comment-avatar">
        <?php echo get_avatar($comment); ?>
    </div>
    <div class="media-body mds-ml-0">

        <div itemprop="commentText" class="comment-content">
            <?php comment_text() ?>
        </div>
        <footer class="small">
            <time datetime="<?php echo get_comment_time('c', comment_ID()); ?>" itemprop="commentTime">Posted on <a href="#comment-<?php comment_ID() ?>" pubdate><?php comment_date(get_option('date_format')) ?> at <?php comment_time() ?></a></time>
            by <?php comment_author_link() ?> | <?php echo get_comment_reply_link('', $comment); ?>
        </footer>

    </div>

    <?php endif;
    }

    function commentAuthorLinkHTML($return, $author, $comment_comment_id)
    {
        $comment = get_comment($comment_comment_id);
        $url     = get_comment_author_url($comment);
        $return  = "<a href='$url' rel='external nofollow' itemprop='name creator' class='comment-author-link'>$author</a>";

        return $return;
    };

    // add the filter
    add_filter('get_comment_author_link', 'commentAuthorLinkHTML', 10, 3);

    /**
     * Returns the HTML markup to generate a user avatar.
     */
    function userAvatarMarkup($id_or_email = null)
    {

        if (!isset($id_or_email)) {
            $id_or_email = get_current_user_id();
        }

        return sprintf('<div class="comment-user-avatar comment-author vcard">%s</div>', get_avatar($id_or_email, 60));
    }

    /**
     * Displays a list of avatars involved in a discussion for a given post.
     */
    function discussionAvatarList($comment_authors)
    {
        if (empty($comment_authors)) {
            return;
        }
        echo '<ol class="discussion-avatar-list">', "\n";
        foreach ($comment_authors as $id_or_email) {
            printf(
                "<li>%s</li>\n",
                userAvatarMarkup($id_or_email)
            );
        }
        echo '</ol><!-- .discussion-avatar-list -->', "\n";
    }

    function commentForm()
    {
        ob_start();
        $commenter = wp_get_current_commenter();
        $req       = true;
        $aria_req  = ($req ? " required aria-required='true'" : '');
        $consent = empty($commenter['comment_author_email']) ? '' : ' checked="checked"';
        $fields = array(
            'author' => '<div class="form-group">' . '<label for="author">' . __('Name', THEME_SLUG) . '</label> ' . ($req ? '<span>*</span>' : '') . '<input id="author" name="author" class="form-control" type="text" value="" size="30"' . $aria_req . ' />' . '<div class="invalid-feedback">' . __('Name is required', THEME_SLUG) . '</div>' . '</div>',
            'email'  => '<div class="form-group">' . '<label for="email">' . __('Email', THEME_SLUG) . '</label> ' . ($req ? '<span>*</span>' : '') . '<input id="email" name="email" class="form-control" type="text" value="" size="30"' . $aria_req . ' />' . '<div class="invalid-feedback">' . __('Email is required', THEME_SLUG) . '</div>' . '</div>',
            'url'    => ''
        );

        if (get_option('show_comments_cookies_opt_in') == true) {
            $fields['cookies'] = '<div class="custom-control custom-checkbox comment-form-cookies-consent"><input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" value="yes" class="custom-control-input"' . $consent . '/><label class="custom-control-label" for="wp-comment-cookies-consent">' . __('Save my name, email, and website in this browser for the next time I comment.') . '</label></div>';
        }

        $comments_arg = array(
            'class_form'          => 'comment-form needs-validation',
            'fields'              => apply_filters('comment_form_default_fields', $fields),
            'comment_field'       => '<div class="form-group">' . '<label for="comment">' . __('Comment', THEME_SLUG) . '</label><span>*</span>' . '<textarea id="comment" class="form-control" name="comment" rows="3"' . $aria_req . '></textarea></textarea><div class="invalid-feedback">' . __('Comment is required', THEME_SLUG) . '</div>' . '</div>',
            'comment_notes_after' => '',
            'class_submit'        => 'btn btn-primary',
            'title_reply_before'  => '<h5 id="reply-title" class="comment-reply-title border-top mds-mt-2 mds-pt-2">',
            'title_reply_after'   => '</h5>',
        );

        if (get_option('comment_registration') == true) {
            $comments_arg['must_log_in'] = '<p  class="alert alert-warning" role="alert">' .  sprintf(__('You must be <a href="%s">logged in</a> to post a comment.'), wp_login_url(apply_filters('the_permalink', get_permalink()))) . '</p>';
        }


        comment_form($comments_arg);
        echo str_replace('class="comment-form needs-validation"', 'class="comment-form needs-validation" name="commentForm"', ob_get_clean());
    }
