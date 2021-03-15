function Action(sound, animation, image, style){
    this.sound = sound;
    this.animation = animation;
    this.image = image;
    this.style = (style != undefined) ? style : {width : "800px", top : "23px", left: "-129px"}
}

Action.prototype.do = function(){
    if(this.image != undefined){
        document.getElementsByClassName('instrument')[0].src = this.image.src;
        if(this.style != undefined){
            document.getElementsByClassName('instrument')[0].style.width = this.style.width;
            document.getElementsByClassName('instrument')[0].style.top = this.style.top;
            document.getElementsByClassName('instrument')[0].style.left = this.style.left;
        }
    }   

    this.animation.on();
    this.sound.play();
}

Action.prototype.undo = function(){
    this.animation.off();
    this.sound.flush();
}

var images = {
    bongo : new Image(),
    keyboard : new Image(),
    cymbal : new Image(),
    cowbell : new Image(),
    tambourine : new Image(),
    explosion : new Image(),
    marimba : new Image()
}
images.bongo.src = "images/bongo.png";
images.keyboard.src = "images/keyboard.png";
images.cymbal.src = "images/cymbal.png";
images.cowbell.src = "images/cowbell.png";
images.tambourine.src = "images/tambourine.png";
images.explosion.src = "images/explosion.png";
images.marimba.src = "images/marimba.png";

var mouthAction = new Action(meow, mouth);

var bongo0Action = new Action(bongo0, rightPaw, images.bongo);
var bongo1Action = new Action(bongo1, leftPaw, images.bongo);

var keyboard1Action = new Action(keyboard1, leftPaw, images.keyboard);
var keyboard2Action = new Action(keyboard2, leftPaw, images.keyboard);
var keyboard3Action = new Action(keyboard3, leftPaw, images.keyboard);
var keyboard4Action = new Action(keyboard4, leftPaw, images.keyboard);
var keyboard5Action = new Action(keyboard5, leftPaw, images.keyboard);
var keyboard6Action = new Action(keyboard6, rightPaw, images.keyboard);
var keyboard7Action = new Action(keyboard7, rightPaw, images.keyboard);
var keyboard8Action = new Action(keyboard8, rightPaw, images.keyboard);
var keyboard9Action = new Action(keyboard9, rightPaw, images.keyboard);
var keyboard0Action = new Action(keyboard0, rightPaw, images.keyboard);

var cymbalAction = new Action(cymbal, leftPaw, images.cymbal);

var cowbellAction = new Action(cowbell, leftPaw, images.cowbell);

var tambourineAction = new Action(tambourine, leftPaw, images.tambourine);

var marimba1Action = new Action(marimba1, leftPaw, images.marimba);
var marimba2Action = new Action(marimba2, leftPaw, images.marimba);
var marimba3Action = new Action(marimba3, leftPaw, images.marimba);
var marimba4Action = new Action(marimba4, leftPaw, images.marimba);
var marimba5Action = new Action(marimba5, leftPaw, images.marimba);
var marimba6Action = new Action(marimba6, rightPaw, images.marimba);
var marimba7Action = new Action(marimba7, rightPaw, images.marimba);
var marimba8Action = new Action(marimba8, rightPaw, images.marimba);
var marimba9Action = new Action(marimba9, rightPaw, images.marimba);
var marimba0Action = new Action(marimba0, rightPaw, images.marimba);

var explosionAction = new Action(explosion, rightPaw, images.explosion, 
    {
        top : "139px",
        width : "150px",
        left : "154px"
    }
);