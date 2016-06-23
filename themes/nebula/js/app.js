var scExtend = scExtend || {};

scExtend.steps = {
  init: function() {
    this.build();
  },
  build: function() {
    var steps = document.querySelectorAll('.sc-step');
    for (var i = 0; i < steps.length; i++) {
      if (i === 0) {
        steps[i].className += " step-show";
      }
     }
  }
}

window.onload = scExtend.steps.init();
