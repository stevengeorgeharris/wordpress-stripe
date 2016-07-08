<div class="o-content o-content--full" style="background-image: url('<?php the_post_thumbnail_url(); ?>')">
  <div class="c-payment-form">
    <div class="c-payment-inner">
      <div class="c-payment-form__title">Donate Now</div>
      <div class="c-payment-form__sub-title">100% of your donation goes straight to the field.</div>
      <?php
        the_content();
      ?>
      <div class="sc-step__button sc-step__button--next sc-step__button--half">Back</div>
      <div class="sc-step__button sc-step__button--card sc-step__button--full">Pay By Card</div>
    </div>
  </div>
</div>
