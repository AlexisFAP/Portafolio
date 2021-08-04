var Snake = document.getElementById('snake');
var Game = document.getElementById('screen');
var Apple = document.getElementById('apple');

var Distance = 25;
var Direction = '';
var cont = 0;

var list = [[0,0]]


function movement(){
    a = setInterval(function(){
        touchApple();
        for(let i = 0;i<list.length;i++){
            if(i==0){
                list[i][0]=parseInt(Snake.style.left);
                list[i][1]=parseInt(Snake.style.top);
            }
        }
        if(canMove()){
            if(Direction == 'LEFT'){
                Snake.style.left = parseInt(Snake.style.left) - Distance + 'px';
            }
            if(Direction == 'RIGHT'){
                Snake.style.left = parseInt(Snake.style.left) + Distance + 'px';
            }
            if(Direction == 'UP'){
                Snake.style.top = parseInt(Snake.style.top) - Distance + 'px';
            }
            if(Direction == 'DOWN'){
                Snake.style.top = parseInt(Snake.style.top) + Distance + 'px';
            }   
        }else{
            if(Direction == 'LEFT'){
                Snake.style.left = 475 + 'px';
            }
            if(Direction == 'RIGHT'){
                Snake.style.left = 0 + 'px';
            }
            if(Direction == 'UP'){
                Snake.style.top = 475 + 'px';
            }
            if(Direction == 'DOWN'){
                Snake.style.top = 0 + 'px';
            }
        }
    },75);
}

function canMove(){
    if(Direction == 'LEFT' && parseInt(Snake.style.left) >= 10){
        return true;
    }
    if(Direction == 'RIGHT' && parseInt(Snake.style.left) <= 470){
        return true;
    }
    if(Direction == 'UP' && parseInt(Snake.style.top) >= 10){
        return true;
    }
    if(Direction == 'DOWN' && parseInt(Snake.style.top) <= 470){
        return true;
    }
    return false;
}

function direction(){
    window.addEventListener('keyup', (e) =>{
        switch(e.key){
            case 'ArrowLeft':
                Direction = 'LEFT';
                break;
            case 'ArrowRight':
                Direction = 'RIGHT';
                break;
            case 'ArrowUp':
                Direction = 'UP';
                break;
            case 'ArrowDown':
                Direction = 'DOWN';
                break;
        }
    });
}

function spawnSnake(){
    let random_left = 25 * (Math.floor(Math.random() * 20));
    let random_top = 25 * (Math.floor(Math.random() * 20));

    Snake.style.left = random_left + 'px';
    Snake.style.top = random_top + 'px';
}

function spawnApple(){
    let random_left = 25 * (Math.floor(Math.random() * 20));
    let random_top = 25 * (Math.floor(Math.random() * 19));

    left_snake = parseInt(Snake.style.left);
    top_snake = parseInt(Snake.style.top);

    if(random_left != left_snake && random_top != top_snake){
        Apple.style.left = random_left + 'px';
        Apple.style.top = random_top + 'px';
    }else{
        spawnApple();
    }
}

function touchApple(){
    if(parseInt(Snake.style.left) == parseInt(Apple.style.left) && parseInt(Snake.style.top) == 25 + parseInt(Apple.style.top)){
        spawnApple();
        cont++;
        console.log(cont);
        list.push([parseInt(Snake.style.left),parseInt(Snake.style.top)]);
        let bodySnake = document.createElement("div");
        bodySnake.style.width = '25px';
        bodySnake.style.height = '25px';
        bodySnake.style.background = 'rgb(0,245,0)';
        bodySnake.style.left = list[cont][0]+'px';
        bodySnake.style.top = list[cont][1]-(25*(1+cont))+'px';
        bodySnake.style.position = 'relative';
        Game.appendChild(bodySnake);
        console.log(list[cont][0],list[cont][1])
        setInterval(function(){
            bodySnake.style.left = list[cont][0]+'px';
            bodySnake.style.top = list[cont][1]-(25*(1+cont))+'px';
        },75);
    }
}

function addBody(){
    if(Direction == 'LEFT'){
    }
    if(Direction == 'RIGHT'){
    }
    if(Direction == 'UP'){
    }
    if(Direction == 'DOWN'){
    }  
}

function gameOver(){
    cont = 0;
    spawnApple();
    spawnSnake();
}

function start(){
    window.addEventListener('load', () =>{
        Snake.style.left = 0;
        Snake.style.top = 0;
        Apple.style.left = 0;
        Apple.style.top = 0;
        spawnSnake();
        spawnApple();
    });
}

start();
movement();
direction();

