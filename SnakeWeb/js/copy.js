var game = document.getElementById('world');
var snakehead = game.getContext("2d");

var myGamePiece;
var body = [];
var v = 5;

var startRandom = Math.floor(Math.random()*2);

var changeDirection = false;
var direction = "";

var originalX = 0,originalY = 0;

var listCoordendas = [];
var listBody = [];

function startGame(){
    body.push();
    myGamePiece = new snakebody(25, 25, Math.floor(Math.random() * 19) * 25, Math.floor(Math.random() * 19) * 25);
    myGameArea.start();
}

function addApple(){
    myApple = new apple(12.5, 12.5 + Math.floor(Math.random() * 19) * 25, 12.5 + Math.floor(Math.random() * 19) * 25);
}

function gameArea(){
    ctx = snakehead;
    ctx.strokeStyle= "#000000";

    for(let i = 0;i<20;i++){
        ctx.beginPath();
        ctx.moveTo(i*25,0);
        ctx.lineTo(i*25,500);
        ctx.stroke();
    }
    for(let i = 0;i<20;i++){
        ctx.beginPath();
        ctx.moveTo(0,i*25);
        ctx.lineTo(500,i*25);
        ctx.stroke();
    }
    
}

var myGameArea = {
    start : function() {
        document.body.insertBefore(game, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        snakehead.clearRect(0, 0, game.width, game.height);
    }
}

function apple(radious, x, y){
    this.radious = radious;
    this.x = x;
    this.y = y;
    this.update = function() {
        ctx = snakehead;
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
        this.speedY = v;
        this.x = x;
        this.y = y; 
    }else{
        this.width = width;
        this.height = height;
        this.speedX = v;
        this.speedY = 0;
        this.x = x;
        this.y = y; 
    }
       
    this.update = function() {
        ctx = snakehead;
        ctx.fillStyle = "#0000FF";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        if(changeDirection){
            if(direction == 'Left' && this.speedY != 0){
                this.x += this.speedX;
                this.y += this.speedY;
                if(this.y % 25 == 0){
                    this.speedX = -v;
                    this.speedY = 0;
                   changeDirection = false; 
                }
            }
            if(direction == 'Right' && this.speedY != 0){
                this.x += this.speedX;
                this.y += this.speedY;
                if(this.y % 25 == 0){
                    this.speedX = v;
                    this.speedY = 0;
                   changeDirection = false; 
                }
            }
            if(direction == 'Up' && this.speedX != 0){
                this.x += this.speedX;
                this.y += this.speedY;
                if(this.x % 25 == 0){
                    this.speedX = 0;
                    this.speedY = -v;
                   changeDirection = false; 
                }
            }
            if(direction == 'Down' && this.speedX != 0){
                this.x += this.speedX;
                this.y += this.speedY;
                if(this.x % 25 == 0){
                    this.speedX = 0;
                    this.speedY = v;
                   changeDirection = false; 
                }
            }
        }else{
            this.x += this.speedX;
            this.y += this.speedY;
        }

        if(this.x + this.speedX >= 500){
            this.x = 0;
        }else if(this.x +this.speedX < -5){
            this.x = 500;
        }
        if(this.y +this.speedY >= 500){
            this.y = 0;
        }else if(this.y +this.speedY < -5){
            this.y = 500;
        }
    }    
}

function updateBody(){
    if(listBody[0] != null){
        
        listCoordendas[0][0]=[originalX];
        listCoordendas[0][1]=[originalY];
        listBody[0].x = listCoordendas[0][0];
        listBody[0].y = listCoordendas[0][1];
        if(myGamePiece.speedX > 0){
            listCoordendas[0][2]='Right';
        }else if(myGamePiece.speedX < 0){
            listCoordendas[0][2]='Left';
        }
        if(myGamePiece.speedY < 0){
            listCoordendas[0][2]='Up';
        }else if(myGamePiece.speedY > 0){
            listCoordendas[0][2]='Down';
        }
        ctx = snakehead;
        ctx.fillStyle = "#00FF00";
        ctx.fillRect(listBody[0].x, listBody[0].y, 25, 25);
    }
    
    if(listBody.length > 1){
        for(let i = 1;i<listBody.length;i++){
            listCoordendas[i]=listCoordendas[i-1];
                switch (listCoordendas[0][2]) {
                    case 'Left':
                        listBody[i].x = listCoordendas[i][0]+25;
                        listBody[i].y = listCoordendas[i][1];
                        break;
                    case 'Right':
                        listBody[i].x = listCoordendas[i][0]-25;
                        listBody[i].y = listCoordendas[i][1];
                        break;
                    case 'Up':
                        listBody[i].x = listCoordendas[i][0];
                        listBody[i].y = listCoordendas[i][1]+25;
                         break;
                    case 'Down':
                        listBody[i].x = listCoordendas[i][0];
                        listBody[i].y = listCoordendas[i][1]-25;
                        break;
                
                        
                }
            
            ctx = snakehead;
            ctx.fillStyle = "#00FF00";
            ctx.fillRect(listBody[i].x, listBody[i].y, 25, 25);
        }
    }
}

function collectApple(){
    if(myGamePiece.x == myApple.x - 12.5 && myGamePiece.y == myApple.y - 12.5){
        myApple.x = 12.5 + Math.floor(Math.random() * 19) * 25;
        myApple.y = 12.5 + Math.floor(Math.random() * 19) * 25;
        switch (direction){
            case 'Left':
                listCoordendas.push([myGamePiece.x,myGamePiece.y,'Left']);
                break;
            case 'Right':
                listCoordendas.push([myGamePiece.x,myGamePiece.y,'Right']);
                break;
            case 'Up':
                listCoordendas.push([myGamePiece.x,myGamePiece.y, 'Up']);
                break;
            case 'Down':
                listCoordendas.push([myGamePiece.x,myGamePiece.y, 'Down']);
                break;
        }
        let a = new snakebody(25,25,0,0);
        listBody.push(a);
    }
}

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.newPos();    
    myGamePiece.update();

    myApple.update();
    gameArea();

    collectApple();
    if(listCoordendas != null){
        switch (direction){
            case 'Left':
                if(myGamePiece.speedX < 0){
                    originalX = myGamePiece.x+25;
                    originalY = myGamePiece.y;
                }else{
                    originalX = myGamePiece.x-25;
                    originalY = myGamePiece.y;
                }
                
                break;
            case 'Right':
                if(myGamePiece.speedX > 0){
                    originalX = myGamePiece.x-25;
                    originalY = myGamePiece.y;
                }else{
                    originalX = myGamePiece.x+25;
                    originalY = myGamePiece.y;
                }
                
                break;
            case 'Up':
                if(myGamePiece.speedY < 0){
                    originalX = myGamePiece.x;
                    originalY = myGamePiece.y+25;
                }else{
                    originalX = myGamePiece.x;
                    originalY = myGamePiece.y-25;
                }
                
                break;
            case 'Down':
                if(myGamePiece.speedY > 0){
                    originalX = myGamePiece.x;
                    originalY = myGamePiece.y-25;
                }else{
                    originalX = myGamePiece.x;
                    originalY = myGamePiece.y+25;
                }
                break;
        }
    }
    updateBody();
    console.log(listCoordendas[0][2]);
}

