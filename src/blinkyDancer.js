var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);


  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // this.oldStep = MakeDancer.prototype.step;
  // this.oldStep()
  // console.log(this.oldStep);
  // MakeDancer.prototype.step();
  // this.step();

};
MakeBlinkyDancer.prototype=Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor=MakeBlinkyDancer;


MakeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // console.log('triggered');
  // console.log(this.oldStep, 'test');
  MakeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // console.log(this.$node);
  this.$node.toggle();
};
