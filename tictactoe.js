let square1 = document.getElementById('sq1');
let square2 = document.getElementById('sq2');
let square3 = document.getElementById('sq3');
let square4 = document.getElementById('sq4');
let square5 = document.getElementById('sq5');
let square6 = document.getElementById('sq6');
let square7 = document.getElementById('sq7');
let square8 = document.getElementById('sq8');
let square9 = document.getElementById('sq9');
let b1 = document.getElementById('h1');
let b2 = document.getElementById('h2');
let b3 = document.getElementById('h3');
let b4 = document.getElementById('h4');
let b5 = document.getElementById('h5');
let b6 = document.getElementById('h6');
let b7 = document.getElementById('h7');
let b8 = document.getElementById('h8');
let b9 = document.getElementById('h9');
let reset = document.getElementById('reset');

i = 1;

function focusx(){
    square1.onmouseenter = function(){
        square1.style.backgroundImage = "url('x.png')"
    }
    square2.onmouseenter = function(){
        square2.style.backgroundImage = "url('x.png')"
    }
    square3.onmouseenter = function(){
        square3.style.backgroundImage = "url('x.png')"
    }
    square4.onmouseenter = function(){
        square4.style.backgroundImage = "url('x.png')"
    }
    square5.onmouseenter = function(){
        square5.style.backgroundImage = "url('x.png')"
    }
    square6.onmouseenter = function(){
        square6.style.backgroundImage = "url('x.png')"
    }
    square7.onmouseenter = function(){
        square7.style.backgroundImage = "url('x.png')"
    }
    square8.onmouseenter = function(){
        square8.style.backgroundImage = "url('x.png')"
    }
    square9.onmouseenter = function(){
        square9.style.backgroundImage = "url('x.png')"
    }

    square1.onmouseleave = function(){
        square1.style.backgroundImage = ""
    }
    square2.onmouseleave = function(){
        square2.style.backgroundImage = ""
    }
    square3.onmouseleave = function(){
        square3.style.backgroundImage = ""
    }
    square4.onmouseleave = function(){
        square4.style.backgroundImage = ""
    }
    square5.onmouseleave = function(){
        square5.style.backgroundImage = ""
    }
    square6.onmouseleave = function(){
        square6.style.backgroundImage = ""
    }
    square7.onmouseleave = function(){
        square7.style.backgroundImage = ""
    }
    square8.onmouseleave = function(){
        square8.style.backgroundImage = ""
    }
    square9.onmouseleave = function(){
        square9.style.backgroundImage = ""
    }
}

function focuso(){
    square1.onmouseenter = function(){
        square1.style.backgroundImage = "url('o2.png')"
    }
    square2.onmouseenter = function(){
        square2.style.backgroundImage = "url('o2.png')"
    }
    square3.onmouseenter = function(){
        square3.style.backgroundImage = "url('o2.png')"
    }
    square4.onmouseenter = function(){
        square4.style.backgroundImage = "url('o2.png')"
    }
    square5.onmouseenter = function(){
        square5.style.backgroundImage = "url('o2.png')"
    }
    square6.onmouseenter = function(){
        square6.style.backgroundImage = "url('o2.png')"
    }
    square7.onmouseenter = function(){
        square7.style.backgroundImage = "url('o2.png')"
    }
    square8.onmouseenter = function(){
        square8.style.backgroundImage = "url('o2.png')"
    }
    square9.onmouseenter = function(){
        square9.style.backgroundImage = "url('o2.png')"
    }

    square1.onmouseleave = function(){
        square1.style.backgroundImage = ""
    }
    square2.onmouseleave = function(){
        square2.style.backgroundImage = ""
    }
    square3.onmouseleave = function(){
        square3.style.backgroundImage = ""
    }
    square4.onmouseleave = function(){
        square4.style.backgroundImage = ""
    }
    square5.onmouseleave = function(){
        square5.style.backgroundImage = ""
    }
    square6.onmouseleave = function(){
        square6.style.backgroundImage = ""
    }
    square7.onmouseleave = function(){
        square7.style.backgroundImage = ""
    }
    square8.onmouseleave = function(){
        square8.style.backgroundImage = ""
    }
    square9.onmouseleave = function(){
        square9.style.backgroundImage = ""
    }
}



if(i == 1){
    focusx();
}


square1.onclick = function(){
    if(i == 1){
        h1.style.backgroundImage = "url(x.png)";
        i++;
        focuso();
    }
    else{
        h1.style.backgroundImage = "url(o2.png)";
        i--;
        focusx();
    }
}

square2.onclick = function(){
    if(i == 1){
        h2.style.backgroundImage = "url(x.png)";
        i++;
        focuso();
    }
    else{
        h2.style.backgroundImage = "url(o2.png)";
        i--;
        focusx();
    }
}

square3.onclick = function(){
    if(i == 1){        
        h3.style.backgroundImage = "url(x.png)";
        i++;
        focuso();
    }
    else{
        h3.style.backgroundImage = "url(o2.png)";
        i--;
        focusx();
    }
}

square4.onclick = function(){
    if(i == 1){        
        h4.style.backgroundImage = "url(x.png)";
        i++;
        focuso();
    }
    else{
        h4.style.backgroundImage = "url(o2.png)";
        i--;
        focusx();
    }
}

square5.onclick = function(){
    if(i == 1){        
        h5.style.backgroundImage = "url(x.png)";
        i++;
        focuso();
    }
    else{
        h5.style.backgroundImage = "url(o2.png)";
        i--;
        focusx();
    }
}

square6.onclick = function(){
    if(i == 1){        
        h6.style.backgroundImage = "url(x.png)";
        i++;
        focuso();
    }
    else{
        h6.style.backgroundImage = "url(o2.png)";
        i--;
        focusx();
    }
}

square7.onclick = function(){
    if(i == 1){        
        h7.style.backgroundImage = "url(x.png)";
        i++;
        focuso();
    }
    else{
        h7.style.backgroundImage = "url(o2.png)";
        i--;
        focusx();
    }
}

square8.onclick = function(){
    if(i == 1){        
        h8.style.backgroundImage = "url(x.png)";
        i++;
        focuso();
    }
    else{
        h8.style.backgroundImage = "url(o2.png)";
        i--;
        focusx();
    }
}

square9.onclick = function(){
   if(i == 1){
        h9.style.backgroundImage = "url(x.png)";
        i++;
        focuso();
    }
    else{
        h9.style.backgroundImage = "url(o2.png)";
        i--;
        focusx();
    }
}

function resetfunction(){
    focusx();
    i = 1;
    h1.style.backgroundImage = "";
    h2.style.backgroundImage = "";
    h3.style.backgroundImage = "";
    h4.style.backgroundImage = "";
    h5.style.backgroundImage = "";
    h6.style.backgroundImage = "";
    h7.style.backgroundImage = "";
    h8.style.backgroundImage = "";
    h9.style.backgroundImage = "";
}

reset.onclick = function(){
    resetfunction();
}