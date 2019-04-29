var bubbleCount = $('.bubble').length;
var angle = 360/bubbleCount;
var radius = 150;

var bubbleIndex = 0;
$('.bubbleList').children().each(function(){
    bubbleIndex++;
    $(this).css('transform', 'rotate(' + angle*bubbleIndex + 'deg)');
    $(this).children('.bubble').css('transform', 'rotate(' + -angle*bubbleIndex + 'deg)'
        + 'translate(' + radius + 'px)');
});