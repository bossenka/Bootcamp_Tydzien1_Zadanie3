$('button').on('click',function() {
  var leftPos = $('nav').css('left');
  var targetLeftValue = 0;
  if (leftPos == '0px') {
    var targetLeftValue = '-120px';
  }
  $('nav').animate({
    'left': targetLeftValue
  }, 250);
});
