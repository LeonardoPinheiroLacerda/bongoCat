function Sound(path, continuous) {
    this.path = path;
    this.flag = false;
    this.audio;
    this.continuous = continuous;
}

Sound.prototype.play = function () {
    if (this.flag === false) {
        this.audio = new Audio(this.path);
        this.audio.play();
        this.flag = true;
    }
}

Sound.prototype.flush = function () {
    this.flag = false;
    if (this.continuous === true) {
        var vol = 1.0;
        var interval = 100;

        var fadeout = setInterval(
            function (audio) {
                if (vol > 0) {
                    audio.volume = vol;
                    vol -= 0.33;
                }else{
                    audio.volume = 0;
                    clearInterval(fadeout);
                }
            }, interval, this.audio);
    }
}

    ;

var soundPaths = {
    bongo0: 'sounds/bongo0.mp3',
    bongo1: 'sounds/bongo1.mp3',
    meow: 'sounds/meow.mp3',

    keyboard1: 'sounds/keyboard1.mp3',
    keyboard2: 'sounds/keyboard2.mp3',
    keyboard3: 'sounds/keyboard3.mp3',
    keyboard4: 'sounds/keyboard4.mp3',
    keyboard5: 'sounds/keyboard5.mp3',
    keyboard6: 'sounds/keyboard6.mp3',
    keyboard7: 'sounds/keyboard7.mp3',
    keyboard8: 'sounds/keyboard8.mp3',
    keyboard9: 'sounds/keyboard9.mp3',
    keyboard0: 'sounds/keyboard0.mp3',

    cymbal: "sounds/cymbal.mp3",

    tambourine: "sounds/tambourine.mp3",

    cowbell: "sounds/cowbell.mp3",

    marimba1: "sounds/marimba1.mp3",
    marimba2: "sounds/marimba2.mp3",
    marimba3: "sounds/marimba3.mp3",
    marimba4: "sounds/marimba4.mp3",
    marimba5: "sounds/marimba5.mp3",
    marimba6: "sounds/marimba6.mp3",
    marimba7: "sounds/marimba7.mp3",
    marimba8: "sounds/marimba8.mp3",
    marimba9: "sounds/marimba9.mp3",
    marimba0: "sounds/marimba0.mp3",

    explosion: "sounds/explosion.mp3",

    chicken: "sounds/chicken.mp3"
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

new Audio(soundPaths.tambourine).load();

new Audio(soundPaths.cowbell).load();

new Audio(soundPaths.marimba1).load();
new Audio(soundPaths.marimba2).load();
new Audio(soundPaths.marimba3).load();
new Audio(soundPaths.marimba4).load();
new Audio(soundPaths.marimba5).load();
new Audio(soundPaths.marimba6).load();
new Audio(soundPaths.marimba7).load();
new Audio(soundPaths.marimba8).load();
new Audio(soundPaths.marimba9).load();
new Audio(soundPaths.marimba0).load();

new Audio(soundPaths.explosion).load();

new Audio(soundPaths.chicken).load();

var bongo0 = new Sound(soundPaths.bongo0, false);
var bongo1 = new Sound(soundPaths.bongo1, false);
var meow = new Sound(soundPaths.meow, false);

var keyboard1 = new Sound(soundPaths.keyboard1, false);
var keyboard2 = new Sound(soundPaths.keyboard2, false);
var keyboard3 = new Sound(soundPaths.keyboard3, false);
var keyboard4 = new Sound(soundPaths.keyboard4, false);
var keyboard5 = new Sound(soundPaths.keyboard5, false);
var keyboard6 = new Sound(soundPaths.keyboard6, false);
var keyboard7 = new Sound(soundPaths.keyboard7, false);
var keyboard8 = new Sound(soundPaths.keyboard8, false);
var keyboard9 = new Sound(soundPaths.keyboard9, false);
var keyboard0 = new Sound(soundPaths.keyboard0, false);

var cymbal = new Sound(soundPaths.cymbal, false);

var cowbell = new Sound(soundPaths.cowbell, false);

var tambourine = new Sound(soundPaths.tambourine, false);

var marimba1 = new Sound(soundPaths.marimba1, false);
var marimba2 = new Sound(soundPaths.marimba2, false);
var marimba3 = new Sound(soundPaths.marimba3, false);
var marimba4 = new Sound(soundPaths.marimba4, false);
var marimba5 = new Sound(soundPaths.marimba5, false);
var marimba6 = new Sound(soundPaths.marimba6, false);
var marimba7 = new Sound(soundPaths.marimba7, false);
var marimba8 = new Sound(soundPaths.marimba8, false);
var marimba9 = new Sound(soundPaths.marimba9, false);
var marimba0 = new Sound(soundPaths.marimba0, false);

var explosion = new Sound(soundPaths.explosion, false);

var chicken = new Sound(soundPaths.chicken, true);
