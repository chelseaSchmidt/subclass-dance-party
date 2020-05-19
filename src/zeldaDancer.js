var ZeldaDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  //this.$node = $('<span class="linkDancer"></span>');
  this.$node.addClass('zeldaDancer');
  this.$node.html('<div class="zeldaDancer"><img class="zeldaDancer" src="images/zelda.jpg" alt="Zelda"></div>').removeClass('dancer');
};

//set prototype
ZeldaDancer.prototype = Object.create(MakeDancer.prototype);

//add back constructor
ZeldaDancer.prototype.constructor = ZeldaDancer;

//Add subclass-specific methods
ZeldaDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // console.log('triggered');
  // console.log(this.oldStep, 'test');
  MakeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // console.log(this.$node);
  // this.$node.fadeToggle(); //spin!

  let shimmyStyle = {
    'animation-name': 'shimmy',
    'animation-duration': this.timeBetweenSteps / 1000 + 's',
    'animation-fill-mode': 'forwards',
    'animation-iteration-count': 'infinite'
  };

  this.animationDuration = shimmyStyle['animation-duration'];

  this.$node.css(shimmyStyle);
};