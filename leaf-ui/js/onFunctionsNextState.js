/**
 * This is on the onFunction only for the next state window, to avoid conflicts
 */




/**
 * Set up on events for Rappid/JointJS objets
 */
var max_font = 20;
var min_font = 6;
var current_font = 10;

//Zoom in
$('#btn-zoom-in-nextState').on('click', function() {
    zoomIn(analysis.paperScroller);
});

// Zoom out
$('#btn-zoom-out-nextState').on('click', function() {
    zoomOut(analysis.paperScroller);
});

// Increase font size
$('#btn-fnt-up').on('click', function(){
    fontUp(analysis.paper);
});

// Decrease font size
$('#btn-fnt-down').on('click', function(){
    fontDown(analysis.paper);
});

// Default font size
$('#btn-fnt').on('click', function(){
    defaultFont(analysis.paper);
});

var sliderNextState = document.getElementById("colorResetNextState"); ///problem: analysis.js is rendered first, because colorResetNextState doesn't exist we get an error
sliderNextState.oninput = function() { //changes slider mode and refreshes 
    console.log("inside sliderNextState oninput: "+this.value);
    ColorVisualNextState.setSliderOption(this.value);
}
