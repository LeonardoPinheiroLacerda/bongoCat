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
    }
}