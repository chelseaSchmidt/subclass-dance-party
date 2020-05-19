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
      $(".container").height() * Math.random(),
      $(".container").width() * Math.random(),
      Math.random() * 1000
    );
    $('.container').append(dancer.$node);
    window.dancers.push(dancer);
    console.log(window.dancers);
  });

  $('.lineUpButton').on('click', function(event) {
    //for loop
      //for each element in the array call the linup function

      for (var i = 0; i < window.dancers.length; i++) {
        window.dancers[i].lineUp();
      }
  });

  //Interaction function #1:
  //=========================
    //store two smallest differences
    //store $node pairs with the two smallest differences
    //store these in an object where key is node, value is array of tuples: 0=paired node, 1=difference

    //For each dancer in the array...
      //For each subsequent dancer in the array...
        //get the difference between each dancer's csquared property
          //if the array at outer dancer's node in our storage object contains a larger difference
            //replace value with new array of current inner node and difference

    //for each pair...
      //have left-most node move to the right
      //have right-most node move to the left

  //call interaction function on a schedule

  //Interaction function #2:
  //=========================
  //set up object where key is node, value is csquared property
  //For each node in the object...
    //


  //call interaction function on a schedule
});



