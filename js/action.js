function Action(sound, animation){
    this.sound = sound;
    this.animation = animation;
}

function Action(sound, animation, image){
    this.sound = sound;
    this.animation = animation;
    this.image = image;
}

Action.prototype.do = function(){
    if(this.image != undefined)
        document.getElementsByClassName('instrument')[0].src = "images/" + this.image + ".png";
    this.animation.on();
    this.sound.play();
}

Action.prototype.undo = function(){
    this.animation.off();
    this.sound.flush();
}

var mouthAction = new Action(meow, mouth);

var bongo0Action = new Action(bongo0, rightPaw, "bongo");
var bongo1Action = new Action(bongo1, leftPaw, "bongo");

var keyboard1Action = new Action(keyboard1, rightPaw, "keyboard");
var keyboard2Action = new Action(keyboard2, rightPaw, "keyboard");
var keyboard3Action = new Action(keyboard3, rightPaw, "keyboard");
var keyboard4Action = new Action(keyboard4, rightPaw, "keyboard");
var keyboard5Action = new Action(keyboard5, rightPaw, "keyboard");
var keyboard6Action = new Action(keyboard6, leftPaw, "keyboard");
var keyboard7Action = new Action(keyboard7, leftPaw, "keyboard");
var keyboard8Action = new Action(keyboard8, leftPaw, "keyboard");
var keyboard9Action = new Action(keyboard9, leftPaw, "keyboard");
var keyboard0Action = new Action(keyboard0, leftPaw, "keyboard");

var cymbalAction = new Action(cymbal, leftPaw, "cymbal");