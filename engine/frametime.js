var before = Date.now()/1000;
var frametime = 0;
var newFrame = new CustomEvent ('newFrame');

function getFrameTime() {
    
    
    updateCanvas();
    countFPS();
    showText();

    requestAnimationFrame(getFrameTime);

    document.dispatchEvent(newFrame); 
    
}

// FPS counter
function countFPS() {
    var now = Date.now() / 1000;  // get time in seconds
    frametime = now - before; // get time elapsed
    before = now; // reset before
    showFPS();
}

function showFPS() {
    context.fillStyle = "darkblue";
    context.fillRect(0,0,90,27);
    context.font = "13px Arial";
    context.fillStyle = "white";
    context.textBaseline = "top";
    context.fillText("FPS : " + (1/frametime).toFixed(0), 12, 8);
}

function speed(value) {
    return value*frametime;
}

function showText() {
    context.fillStyle = "darkblue";
    context.fillRect(200,0,90,27);
    context.font = "13px Arial";
    context.fillStyle = "white";
    context.textBaseline = "top";
    context.fillText("Key = " + key[key.length-1], 200+12, 8);
}