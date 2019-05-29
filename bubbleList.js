const $bubble = $('.bubble');
const angle = 360/$bubble.length;
const radius = 200;

let bubbleIndex = 0;
$('.bubbleList').children('.bubbleContainer').each(function() {
    $(this).css('transform', 'rotate(' + angle*bubbleIndex + 'deg)' + 'translate(' + radius + 'px)');
    $(this).children('.bubble').css('transform', 'rotate(' + -angle*bubbleIndex + 'deg)');
    $(this).css('background-image', 'url(/"' +  + '/")');
    let backgroundImage = $(this).find('.bubbleBackgroundImage').attr('src');
    if (backgroundImage != null)
        $(this).children('.bubble').css('background-image', 'url("' + backgroundImage + '")');
    bubbleIndex++;
});

//Create the active bubble div above selected bubble
$bubble.click(function(e) {
    //If element is a non selectable element - e.g. contains nonSelectable ID
    if ($(this).children('#nonSelectable').length !== 0)
        return;

    //Create active bubble div
    const $body = $('body')
    $body.append('<div class="activeBubbleCover"></div>')
    $body.append('<div class="activeBubble"></div>');
    const activeBubble = $('.activeBubble');

    //Set location of active bubble directly over selected bubble
    const offset = $(this).offset();
    const width = $(this).width();
    const height = $(this).height();
    const centerX = offset.left + width / 2;
    const centerY = offset.top + height / 2;
    activeBubble.css('top', centerY + 'px');
    activeBubble.css('left', centerX + 'px');

    //Pull header, description, and footer from bubble elements and place in active bubble
    $(this).children('.bubbleHeader').clone().appendTo(activeBubble);
    $(this).children('.bubbleDescription').clone().appendTo(activeBubble);
    $(this).children('.bubbleFooter').clone().appendTo(activeBubble);
});

//Remove currently active bubble if clicked off
$(document).click(function(e) {
    let container = $('.activeBubble');

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0 &&
        $(e.target).parents('.bubble').length === 0 &&
        !$(e.target).is('.bubble'))
    {
        container.remove();
        $('.activeBubbleCover').remove();
    }
});