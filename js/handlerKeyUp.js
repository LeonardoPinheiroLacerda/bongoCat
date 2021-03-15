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

        case 'f':
        case 'F':
            cowbellAction.undo();
            break;

        case 'v':
        case 'V':
            tambourineAction.undo();
            break;

        //Marimba
        case 'q':
        case 'Q':
            marimba1Action.undo();
            break;
        case 'w':
        case 'W':
            marimba2Action.undo();
            break;
        case 'e':
        case 'E':
            marimba3Action.undo();
            break;
        case 'r':
        case 'R':
            marimba4Action.undo();
            break;
        case 't':
        case 'T':
            marimba5Action.undo();
            break;
        case 'y':
        case 'Y':
            marimba6Action.undo();
            break;
        case 'u':
        case 'U':
            marimba7Action.undo();
            break;
        case 'i':
        case 'I':
            marimba8Action.undo();
            break;
        case 'o':
        case 'O':
            marimba9Action.undo();
            break;
        case 'p':
        case 'P':
            marimba0Action.undo();
            break;

        //Explosion
        case 'g':
        case 'G':
            explosionAction.undo();
            break;
    }
}