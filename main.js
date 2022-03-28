// will prevent your website from trying to display a video that the browser cannot support
function understands_video() {
    return !!document.createElement('video').canPlayType; // boolean
}

if (!understands_video()) {
// Must be older browser or IE.
// Maybe do something like hide custom
// HTML5 controls. Or whatever...
    videoControls.style.display = 'none';
}

//no-right click
function f1() {
    if (document.all) {
        return false;
    }
}

function f2(e) {
    if (document.layers || (document.getElementById && !document.all)) {
        if (e.which == 2 || e.which == 3) {
            return false;
        }
    }

}

if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown = f1;
} else {
    document.onmouseup = f2;
    document.oncontextmenu = f1;
}
document.oncontextmenu = new Function("return false");
