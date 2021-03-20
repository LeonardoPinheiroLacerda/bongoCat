function check(){
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
        return true;
    }
    else {
        return false;
    }
}

var head = document.getElementsByTagName('head')[0];
var body = document.getElementsByTagName('body')[0];

function appendScript(src){
    var script = document.createElement('script');
    script.src = src;
    body.appendChild(script);
}

function appendLink(href){
    var link = document.createElement('link');
    link.href = href;
    link.rel = "stylesheet";
    link.type = "text/css";
    head.appendChild(link);
}

if(check()){    //DISPOSITIVOS MOVEIS

    appendLink("style/smartphone.css");
    appendScript("js/constructControls.js");

}
else{          //COMPUTADORES
    appendScript("js/handlerKeyPress.js");
    appendScript("js/handlerKeyUp.js");
}