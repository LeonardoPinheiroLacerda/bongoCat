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
    bongo0 : 'sounds/bongo0.mp3',
    bongo1 : 'sounds/bongo1.mp3',
    meow : 'sounds/meow.mp3'
}

var bongo0 = new Sound(soundPaths.bongo0);
var bongo1 = new Sound(soundPaths.bongo1);
var meow = new Sound(soundPaths.meow);