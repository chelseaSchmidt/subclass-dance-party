var LinkDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('linkDancer');
  this.$node.html('<div class="linkDancer"><img class="linkDancer" src="/images/spinningLink.jpg" alt="Link"></div>').removeClass('dancer');
};

LinkDancer.prototype = Object.create(MakeDancer.prototype);
LinkDancer.prototype.constructor = LinkDancer;

LinkDancer.prototype.step = function() {

  MakeDancer.prototype.step.call(this);

  let spinStyle = {
    'animation-name': 'spin',
    'animation-duration': this.timeBetweenSteps / 1000 + 's',
    'animation-fill-mode': 'forwards',
    'animation-iteration-count': 'infinite'
  };
  this.animationDuration = spinStyle['animation-duration'];

  this.$node.css(spinStyle);
};