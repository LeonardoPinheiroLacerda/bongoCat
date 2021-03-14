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

var keyboard1Action = new Action(keyboard1, rightPaw);
var keyboard2Action = new Action(keyboard2, rightPaw);
var keyboard3Action = new Action(keyboard3, rightPaw);
var keyboard4Action = new Action(keyboard4, rightPaw);
var keyboard5Action = new Action(keyboard5, rightPaw);

var keyboard6Action = new Action(keyboard6, leftPaw);
var keyboard7Action = new Action(keyboard7, leftPaw);
var keyboard8Action = new Action(keyboard8, leftPaw);
var keyboard9Action = new Action(keyboard9, leftPaw);
var keyboard0Action = new Action(keyboard0, leftPaw);