describe('zeldaDancer', function() {

  var zeldaDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    zeldaDancer = new ZeldaDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(zeldaDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that applies a CSS style', function() {
    sinon.spy(zeldaDancer.$node, 'css');
    zeldaDancer.step();
    expect(zeldaDancer.$node.css.called).to.be.true;
  });

  it('should have a CSS style that applies the proper animation', function() {
    expect(zeldaDancer.$node.attr('style').indexOf('animation-name: shimmy')).to.not.equal(-1);
  });

  it('should have an animation rule that is in time with its step', function() {
    expect(zeldaDancer.timeBetweenSteps / 1000 + 's').to.equal(zeldaDancer.animationDuration);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(zeldaDancer, 'step');
      expect(zeldaDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(zeldaDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(zeldaDancer.step.callCount).to.be.equal(2);
    });
  });
});