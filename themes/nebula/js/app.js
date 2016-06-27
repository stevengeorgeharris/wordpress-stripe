var scExtend = scExtend || {};

scExtend.steps = {
  init: function() {
    this.build();
    this.attach();
  },
  build: function() {
    var $steps = $('.sc-step');
    var count = 1;
    $steps.each(function() {
      $(this).attr('data-index', count);
      if (count === 1) {
        $(this).addClass('step-show');
      }

      count++;
    });
  },
  attach: function() {
    var button = document.querySelector('.sc-step__button--card');
    var $checkoutButton = $('.sc-payment-btn');
    button.addEventListener('click', function() {
      var $step = $('.step-show');
      var total = $('.sc-step').length;
      var current = parseInt($step.attr('data-index'));
      var $check = $('.sc-uea-custom-amount');
      var next = current + 1;

      if (! $check.val().length > 0) {
        return;
      }

      $step.addClass('step-leave');
      $step.removeClass('step-show');

      if (next === total) {
        $(button).text('Finalise Donation');
      } else if (next !== total && next > 0) {
        $(button).text('Next Step');
      }

      if (current === total) {
        $('.sc-payment-btn').click();
        $('[data-index="' + 1 +'"]').removeClass('step-leave').addClass('step-show');
        $('[data-index="' + 2 +'"]').removeClass('step-leave');
        $(button).text('Pay By Card');
      }

      $('[data-index="' + next +'"]').addClass('step-show');
    });
  }
}

window.onload = scExtend.steps.init();
