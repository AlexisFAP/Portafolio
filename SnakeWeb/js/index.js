let game = document.getElementById('world');
let gameContext = game.getContext("2d");
let score = document.getElementById("score");

let bodySnake = [];
let velocity = 5;
let snakeSize = 25;
let gameSize = 500;

let startRandom = Math.floor(Math.random()*2);

let changeDirection = false;
let direction = "";

let listCoordendas = [['a','a','a','a','a','a']];

function startGame(){
    bodySnake.push(new snakebody(snakeSize, snakeSize, Math.floor(Math.random() * 19) * snakeSize, Math.floor(Math.random() * 19) * snakeSize));
    myGameArea.start();
}

function addApple(){
    myApple = new apple(snakeSize/2, snakeSize/2 + Math.floor(Math.random() * 19) * snakeSize, (snakeSize/2) + Math.floor(Math.random() * 19) * snakeSize);
}

function gameArea(){
    ctx = gameContext;
    ctx.strokeStyle= "#000000";
    for(let i = 0;i<20;i++){
        ctx.beginPath();
        ctx.moveTo(i*snakeSize,0);
        ctx.lineTo(i*snakeSize,gameSize);
        ctx.stroke();
    }
    for(let i = 0;i<20;i++){
        ctx.beginPath();
        ctx.moveTo(0,i*snakeSize);
        ctx.lineTo(gameSize,i*snakeSize);
        ctx.stroke();
    }
    
}

let myGameArea = {
    start : function() {
        document.body.insertBefore(game, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        gameContext.clearRect(0, 0, game.width, game.height);
    }
}

function apple(radious, x, y){
    this.radious = radious;
    this.x = x;
    this.y = y;
    this.update = function() {
        ctx = gameContext;
        ctx.fillStyle = "#FF0000";
        ctx.strokeStyle = "#FF0000";        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radious, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }
}

function snakebody(width, height, x, y) {
    if(startRandom  == 0){
        this.width = width;
        this.height = height;
        this.speedX = 0;
        this.speedY = velocity;
        this.x = x;
        this.y = y; 
    }else{
        this.width = width;
        this.height = height;
        this.speedX = velocity;
        this.speedY = 0;
        this.x = x;
        this.y = y; 
    }
       
    this.update = function() {
        ctx = gameContext;
        ctx.fillStyle = "#0000FF";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        if(changeDirection){
            if(direction == 'Left' && this.speedY != 0){
                this.x += this.speedX;
                this.y += this.speedY;
                if(this.y % snakeSize == 0){
                    this.speedX = -velocity;
                    this.speedY = 0;
                   changeDirection = false; 
                }
            }
            if(direction == 'Right' && this.speedY != 0){
                this.x += this.speedX;
                this.y += this.speedY;
                if(this.y % snakeSize == 0){
                    this.speedX = velocity;
                    this.speedY = 0;
                   changeDirection = false; 
                }
            }
            if(direction == 'Up' && this.speedX != 0){
                this.x += this.speedX;
                this.y += this.speedY;
                if(this.x % snakeSize == 0){
                    this.speedX = 0;
                    this.speedY = -velocity;
                   changeDirection = false; 
                }
            }
            if(direction == 'Down' && this.speedX != 0){
                this.x += this.speedX;
                this.y += this.speedY;
                if(this.x % snakeSize == 0){
                    this.speedX = 0;
                    this.speedY = velocity;
                   changeDirection = false; 
                }
            }
        }else{
            this.x += this.speedX;
            this.y += this.speedY;
        }

        if(this.x + this.speedX >= gameSize){
            this.x = 0;
        }else if(this.x +this.speedX < -velocity){
            this.x = gameSize;
        }
        if(this.y +this.speedY >= gameSize){
            this.y = 0;
        }else if(this.y +this.speedY < -velocity){
            this.y = gameSize;
        }
    }    
}

function updateBody(){
    for(let i = 5;i>0;i--){
        listCoordendas[0][i]=listCoordendas[0][i-1];
    }
    listCoordendas[0][0]=bodySnake[0].x+'|'+bodySnake[0].y;
    for(let i = 1;i<listCoordendas.length;i++){
        for(let j = 5;j>0;j--){
            listCoordendas[i][j]=listCoordendas[i][j-1];
        }
        listCoordendas[i][0]=listCoordendas[i-1][5];
    }
    for(let i=1;i<bodySnake.length;i++){
        bodySnake[i].x = parseInt(listCoordendas[i][0].split('|')[0]);
        bodySnake[i].y = parseInt(listCoordendas[i][0].split('|')[1]);
        bodySnake[i].ctx = gameContext;
        bodySnake[i].ctx.fillStyle = "#00FF00";
        bodySnake[i].ctx.fillRect(bodySnake[i].x , bodySnake[i].y ,snakeSize , snakeSize);
    }
}

function collectApple(){
    if(bodySnake[0].x == myApple.x - (snakeSize/2) && bodySnake[0].y == myApple.y - (snakeSize/2)){
        score.innerHTML++;
        myApple.x = (snakeSize/2) + Math.floor(Math.random() * 19) * snakeSize;
        myApple.y = (snakeSize/2) + Math.floor(Math.random() * 19) * snakeSize;
        listCoordendas.push([[0,0,0,0]]);
        bodySnake.push(new snakebody(snakeSize, snakeSize, 0,  0));
    }
}

function updateGameArea() {
    myGameArea.clear();
    bodySnake[0].newPos();    
    bodySnake[0].update();

    myApple.update();
    gameArea();

    collectApple();
    
    updateBody();
}

function move(){
    window.addEventListener('keyup',(e) => {
        switch(e.key){
            case 'ArrowLeft':
                if(bodySnake[0].y % snakeSize == 0 && !changeDirection){
                    if(bodySnake[0].speedX == 0){
                        bodySnake[0].speedX = -velocity;
                        bodySnake[0].speedY = 0;
                    }
                }else if(bodySnake[0].speedX == 0){
                    changeDirection = true;
                    direction = "Left";
                }
                break;
            case 'ArrowRight':
                if(bodySnake[0].y % snakeSize == 0 && !changeDirection){
                    if(bodySnake[0].speedX == 0){
                        bodySnake[0].speedX = velocity;
                        bodySnake[0].speedY = 0;
                    }
                }else if(bodySnake[0].speedX == 0){
                    changeDirection = true;
                    direction = "Right";
                }
                break;
            case 'ArrowUp':
                if(bodySnake[0].x % snakeSize == 0 && !changeDirection){
                    if(bodySnake[0].speedY == 0){
                        bodySnake[0].speedX = 0;
                        bodySnake[0].speedY = -velocity;
                    }
                }else if(bodySnake[0].speedY == 0){
                    changeDirection = true;
                    direction = 'Up';
                }
                break;
            case 'ArrowDown':
                if(bodySnake[0].x % snakeSize == 0 && !changeDirection){
                    if(bodySnake[0].speedY == 0){
                        bodySnake[0].speedX = 0;
                        bodySnake[0].speedY = velocity;
                    }
                }else if(bodySnake[0].speedY == 0){
                    changeDirection = true;
                    direction = 'Down';
                }
                break;
        }
    });
} 

startGame();
addApple();
move();