var box11 = document.getElementById('box-1-1');
var box12 = document.getElementById('box-1-2');
var box13 = document.getElementById('box-1-3');
var box21 = document.getElementById('box-2-1');
var box22 = document.getElementById('box-2-2');
var box23 = document.getElementById('box-2-3');
var box31 = document.getElementById('box-3-1');
var box32 = document.getElementById('box-3-2');
var box33 = document.getElementById('box-3-3');

var message = document.getElementById('message');
var button = document.getElementById('button');

var cont = 0;

var winsX = 0;
var winsO = 0;

var win = false;


addEvent();

button.addEventListener("click",restart);

function play(){
    if(cont%2 == 0 && this.innerHTML == ''){
        this.innerHTML = 'X';

        createElementDiv('X',this);
        cont++;
    }else if(cont%2 == 1 && this.innerHTML == ''){
        this.innerHTML = 'O';
        
        createElementDiv('O',this);
        cont++;
    }

    compare();

    if(win){
        removeEvent();
        if(message.innerHTML == 'Gano la X'){
            winsX++;
            message.innerHTML = 'X WIN';
            console.clear();
            console.log('Victories of the X: '+winsX);
            console.log('Victories of the O: '+winsO);
        }else if(message.innerHTML == 'Gano la O'){
            winsO++;
            message.innerHTML = 'O WIN';
            console.clear();
            console.log('Victories of the O: '+winsO);
            console.log('Victories of the X: '+winsX);
        }
    }

    showButton();

}

function addEvent(){
    box11.addEventListener("click",play);
    box12.addEventListener("click",play);
    box13.addEventListener("click",play);
    box21.addEventListener("click",play);
    box22.addEventListener("click",play);
    box23.addEventListener("click",play);
    box31.addEventListener("click",play);
    box32.addEventListener("click",play);
    box33.addEventListener("click",play);
}

function createElementDiv(form, element){
    if(form == 'X'){
        let lineOne = document.createElement("div");
        lineOne.style.width = '10px';
        lineOne.style.height = '85px';
        lineOne.style.background = 'rgb(245,245,245)';
        lineOne.style.transform = 'rotate(45deg)';
        lineOne.style.position = 'absolute';
        lineOne.style.borderRadius = '5px';

        let lineTwo = document.createElement("div");
        lineTwo.style.width = '10px';
        lineTwo.style.height = '85px';
        lineTwo.style.background = 'rgb(245,245,245)';
        lineTwo.style.transform = 'rotate(135deg)';
        lineTwo.style.position = 'absolute';
        lineTwo.style.borderRadius = '5px';

        lineOne.style.opacity = '0';
        lineTwo.style.opacity = '0';

        let num = 0.1;
        let a;

        animationOn();
        
        function animationOn() {
            a = setInterval(function () {
                lineOne.style.opacity = num;
                lineTwo.style.opacity = num;
                num = num + 0.1;
                if(num > 1){
                    clearInterval(a);
                }
            },50);
        }
        
        element.appendChild(lineOne);
        element.appendChild(lineTwo);
    }else if(form == 'O'){
        let circleOne = document.createElement("div");
        circleOne.style.width = '65px';
        circleOne.style.height = '65px';
        circleOne.style.borderRadius = '32px';
        circleOne.style.background = 'rgb(245,245,245)'
        circleOne.style.position = 'absolute';

        let circleTwo = document.createElement("div");
        circleTwo.style.width = '50px';
        circleTwo.style.height = '50px';
        circleTwo.style.borderRadius = '25px';
        circleTwo.style.background = 'rgb(25,25,25)'
        circleTwo.style.position = 'absolute';

        circleOne.style.opacity = '0';
        circleTwo.style.opacity = '0';

        let num = 0.1;
        let a;

        animationOn2();
        
        function animationOn2() {
            a = setInterval(function () {
                circleOne.style.opacity = num;
                circleTwo.style.opacity = num;
                num = num + 0.1;
                if(num > 1){
                    clearInterval(a);
                }
            },50);
        }

        element.appendChild(circleOne);
        element.appendChild(circleTwo);
    }
}

function removeEvent(){
    box11.removeEventListener("click",play);
    box12.removeEventListener("click",play);
    box13.removeEventListener("click",play);
    box21.removeEventListener("click",play);
    box22.removeEventListener("click",play);
    box23.removeEventListener("click",play);
    box31.removeEventListener("click",play);
    box32.removeEventListener("click",play);
    box33.removeEventListener("click",play);
}

