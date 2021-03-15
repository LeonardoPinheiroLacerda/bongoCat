document.onkeypress = function(e){
    switch(e.key){
        //Bongo
        case 'a':
        case 'A':    
            bongo0Action.do();
            break;

        case 'd':
        case 'D':
            bongo1Action.do();
            break;

        //Meow
        case ' ':
            mouthAction.do();
            break;

        //Keyboard
        case '1': 
            keyboard1Action.do();
            break;
        case '2': 
            keyboard2Action.do();
            break;
        case '3': 
            keyboard3Action.do();
            break;
        case '4': 
            keyboard4Action.do();
            break;
        case '5': 
            keyboard5Action.do();
            break;
        case '6': 
            keyboard6Action.do();
            break;
        case '7': 
            keyboard7Action.do();
            break;
        case '8': 
            keyboard8Action.do();
            break;
        case '9': 
            keyboard9Action.do();
            break;
        case '0': 
            keyboard0Action.do();
            break;

        case 'c':
        case 'C':
            cymbalAction.do();
            break;

        case 'x':
        case 'X':
            document.getElementsByClassName('infoAlert')[0].id = 'invisible';
            break;

        case 'i':
        case 'I':
            document.getElementsByClassName('infoAlert')[0].id = 'visible';
            break;


    }
}