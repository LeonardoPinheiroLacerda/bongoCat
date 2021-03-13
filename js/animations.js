function Animation(element, on, off){
    this.onState = on;
    this.offState = off;
    this.domObject = document.getElementsByClassName(element)[0];
}

Animation.prototype.on = function(){
    this.domObject.id = this.onState;
}

Animation.prototype.off = function(){
    this.domObject.id = this.offState;
}

var rightPaw = new Animation('rightPaw', 'rightDown', 'rightUp');
var leftPaw = new Animation('leftPaw', 'leftDown', 'leftUp');
var mouth = new Animation('mouth', 'openned', 'closed');
