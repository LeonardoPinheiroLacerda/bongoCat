function Sound(path){
    this.path = path;
    this.flag = false;
}

Sound.prototype.play = function(){
    if(this.flag === false){
        var audio = new Audio(this.path);
        audio.play();
        this.flag = true;
    }
}

Sound.prototype.flush = function(){
    this.flag = false;
}

var soundPaths = {
    bongo0 : 'sounds/bongo0.mp3',
    bongo1 : 'sounds/bongo1.mp3',
    meow : 'sounds/meow.mp3',

    keyboard1 : 'sounds/keyboard1.mp3',
    keyboard2 : 'sounds/keyboard2.mp3',
    keyboard3 : 'sounds/keyboard3.mp3',
    keyboard4 : 'sounds/keyboard4.mp3',
    keyboard5 : 'sounds/keyboard5.mp3',
    keyboard6 : 'sounds/keyboard6.mp3',
    keyboard7 : 'sounds/keyboard7.mp3',
    keyboard8 : 'sounds/keyboard8.mp3',
    keyboard9 : 'sounds/keyboard9.mp3',
    keyboard0 : 'sounds/keyboard0.mp3',

    cymbal : "sounds/cymbal.mp3"
}


new Audio(soundPaths.meow).load();

new Audio(soundPaths.bongo0).load();
new Audio(soundPaths.bongo1).load();

new Audio(soundPaths.keyboard0).load();
new Audio(soundPaths.keyboard1).load();
new Audio(soundPaths.keyboard2).load();
new Audio(soundPaths.keyboard3).load();
new Audio(soundPaths.keyboard4).load();
new Audio(soundPaths.keyboard5).load();
new Audio(soundPaths.keyboard6).load();
new Audio(soundPaths.keyboard7).load();
new Audio(soundPaths.keyboard8).load();
new Audio(soundPaths.keyboard9).load();

new Audio(soundPaths.cymbal).load();


var bongo0 = new Sound(soundPaths.bongo0);
var bongo1 = new Sound(soundPaths.bongo1);
var meow = new Sound(soundPaths.meow);

var keyboard1 = new Sound(soundPaths.keyboard1);
var keyboard2 = new Sound(soundPaths.keyboard2);
var keyboard3 = new Sound(soundPaths.keyboard3);
var keyboard4 = new Sound(soundPaths.keyboard4);
var keyboard5 = new Sound(soundPaths.keyboard5);
var keyboard6 = new Sound(soundPaths.keyboard6);
var keyboard7 = new Sound(soundPaths.keyboard7);
var keyboard8 = new Sound(soundPaths.keyboard8);
var keyboard9 = new Sound(soundPaths.keyboard9);
var keyboard0 = new Sound(soundPaths.keyboard0);

var cymbal = new Sound(soundPaths.cymbal);

