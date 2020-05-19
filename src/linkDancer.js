var LinkDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  //this.$node = $('<span class="linkDancer"></span>');
  this.$node.addClass('linkDancer');
  this.$node.html('<div class="linkDancer"><img class="linkDancer" src="/images/spinningLink.jpg" alt="Link"></div>').removeClass('dancer');

  // function spinLink() {
  //   var $linkDancer = $(this.$node);
  //   rotate(0);
  //   function rotate(degree) {

  //         // For webkit browsers: e.g. Chrome
  //       $linkDancer.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});
  //         // For Mozilla browser: e.g. Firefox
  //       $linkDancer.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});

  //         // Animate rotation with a recursive call
  //       setTimeout(function() { rotate(++degree); }, 5);
  //   }
  // }
  // spinLink();
};

//set prototype
LinkDancer.prototype = Object.create(MakeDancer.prototype);

//add back constructor
LinkDancer.prototype.constructor = LinkDancer;

//Add subclass-specific methods
LinkDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // console.log('triggered');
  // console.log(this.oldStep, 'test');
  MakeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // console.log(this.$node);
  this.$node.fadeToggle(); //spin!
};