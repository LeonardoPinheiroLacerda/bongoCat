var controls = document.getElementsByClassName('controls')[0];

function bongoBottons(){

}

function meowButton(){
    var button = document.createElement('button');
    button.innerHTML = "Meow";
    button.classList.add("meow");

    button.onmousedown = function(){
        mouthAction.do();
    }

    button.onmouseup = function(){
        mouthAction.undo();
    }

    controls.appendChild(button);
}

meowButton();