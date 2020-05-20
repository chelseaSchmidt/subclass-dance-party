var ZeldaDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('zeldaDancer');
  this.$node.html('<div class="zeldaDancer"><img class="zeldaDancer" src="images/zelda.jpg" alt="Zelda"></div>').removeClass('dancer');
};

ZeldaDancer.prototype = Object.create(MakeDancer.prototype);
ZeldaDancer.prototype.constructor = ZeldaDancer;

ZeldaDancer.prototype.step = function() {

  MakeDancer.prototype.step.call(this);

  let shimmyStyle = {
    'animation-name': 'shimmy',
    'animation-duration': this.timeBetweenSteps / 1000 + 's',
    'animation-fill-mode': 'forwards',
    'animation-iteration-count': 'infinite'
  };

  this.animationDuration = shimmyStyle['animation-duration'];

  this.$node.css(shimmyStyle);
};