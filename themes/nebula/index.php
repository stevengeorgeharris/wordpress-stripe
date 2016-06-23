<?php
/**
 * Main template loaded on root unless another page-template
 * is specified.
 *
 * @package nebula
 */

get_header();
if (have_posts()) :
  while (have_posts()) : the_post();
    get_template_part('template-parts/front', 'pay');
  endwhile;
endif;
get_footer();
?>
