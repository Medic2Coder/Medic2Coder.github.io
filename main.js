
// will prevent your website from trying to display a video that the browser cannot support
function understands_video() {
    return !!document.createElement('video').canPlayType; // boolean
}

if ( !understands_video() ) {
// Must be older browser or IE.
// Maybe do something like hide custom
// HTML5 controls. Or whatever...
    videoControls.style.display = 'none';
}