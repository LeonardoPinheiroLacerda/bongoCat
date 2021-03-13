var rightPaw = document.getElementsByClassName('rightPaw')[0];
var leftPaw = document.getElementsByClassName('leftPaw')[0];
var mouth = document.getElementsByClassName('mouth')[0];

var bongo0 = false;
var bongo1 = false;
var meow = false;

document.onkeypress = function(e){
    switch(e.key){
        case 'a':
        case 'A':    
            rightPaw.id = "rightDown";
            if(!bongo0){
                var audio = new Audio('sounds/bongo0.mp3');
                audio.play();
                bongo0 =true;
            }
            break;

        case 'd':
        case 'D':
            leftPaw.id = "leftDown";
            if(!bongo1){
                var audio = new Audio('sounds/bongo1.mp3');
                audio.play();
                bongo1 =true;
            }
            break;

        case ' ':
            mouth.id = "openned";
            if(!meow){
                var audio = new Audio('sounds/meow.mp3');
                audio.play();
                meow = true;
            }
            break;

        case 'x':
        case 'X':
            document.getElementsByClassName('infoAlert')[0].id = "invisible";
            break;


    }
}


document.onkeyup = function(e){
    switch(e.key){
        case 'a':
        case 'A':    
            rightPaw.id = "rightUp";
            bongo0 = false;
            break;

        case 'd':
        case 'D':
            leftPaw.id = "leftUp";
            bongo1 = false;
            break;
        
        case ' ':
            mouth.id = "closed";
            meow = false;
            break;
    }
}