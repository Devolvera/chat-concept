// heightstuff.js
/*
  I wanted the color reference divs to cover the user's window on load,
  so this code does that. It takes the height (width was optional) of
  the user's viewport, and then divides by 6 (the amount of divs) to
  get the height that each div should be. each div's height is then set
  to that number so it covers the user's window completely, but each div is
  equal in height.
*/

$(document).ready(function() {

var viewportWidth = $(window).width();
var viewportHeight = $(window).height();
var divHeight = Math.round(viewportHeight / 6);

for (var i = 0; i < 7; i++){
$('#div' + i).css({
  "height" : divHeight
});

}

});
