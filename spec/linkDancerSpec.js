describe('linkDancer', function() {

  var linkDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    linkDancer = new LinkDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(linkDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that applies a CSS style', function() {
    sinon.spy(linkDancer.$node, 'css');
    linkDancer.step();
    expect(linkDancer.$node.css.called).to.be.true;
  });

  it('should have a CSS style that applies the proper animation', function() {
    expect(linkDancer.$node.attr('style').indexOf('animation-name: spin')).to.not.equal(-1);
  });
  it('should have an animation rule that is in time with its step', function() {
    expect(linkDancer.timeBetweenSteps / 1000 + 's').to.equal(linkDancer.animationDuration);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(linkDancer, 'step');
      expect(linkDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(linkDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(linkDancer.step.callCount).to.be.equal(2);
    });
  });
});