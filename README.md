# Bubble List

I created this web plugin because I wanted a cool way to display project that I've worked on. I tinkered with different ideas and decided I wanted to have a list of circles(bubbles) that could display different project information. 

After some Googling I wasn't able to find anything out there capable of simply implementing what I wanted to do so I created this so others won't have to rewrite what I did.

You can use this plugin having only HTML knowledge. 

I hope you good folks get some use out of it!

![](example.gif)

<br/>
<strong><u>HOW TO USE:</u></strong>
At the top of the bubblelist.scss file their is a list of variables that can be customised to your liking. These include circle diameters, border styles, fonts, etc...
<br/><br/>


<strong><u>EXAMPLE LAYOUT:</u></strong>
```HTML
<div class="bubbleList">
    <div class="bubbleContainer">
        <div class="bubble">
            <img class="bubbleBackgroundImage" src="path/to/image"/>
            <div class="bubbleBackgroundColor">#FFFFFF</div>
            <div class="bubbleBackgroundText">Background Text</div>
            <div class="bubbleBanner">BANNER</div>
            <div class="bubbleHeader">HEADER</div>
            <div class="bubbleDescription">Some Description</div>
            <div class="bubbleFooter"></div>
        </div>
    </div>
    <div class="bubbleContainer">
        <div class="nonHoverableBubble bubble">
            <div class="bubbleBackgroundColor">#FFFFFF</div>
            <div class="bubbleBackgroundText">Background Text</div>
        </div>
    </div>
    <div class="bubbleContainer">
        <div class="nonSelectableBubble bubble">
            <div class="bubbleBackgroundText">Background Text</div>
        </div>
    </div>
    <div class="bubbleContainer">
        <div class="nonHoverableBubble nonSelectableBubble bubble">
            <div class="bubbleBackgroundText">Background Text</div>
        </div>
    </div>
</div>
```

<br/>
<strong><u>CLASS DEFINITION:</u></strong>
<br/>


<strong>REQUIRED:</strong>
You MUST include each of the following classes to create the bubble list.<br/>

<i>bubbleList</i>: The top parent node of the list.<br/>
<i>bubbleContainer</i>: The container for each bubble item.<br/>
<i>bubble</i>: The bubble node itself.

<br/>

<strong>OPTIONAL:</strong>
Each of the following are optional. You can use each in any combination you like, but only use each tag one inside a bubble.<br/>

<i>bubbleBackgroundImage</i>: Use the src attribute in the img tag to set the source of the background image you want to use for the bubble.<br/>
<i>bubbleBackgroundColor</i>: Set the text inside this div to the hexidecimal color code you would like the bubbles background to be set as. This color affects both the base bubble, hovered, and active. If you set a background image that will cover the color, but the active bubble will still have this background color.<br/>
<i>bubbleBackgroundText</i>: Puts text in the front of the base and hovered bubble. If you add a banner to the bubble it will cover this text when the bubble is hovered. This text will appear in front of both the background image and/or background color you set.<br/>
<i>bubbleBanner</i>: The text used for the banner when the bubble is hovered.<br/>
<i>bubbleHeader</i>: The text used for the header when the bubble is clicked and is active.<br/>
<i>bubbleFFooter</i>: The text used for the footer when the bubble is clicked and is active.<br/>
<i>bubbleDescription</i>: The text used for the description when the bubble is clicked and is active. If you use a link(e.g. 'a' node) then clicking on the link will not close the active bubble.<br/>
<i>nonSelectableBubble</i>: Put this class in the bubble class list if you want to disable the ability to click it and make an active bubble appear.<br/>
<i>nonHoverableBubble</i>: Put this class in the bubble class list if you want to disable the ability to hover it.<br/>

<strong>Note</strong>: The <i>nonSelectableBubble</i> and <i>nonHoverableBubble</i> classes can be used together to make a bubble that can be neither hovered nor clicked.