var bubbleCount = $('.bubble').length;
var angle = 360/bubbleCount;
var radius = 200;

var bubbleIndex = 0;
$('.bubbleList').children('.bubbleContainer').each(function(){
    $(this).css('transform', 'rotate(' + angle*bubbleIndex + 'deg)' + 'translate(' + radius + 'px)');
    $(this).children('.bubble').css('transform', 'rotate(' + -angle*bubbleIndex + 'deg)');
    $(this).css('background-image', 'url(/"' +  + '/")');
    var backgroundImage = $(this).find('.bubbleBackgroundImage').attr('src');
    if (backgroundImage != null)
        $(this).children('.bubble').css('background-image', 'url("' + backgroundImage + '")');
    bubbleIndex++;
});