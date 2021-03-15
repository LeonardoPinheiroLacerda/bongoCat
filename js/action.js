function Action(sound, animation, image, style){
    this.sound = sound;
    this.animation = animation;
    this.image = image;
    this.style = (style != undefined) ? style : {width : "800px", top : "23px", left: "-129px"}
}

Action.prototype.do = function(){
    if(this.image != undefined)
        document.getElementsByClassName('instrument')[0].src = "images/" + this.image + ".png";
    if(this.style != undefined){
        document.getElementsByClassName('instrument')[0].style.width = this.style.width;
        document.getElementsByClassName('instrument')[0].style.top = this.style.top;
        document.getElementsByClassName('instrument')[0].style.left = this.style.left;
    }

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

var keyboard1Action = new Action(keyboard1, leftPaw, "keyboard");
var keyboard2Action = new Action(keyboard2, leftPaw, "keyboard");
var keyboard3Action = new Action(keyboard3, leftPaw, "keyboard");
var keyboard4Action = new Action(keyboard4, leftPaw, "keyboard");
var keyboard5Action = new Action(keyboard5, leftPaw, "keyboard");
var keyboard6Action = new Action(keyboard6, rightPaw, "keyboard");
var keyboard7Action = new Action(keyboard7, rightPaw, "keyboard");
var keyboard8Action = new Action(keyboard8, rightPaw, "keyboard");
var keyboard9Action = new Action(keyboard9, rightPaw, "keyboard");
var keyboard0Action = new Action(keyboard0, rightPaw, "keyboard");

var cymbalAction = new Action(cymbal, leftPaw, "cymbal");

var cowbellAction = new Action(cowbell, leftPaw, "cowbell");

var tambourineAction = new Action(tambourine, leftPaw, "tambourine");

var marimba1Action = new Action(marimba1, leftPaw, "marimba");
var marimba2Action = new Action(marimba2, leftPaw, "marimba");
var marimba3Action = new Action(marimba3, leftPaw, "marimba");
var marimba4Action = new Action(marimba4, leftPaw, "marimba");
var marimba5Action = new Action(marimba5, leftPaw, "marimba");
var marimba6Action = new Action(marimba6, rightPaw, "marimba");
var marimba7Action = new Action(marimba7, rightPaw, "marimba");
var marimba8Action = new Action(marimba8, rightPaw, "marimba");
var marimba9Action = new Action(marimba9, rightPaw, "marimba");
var marimba0Action = new Action(marimba0, rightPaw, "marimba");

var explosionAction = new Action(explosion, rightPaw, "explosion", 
    {
        top : "139px",
        width : "150px",
        left : "154px"
    }
);