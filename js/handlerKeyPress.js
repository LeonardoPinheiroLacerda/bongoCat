document.onkeypress = function(e){
    switch(e.key){
        case 'a':
        case 'A':    
            bongo0Action.do();
            break;

        case 'd':
        case 'D':
            bongo1Action.do();
            break;

        case ' ':
            mouthAction.do();
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