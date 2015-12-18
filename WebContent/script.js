$(document).ready(function() {
  var $draggable = $('.draggable').draggabilly({
    grid: [35, 0],
    axis: 'x',
    containment: true,
  });

  $(".draggable").resizable({
    grid: 50,
    axis: 'x'
  });
	alert('loaded');
});