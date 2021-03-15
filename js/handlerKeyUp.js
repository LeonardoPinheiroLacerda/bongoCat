document.onkeyup = function(e){
    switch(e.key){
        case 'a':
        case 'A': 
            bongo0Action.undo();   
            break;

        case 'd':
        case 'D':
            bongo1Action.undo();
            break;
        
        case ' ':
            mouthAction.undo();
            break;

        //Keyboard
        case '1': 
            keyboard1Action.undo();
            break;
        case '2': 
            keyboard2Action.undo();
            break;
        case '3': 
            keyboard3Action.undo();
            break;
        case '4': 
            keyboard4Action.undo();
            break;
        case '5': 
            keyboard5Action.undo();
            break;
        case '6': 
            keyboard6Action.undo();
            break;
        case '7': 
            keyboard7Action.undo();
            break;
        case '8': 
            keyboard8Action.undo();
            break;
        case '9': 
            keyboard9Action.undo();
            break;
        case '0': 
            keyboard0Action.undo();
            break;

        case 'c':
        case 'C':
            cymbalAction.undo();
            break;
    }
}