$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $('.container').height() * Math.random(),
      $('.container').width() * Math.random(),
      Math.random() * 1000
    );
    $('.container').append(dancer.$node);
    window.dancers.push(dancer);
    console.log(dancer.top, dancer.left);

    $('.zeldaDancer').hover(function(){
      let superSize={
        width: '170px',
        height: '170px'
      };
      $(this).css(superSize);
    },function(){
      let regularSize={
        width: '70px',
        height: '70px'
      };
      $(this).css(regularSize);
    });
  });

  $('.lineUpButton').on('click', function(event) {
      for (var i = 0; i < window.dancers.length; i++) {
        window.dancers[i].lineUp();
      }
  });

  $('.danceTogether').on('click', function(event) {
    var dancerCopy=window.dancers.slice()

    if (dancerCopy.length > 1) {
      for (var i = 0; i < dancerCopy.length; i++) {
        for (var j = i + 1; j < dancerCopy.length; j++) {
          var innerDancer = dancerCopy[i];
          var outerDancer = dancerCopy[j];
          if (Math.abs(innerDancer.top - outerDancer.top) < 100 && Math.abs(innerDancer.left - outerDancer.left) < 100) {
            console.log('coordinates top: ',innerDancer.top, outerDancer.top, 'coordinates left: ', innerDancer.left, outerDancer.left);
            innerDancer.lightUp();
            outerDancer.lightUp();
          }
        }
      }
    }
  });

});





