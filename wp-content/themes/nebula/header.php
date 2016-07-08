<?php
  /**
   * Contains head references.
   *
   * @package nebula
   */
?>
<!DOCTYPE html>
<html>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
<link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400" rel="stylesheet">

<?php wp_head(); ?>

<body <?php body_class(); ?>>
  <div class="c-header">
    <div class="c-logo">
      <img src="<?php the_field('site_logo') ?>"/>
    </div>
  </div>
