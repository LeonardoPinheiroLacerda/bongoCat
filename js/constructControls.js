var controls = document.getElementsByClassName('controls')[0];

function bongoBottons(){

}

function meowButton(){
    var meow = document.createElement('div');
    
    meow.classList.add("bigButton");
    meow.classList.add("control");

    meow.onpointerdown = function(){
        mouthAction.do();

        meow.style.animation = "bigButtonClick";
        meow.style.animationDuration = '0.1s';

        meow.classList.add("bigButtonClicked");
    }

    meow.onpointerup = function(){
        mouthAction.undo();

        meow.style.animation = "bigButtonRelease";
        meow.style.animationDuration = '0.1s';

        meow.classList.remove("bigButtonClicked");
    }

    meow.onselectstart = function(){return false}
    meow.oncontextmenu = function(){return false}
    
    var span = document.createElement('span');
    span.innerHTML = 'Meow';

    meow.appendChild(span);
    controls.appendChild(meow);
    
}

function bongoButtons(){
    var right = document.createElement('div');
    var left = document.createElement('div');

    right.classList.add('mediumButton');
    left.classList.add('mediumButton');

    right.classList.add("control");
    left.classList.add("control");

    left.onpointerdown = function(){
        bongo0Action.do();
    }

    left.onpointerup = function(){
        bongo0Action.undo();
    }

    right.onpointerdown = function(){
        bongo1Action.do();
    }

    right.onpointerup = function(){
        bongo1Action.undo();
    }

    right.onselectstart = function(){return false}
    right.oncontextmenu = function(){return false}

    left.onselectstart = function(){return false}
    left.oncontextmenu = function(){return false}

    var rightSpan = document.createElement('span');
    var leftSpan = document.createElement('span');

    rightSpan.innerHTML = "Right";
    leftSpan.innerHTML = "Left";

    left.appendChild(leftSpan);
    right.appendChild(rightSpan);
   
    controls.appendChild(left);
    controls.appendChild(right);
    
}


meowButton();
bongoButtons();