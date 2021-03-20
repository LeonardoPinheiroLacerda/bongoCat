var controls = document.getElementsByClassName('controls')[0];
controls.onselectstart = function(){return false};
controls.oncontextmenu = function(){return false};

var typeButtons = {
    big : "big",
    medium : "medium",
    small : "small"
}

var animations = {
    buttonClick : "buttonClick",
    buttonRelease : "buttonRelease",
}

function doAnimation(obj, animation){
    obj.style.animation = animation;
    obj.style.animationDuration = '0.1s';

    var flag;

    switch(animation){
        case animations.buttonClick:
            flag = true;
            break;
        case animations.buttonRelease:
            flag = false;
            break;
    }
    

    if(flag){
        obj.classList.add("buttonClicked");
    }else{
        obj.classList.remove("buttonClicked");
    }
}

function constructButton(typeButton, action, text, additionalBehavior){
    var obj = document.createElement('div');
    
    var leave = function(){
        action.undo();
        doAnimation(obj, animations.buttonRelease);
    }

    obj.classList.add(typeButton + "Button");
    obj.classList.add("control");

    obj.onpointerdown = function(){
        action.do();
        doAnimation(obj, animations.buttonClick);
        if(additionalBehavior != undefined){
            additionalBehavior();
        }
    }


    obj.ontouchend = function(){
        leave();
    }

    obj.onpointerup = function(){
        leave();
    }

    obj.onselectstart = function(){return false}
    obj.oncontextmenu = function(){return false}
    
    var span = document.createElement('span');
    span.innerHTML = text;

    obj.appendChild(span);
    controls.appendChild(obj);

    
}

function constructDescription(text){
    var node = document.createElement("p");
    node.innerHTML = text;

    node.style.width = "771px";
    node.style.textAlign = "center";
    node.style.marginLeft = "16px";

    controls.appendChild(node);
}

function meowButton(){
    constructDescription("Gato");
    constructButton(typeButtons.big, mouthAction, "Miau");
}

function bongoButtons(){
    constructDescription("Bongo");

    constructButton(typeButtons.medium, bongo0Action, "Esquerda");    
    constructButton(typeButtons.medium, bongo1Action, "Direita");

    controls.appendChild(document.createElement('br'));  
}

function keyboardButtons(){
    constructDescription("Teclado");

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

function marimbaButtons(){
    constructDescription("Marimba");

    constructButton(typeButtons.small, marimba1Action, "1");
    constructButton(typeButtons.small, marimba2Action, "2");
    constructButton(typeButtons.small, marimba3Action, "3");
    constructButton(typeButtons.small, marimba4Action, "4");
    constructButton(typeButtons.small, marimba5Action, "5");

    controls.appendChild(document.createElement('br'));

    constructButton(typeButtons.small, marimba6Action, "6");
    constructButton(typeButtons.small, marimba7Action, "7");
    constructButton(typeButtons.small, marimba8Action, "8");
    constructButton(typeButtons.small, marimba9Action, "9");
    constructButton(typeButtons.small, marimba0Action, "0");

}

function cymbalButton(){
    constructDescription("Prato");

    constructButton(typeButtons.big, cymbalAction, "Direita");
}

function cowbellButton(){
    constructDescription("Sino");

    constructButton(typeButtons.big, cowbellAction, "Direita");
}

function tambourineButton(){
    constructDescription("Pandeiro");

    constructButton(typeButtons.big, tambourineAction, "Direita");
}

function explosionButton(){
    constructDescription("Não aperte.");

    constructButton(typeButtons.big, explosionAction, "Eu avisei...", function(){
        document.body.style.animationDuration = "2s";
        document.body.style.animationTimingFunction = "cubic-bezier(0.74, 0.2, 0.98, 0.57)";
        document.body.style.animationName = "explosion1";

        setTimeout(function(){
            document.body.style.animationDuration = "2s";
            document.body.style.animationName = "explosion2";
        }, 2100);
    });
}

function chickenButton(){
    constructDescription("Galinha");

    constructButton(typeButtons.big, chickenAction, "Esquerda");
}


meowButton();
bongoButtons();
keyboardButtons();
marimbaButtons();
cymbalButton();
cowbellButton();
tambourineButton();
chickenButton();
explosionButton();
