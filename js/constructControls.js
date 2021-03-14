var controls = document.getElementsByClassName('controls')[0];

var typeButtons = {
    big : "big",
    medium : "medium",
    small : "small"
}

var animations = {
    bigButtonClick : "bigButtonClick",
    bigButtonRelease : "bigButtonRelease",

    mediumButtonClick : "mediumButtonClick",
    mediumButtonRelease : "mediumButtonRelease",

    smallButtonClick : "smallButtonClick",
    smallButtonRelease : "smallButtonRelease"
}

function doAnimation(obj, animation){
    obj.style.animation = animation;
    obj.style.animationDuration = '0.1s';

    var flag;
    var typeButton;

    switch(animation){
        case animations.bigButtonClick:
            typeButton = typeButtons.big;
            flag = true;
            break;

        case animations.bigButtonRelease:
            typeButton = typeButtons.big;
            flag = false;
            break;

        case animations.mediumButtonClick:
            typeButton = typeButtons.medium;
            flag = true;
            break;

        case animations.mediumButtonRelease:
            typeButton = typeButtons.medium;
            flag = false;
            break;

        case animations.smallButtonClick:
            typeButton = typeButtons.small;
            flag = true;
            break;

        case animations.smallButtonRelease:
            typeButton = typeButtons.small;
            flag = false;
            break;
    }
    

    if(flag){
        obj.classList.add(typeButton + "ButtonClicked");
    }else{
        obj.classList.remove(typeButton + "ButtonClicked");
    }
}

function constructButton(typeButton, action, text){
    var obj = document.createElement('div');
    
    obj.classList.add(typeButton + "Button");
    obj.classList.add("control");

    obj.onpointerdown = function(){
        action.do();
        switch(typeButton){
            case typeButtons.big:
                doAnimation(obj, animations.bigButtonClick);
                break;
            case typeButtons.medium:
                doAnimation(obj, animations.mediumButtonClick);
                break;
            case typeButtons.small:
                doAnimation(obj, animations.smallButtonClick);
                break;
        }
    }

    obj.onpointerup = function(){
        action.undo();
        switch(typeButton){
            case typeButtons.big:
                doAnimation(obj, animations.bigButtonRelease);
                break;
            case typeButtons.medium:
                doAnimation(obj, animations.mediumButtonRelease);
                break;
            case typeButtons.small:
                doAnimation(obj, animations.smallButtonRelease);
                break;
        }
    }

    obj.onselectstart = function(){return false}
    obj.oncontextmenu = function(){return false}
    
    var span = document.createElement('span');
    span.innerHTML = text;

    obj.appendChild(span);
    controls.appendChild(obj);
}

function meowButton(){
    constructButton(typeButtons.big, mouthAction, "Meow");
    //controls.appendChild(document.createElement('br'));    
}

function bongoButtons(){

    document.getElementsByClassName('instrument')[0].src = "images/bongo.png"

    constructButton(typeButtons.medium, bongo0Action, "Left");    
    constructButton(typeButtons.medium, bongo1Action, "Right");

}

function keyboardButtons(){

    document.getElementsByClassName('instrument')[0].src = "images/keyboard.png"

    constructButton(typeButtons.small, keyboard1Action, "1");
    constructButton(typeButtons.small, keyboard2Action, "2");
    constructButton(typeButtons.small, keyboard3Action, "3");
    constructButton(typeButtons.small, keyboard4Action, "4");
    constructButton(typeButtons.small, keyboard5Action, "5");

    controls.appendChild(document.createElement('br'));

    constructButton(typeButtons.small, keyboard6Action, "6");
    constructButton(typeButtons.small, keyboard7Action, "7");
    constructButton(typeButtons.small, keyboard8Action, "8");
    constructButton(typeButtons.small, keyboard9Action, "9");
    constructButton(typeButtons.small, keyboard0Action, "0");

}


meowButton();
//bongoButtons();
keyboardButtons();