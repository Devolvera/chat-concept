// heightstuff.js

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
