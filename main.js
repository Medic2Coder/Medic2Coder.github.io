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

//show date
// function showDate() {
//     var d = new Date();
//     var curr_date = d.getDate();
//     var curr_month = d.getMonth() + 1; //months are zero based
//     var curr_year = d.getFullYear();
//     document.write(curr_date + "-" + curr_month + "-" + curr_year);
// }
// showDate();

//TODO: How to add these together, template literals?


//daily random quotes
writeRandomQuote = function () {
    var quotes = new Array();
    quotes[0] = "Action is the real measure of intelligence.";
    quotes[1] = "Baseball has the great advantage over cricket of being sooner ended.";
    quotes[2] = "Every goal, every action, every thought, every feeling one experiences, whether it be consciously or unconsciously known, is an attempt to increase one's level of peace of mind.";
    quotes[3] = "A good head and a good heart are always a formidable combination.";
    var rand = Math.floor(Math.random() * quotes.length);
    document.write(quotes[rand]);
}
writeRandomQuote();
