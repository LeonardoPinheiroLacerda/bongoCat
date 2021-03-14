var controls = document.getElementsByClassName('controls')[0];

function bongoBottons(){

}

function meowButton(){
    var div = document.createElement('div');
    div.innerHTML = "Meow";
    div.classList.add("meow");

    div.style.backgroundColor = 'gray';
    div.style.textAlign = 'center';
    div.style.touchAction = "manipulation";

    div.onpointerdown = function(){
        mouthAction.do();
    }

    div.onpointerup = function(){
        mouthAction.undo();
    }

    div.onselectstart = function(){return false}
    div.oncontextmenu = function(){return false}
    

    controls.appendChild(div);
}

meowButton();