function compare(){
    //Hori
    if(box11.innerHTML.split("",1) == 'X' && box12.innerHTML.split("",1) == 'X' && box13.innerHTML.split("",1) == 'X'){
        message.innerHTML = 'Gano la X';
        message.style.display = 'flex';
        win = true;
    }else if(box11.innerHTML.split("",1) == 'O' && box12.innerHTML.split("",1) == 'O' && box13.innerHTML.split("",1) == 'O'){
        message.innerHTML = 'Gano la O';
        message.style.display = 'flex';
        win = true;
    }
    if(box21.innerHTML.split("",1) == 'X' && box22.innerHTML.split("",1) == 'X' && box23.innerHTML.split("",1) == 'X'){
        message.innerHTML = 'Gano la X';
        message.style.display = 'flex';
        win = true;
    }else if(box21.innerHTML.split("",1) == 'O' && box22.innerHTML.split("",1) == 'O' && box23.innerHTML.split("",1) == 'O'){
        message.innerHTML = 'Gano la O';
        message.style.display = 'flex';
        win = true;
    }
    if(box31.innerHTML.split("",1) == 'X' && box32.innerHTML.split("",1) == 'X' && box33.innerHTML.split("",1) == 'X'){
        message.innerHTML = 'Gano la X';
        message.style.display = 'flex';
        win = true;
    }else if(box31.innerHTML.split("",1) == 'O' && box32.innerHTML.split("",1) == 'O' && box33.innerHTML.split("",1) == 'O'){
        message.innerHTML = 'Gano la O';
        message.style.display = 'flex';
        win = true;
    }
    
    //Di
    if(box11.innerHTML.split("",1) == 'X' && box22.innerHTML.split("",1) == 'X' && box33.innerHTML.split("",1) == 'X'){
        message.innerHTML = 'Gano la X';
        message.style.display = 'flex';
        win = true;
    }else if(box11.innerHTML.split("",1) == 'O' && box22.innerHTML.split("",1) == 'O' && box33.innerHTML.split("",1) == 'O'){
        message.innerHTML = 'Gano la O';
        message.style.display = 'flex';
        win = true;
    }
    if(box13.innerHTML.split("",1) == 'X' && box22.innerHTML.split("",1) == 'X' && box31.innerHTML.split("",1) == 'X'){
        message.innerHTML = 'Gano la X';
        message.style.display = 'flex';
        win = true;
    }else if(box13.innerHTML.split("",1) == 'O' && box22.innerHTML.split("",1) == 'O' && box31.innerHTML.split("",1) == 'O'){
        message.innerHTML = 'Gano la O';
        message.style.display = 'flex';
        win = true;
    }


    //Ver
    if(box11.innerHTML.split("",1) == 'X' && box21.innerHTML.split("",1) == 'X' && box31.innerHTML.split("",1) == 'X'){
        message.innerHTML = 'Gano la X';
        message.style.display = 'flex';
        win = true;
    }else if(box11.innerHTML.split("",1) == 'O' && box21.innerHTML.split("",1) == 'O' && box31.innerHTML.split("",1) == 'O'){
        message.innerHTML = 'Gano la O';
        message.style.display = 'flex';
        win = true;
    }
    if(box12.innerHTML.split("",1) == 'X' && box22.innerHTML.split("",1) == 'X' && box32.innerHTML.split("",1) == 'X'){
        message.innerHTML = 'Gano la X';
        message.style.display = 'flex';
        win = true;
    }else if(box12.innerHTML.split("",1) == 'O' && box22.innerHTML.split("",1) == 'O' && box32.innerHTML.split("",1) == 'O'){
        message.innerHTML = 'Gano la O';
        message.style.display = 'flex';
        win = true;
    }
    if(box13.innerHTML.split("",1) == 'X' && box23.innerHTML.split("",1) == 'X' && box33.innerHTML.split("",1) == 'X'){
        message.innerHTML = 'Gano la X';
        message.style.display = 'flex';
        win = true;
    }else if(box13.innerHTML.split("",1) == 'O' && box23.innerHTML.split("",1) == 'O' && box33.innerHTML.split("",1) == 'O'){
        message.innerHTML = 'Gano la O';
        message.style.display = 'flex';
        win = true;
    }

    if(box11.innerHTML.split("",1) != '' && box12.innerHTML.split("",1) != '' && box13.innerHTML.split("",1) != '' &&
    box21.innerHTML.split("",1) != '' && box22.innerHTML.split("",1) != '' && box23.innerHTML.split("",1) != '' &&
    box31.innerHTML.split("",1) != '' && box32.innerHTML.split("",1) != '' && box33.innerHTML.split("",1) != ''){
        message.innerHTML = 'TIE';
        message.style.display = 'flex';
        win = true;
    }
}

function showButton(){
    if(win){
        button.style.display = 'flex';
    }
}

function restart(){
    cont = 0;

    box11.innerHTML = '';
    box12.innerHTML = '';
    box13.innerHTML = '';
    box21.innerHTML = '';
    box22.innerHTML = '';
    box23.innerHTML = '';
    box31.innerHTML = '';
    box32.innerHTML = '';
    box33.innerHTML = '';

    message.style.display = 'none';
    button.style.display = 'none';
    win = false;
    addEvent();
}

