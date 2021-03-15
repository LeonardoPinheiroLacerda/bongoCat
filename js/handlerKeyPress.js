document.onkeypress = function (e) {
    switch (e.key) {
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

        //Cymbal

        case 'c':
        case 'C':
            cymbalAction.do();
            break;

        //Cowbell

        case 'f':
        case 'F':
            cowbellAction.do();
            break;

        //Tambourine

        case 'v':
        case 'V':
            tambourineAction.do();
            break;

        //Marimba
        case 'q':
        case 'Q':
            marimba1Action.do();
            break;
        case 'w':
        case 'W':
            marimba2Action.do();
            break;
        case 'e':
        case 'E':
            marimba3Action.do();
            break;
        case 'r':
        case 'R':
            marimba4Action.do();
            break;
        case 't':
        case 'T':
            marimba5Action.do();
            break;
        case 'y':
        case 'Y':
            marimba6Action.do();
            break;
        case 'u':
        case 'U':
            marimba7Action.do();
            break;
        case 'i':
        case 'I':
            marimba8Action.do();
            break;
        case 'o':
        case 'O':
            marimba9Action.do();
            break;
        case 'p':
        case 'P':
            marimba0Action.do();
            break;

        //Explosion
        case 'g':
        case 'G':
            explosionAction.do();
            break;

        case 'x':
        case 'X':
            document.getElementsByClassName('infoAlert')[0].id = 'invisible';
            break;
    }
}