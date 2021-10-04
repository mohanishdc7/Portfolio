var cursor = true;
var interval = 100;

setInterval(() => {
    if(cursor) {
        document.getElementById('blinker').style.opacity = 0;
        cursor = false;
    }
    else {
        document.getElementById('blinker').style.opacity = 1;
        cursor = true;
    }
}, interval);