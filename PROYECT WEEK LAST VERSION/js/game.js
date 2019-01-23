var game = {
    
    canvas: undefined,
    ctx: undefined,
    fps: 60,
    scoreBoard: undefined,
    keys: {LEFT: 37, RIGHT: 39, DOWN_POWER: 40},
    background: undefined,
    board: [],


    start: function(canvaId) {

        this.canvas = document.getElementById(canvaId)
        this.ctx = this.canvas.getContext('2d')
        this.fps = 60
        this.background = new Background(this)
        this.nest = new Nest(this)

        this.bird = new Bird(this)
        this.ball = new Ball(this.ctx)
        this.createBoard()
        
        this.ctx.scale(1.1,1.1)
        
        // this.score = 0
        this.interval = setInterval(function(){
           
        
        this.clear()
        
        
        this.score += 1;
        
            

        this.drawAll();
        this.checkCollision();
        this.checkEggNest();
        this.moveAll();
        

        }.bind(this), 1000/60);

    },


    checkEggNest: function(){

        if((this.ball.y>this.nest.y)&&((this.ball.x<(this.nest.x+this.nest.w+2))&&(this.ball.x>this.nest.x-2))){

            this.ball.collisionNest = true
            console.log("ha entrado en el nido")
            
        }


    },




    checkCollision: function(){

        var colision = false

        this.board.forEach((wall)=>{
            if (this.RectCircleColliding(this.ball,wall)==="stopY") {
                this.ball.stopDown=true;
                colision = true
                
                                
            } else 
            
            
            if (this.RectCircleColliding(this.ball,wall)==="stopX") {
                
                colision = true
                
                if(wall.x > this.ball.x) {
                    this.ball.colisionRight=true
                } else  {
                    this.ball.colisionLeft=true
                }
            } else if(colision === false) {
                this.ball.stopDown=false
            }
        })
    },

    createBoard: function(){
        this.board.push(
            new Wall(this, 400,250, 60, 10),
            new Wall(this, 500, 250, 200, 10),
            new Wall(this, 750, 250, 50, 10),
            
            new Wall(this, 450,300,150,10),
            new Wall(this, 650,300,150,10),

            new Wall(this, 400,350,300,10),
            new Wall(this, 750,350,50,10),

            new Wall(this, 400,400,50,10),
            new Wall(this, 500,400,250,10),

            new Wall(this, 400,450,100,10),
            new Wall(this, 550,450,200,10),

            new Wall(this, 400,500,50,10),
            new Wall(this, 500,500,50,10),
            new Wall(this, 600,500,200,10),
            

            // paredes verticales
            new Wall(this, 400,250,10,250),
            new Wall(this, 675,250,10,50),
            new Wall(this, 600,300,10,50),
            new Wall(this, 650,400,10,50),
            new Wall(this, 700, 450,10, 50),
            new Wall(this, 800,250,10,260),
            
        )
    },

    RectCircleColliding: function(ball,wall){

            var distX = Math.abs(ball.x - wall.x-wall.w/2);
            var distY = Math.abs(ball.y - wall.y-wall.h/2);
        
            if (distX > (wall.w/2 + ball.r)) { return false; }
            if (distY > (wall.h/2 + ball.r)) { return false; }
        
            if (distX <= (wall.w/2)) { return "stopY"; } 
            if (distY <= (wall.h/2)) { return "stopX"; }  

    },
        
    clear: function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    drawAll: function(){
        
        
        this.board.forEach((wall)=>{
            wall.draw();
        }); 

        this.nest.draw()

        // this.bird.draw();

        // this.background.draw();
        // this.ball.draw(); 
        // this.drawScore();
    },

    moveAll: function () {
        
        this.ball.move();
        this.background.move();
        this.bird.move();
        this.nest.move();
        // this.obstacles.forEach(function (obstacle) { obstacle.move(); });
    },



    
}