function move(){
    window.addEventListener('keyup',(e) => {
        switch(e.key){
            case 'ArrowLeft':
                direction = "Left";
                if(myGamePiece.y % 25 == 0 && !changeDirection){
                    if(myGamePiece.speedX == 0){
                        myGamePiece.speedX = -v;
                        myGamePiece.speedY = 0;
                    }
                }else if(myGamePiece.speedX == 0){
                    changeDirection = true;
                }
                break;
            case 'ArrowRight':
                direction = "Right";
                if(myGamePiece.y % 25 == 0 && !changeDirection){
                    if(myGamePiece.speedX == 0){
                        myGamePiece.speedX = v;
                        myGamePiece.speedY = 0;
                    }
                }else if(myGamePiece.speedX == 0){
                    changeDirection = true;
                }
                break;
            case 'ArrowUp':
                direction = 'Up';
                if(myGamePiece.x % 25 == 0 && !changeDirection){
                    if(myGamePiece.speedY == 0){
                        myGamePiece.speedX = 0;
                        myGamePiece.speedY = -v;
                    }
                }else if(myGamePiece.speedY == 0){
                    changeDirection = true;
                }
                break;
            case 'ArrowDown':
                direction = 'Down';
                if(myGamePiece.x % 25 == 0 && !changeDirection){
                    if(myGamePiece.speedY == 0){
                        myGamePiece.speedX = 0;
                        myGamePiece.speedY = v;
                    }
                }else if(myGamePiece.speedY == 0){
                    changeDirection = true;
                }
                break;
        }
    });
} 

startGame();
addApple();
move();