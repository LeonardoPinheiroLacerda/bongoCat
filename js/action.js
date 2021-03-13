function Action(sound, animation){
    this.sound = sound;
    this.animation = animation;
}

Action.prototype.do = function(){
    this.animation.on();
    this.sound.play();
}

Action.prototype.undo = function(){
    this.animation.off();
    this.sound.flush();
}

var bongo0Action = new Action(bongo0, rightPaw);
var bongo1Action = new Action(bongo1, leftPaw);
var mouthAction = new Action(meow, mouth);