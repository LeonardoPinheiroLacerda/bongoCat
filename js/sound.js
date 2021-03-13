function Sound(path){
    this.path = path;
    this.flag = false;
}

Sound.prototype.play = function(){
    if(this.flag === false){
        new Audio(this.path).play();
        this.flag = true;
    }
}

Sound.prototype.flush = function(){
    this.flag = false;
}

var soundPaths = {
    bongo0 : 'sounds/bongo0.wav',
    bongo1 : 'sounds/bongo1.wav',
    meow : 'sounds/meow.wav'
}

var bongo0 = new Sound(soundPaths.bongo0);
var bongo1 = new Sound(soundPaths.bongo1);
var meow = new Sound(soundPaths.meow);