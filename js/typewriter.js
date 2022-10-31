// Typewriter Effect
var text = ["Product Management      ", "Venture Capital    ", "Business Development   ", "Management Consultant"];
var speed = 100;
var i = 0, k = 0;

function typewriter() {
    if (i < text[k].length) {
        document.querySelector('#typewriter').innerHTML += text[k].charAt(i);
        i++;
        if(i == text[k].length) {
            if(k == text.length - 1) {
                return;
            }
            j = i;
            tmp = text[k];
        }
        setTimeout(typewriter, speed);
    }
    else {
        if(tmp.length == 0) {
            k++;
            i = 0;
        }
        document.querySelector('#typewriter').innerHTML = tmp;
        tmp = tmp.slice(0, j);
        j--;
        setTimeout(typewriter, speed);
    }
}

$(typewriter);
