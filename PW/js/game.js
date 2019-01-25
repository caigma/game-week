var game = {
    
    canvas: undefined,
    ctx: undefined,
    fps: 60,
    scoreBoard: [0],
    keys: {LEFT: 37, RIGHT: 39, DOWN_POWER: 40},
    background: undefined,
    board: [],
    enemies: [],
    birdPosition: false,
    score: 0,
    letterI: true,
    playAgain: true,
    



    startGame: function(canvaId){
        
        this.canvas = document.getElementById(canvaId)
        this.ctx = this.canvas.getContext('2d')
        this.background = new Background(this)
        this.background.drawInit();
        this.setCanvasDimension();
        
        window.onkeyup = function(e) {

                if (e.keyCode === 73&&this.letterI) {

                    this.letterI = false
                    
                    this.start()

                }

        }.bind(this)

    },

    start: function(canvaId) {

        
        // this.canvas = document.getElementById(canvaId)
        // this.ctx = this.canvas.getContext('2d')
       
        this.fps = 60
        this.background = new Background(this)
        this.nest = new Nest(this)
        this.bird = new Bird(this)
        this.ball = new Ball(this.ctx)
        this.life = new Life(this.ctx, this.ball.life)

        var d = [[645, 395, 410, 800], [450, 495, 410, 700]]
        
        d.forEach((enemyBallData) => {
            this.enemies.push(new EnemyBall(this.ctx, enemyBallData[0], enemyBallData[1], "right", enemyBallData[2], enemyBallData[3]))
        })
        
        this.enemies.push(
            new EnemyBall(this.ctx, 645, 395, "right", 410, 800),
            new EnemyBall(this.ctx, 450, 495, "right", 410,700 ),
            new EnemyBall(this.ctx, 625, 295, "right", 410,675 ),
            new EnemyBall(this.ctx, 425, 845, "right", 410,790),
            new EnemyBall(this.ctx, 700, 945, "right", 410,790),
            new EnemyBall(this.ctx, 650, 995, "right", 610,790),
            new EnemyBall(this.ctx, 700, 1095, "right", 410,790),
            new EnemyBall(this.ctx, 715, 1445, "right", 705,795),
            new EnemyBall(this.ctx, 720, 1495, "right", 705,795),
            new EnemyBall(this.ctx, 725, 1545, "right", 705,795),
            new EnemyBall(this.ctx, 730, 1595, "right", 705,795),
            new EnemyBall(this.ctx, 425, 1545, "right", 405,695),
            new EnemyBall(this.ctx, 600, 1495, "right", 405,695))

        this.createBoard()
        this.soundbird = new Audio("img/sonidopajaros.mp3")
        this.soundbird2 = new Audio("./sonidos/pajaros.mp3")
        this.soundbird.play()
        if (this.playAgain) this.soundbird2.play()
        
        this.soundTouch = new Audio("./sonidos/caidacorta.mp3")
        this.soundDanger = new Audio("./sonidos/red-alert.mp3")
        this.heartTouch = new Audio("./sonidos/platillos.mp3")
       
       
        
        

        // this.ctx.scale(1.1,1.1)
        // this.ctx.translate(0, 150)
       

        
        this.score += 0.1

        this.interval = setInterval(function(){
           
        
        this.clear()
        this.drawAll();
        this.checkCollisionBall();
        this.checkCollisionEnemy();
        this.checkCollisionMoreLife();
        this.checkEggNest();
        //this.drawLife();
        this.moveAll();
        this.score += 0.1
        
        if ((this.ball.y+this.ball.r<=250)&&(this.ball.y+this.ball.r>=210)||
        (this.ball.y+this.ball.r<=300)&&(this.ball.y+this.ball.r>=260)||
        (this.ball.y+this.ball.r<=350)&&(this.ball.y+this.ball.r>=310)||
        (this.ball.y+this.ball.r<=400)&&(this.ball.y+this.ball.r>=360)||
        (this.ball.y+this.ball.r<=450)&&(this.ball.y+this.ball.r>=410)||
        (this.ball.y+this.ball.r<=500)&&(this.ball.y+this.ball.r>=460)||

        (this.ball.y+this.ball.r<=700)&&(this.ball.y+this.ball.r>=660)||
        (this.ball.y+this.ball.r<=750)&&(this.ball.y+this.ball.r>=710)||
        (this.ball.y+this.ball.r<=800)&&(this.ball.y+this.ball.r>=760)||
        (this.ball.y+this.ball.r<=850)&&(this.ball.y+this.ball.r>=810)||
        (this.ball.y+this.ball.r<=900)&&(this.ball.y+this.ball.r>=860)){
            this.soundTouch.play()
        }
        if (this.ball.y >200){
        this.life.h += 0.1;
        }

        if (this.life.h >= 0||this.ball.y>1800) {

            this.gameover()

        }

        }.bind(this), 1000/60);

    },

    

    setCanvasDimension: function() {
        this.canvas.width = window.innerWidth
        this.canvas.height = 3000
    },


    checkEggNest: function(){

        if((this.ball.y>550&&this.ball.y<650)&&((this.ball.x<(this.nest.x+this.nest.w+2))&&(this.ball.x>this.nest.x-2))){

            this.ball.collisionNest = true
            
            
        }


    },

    checkCollisionBall: function(){

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

    checkCollisionEnemy: function(){

        
        
        
        this.enemies.forEach((enemy)=>{
            
            if ((Math.abs(this.ball.x-enemy.x)<20)&&(Math.abs(this.ball.y-enemy.y)<20)) {
                
                this.ball.life-=1
                this.life.h += 1
                
                this.soundbird.play()
                
            }    
        
        })
    },

    checkCollisionMoreLife: function(){

        if (this.ball.collisionNest===true){

            this.ball.life-=2
            this.life.h -=2
            this.ball.collisionNest=false

        } else this.ball.collisionNest=false
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

            // laberinto 2
            new Wall(this, 400, 700, 100, 10),
            new Wall(this, 550, 700, 250, 10),

            new Wall(this, 450, 750, 250, 10),
            new Wall(this, 750, 750, 50, 10),

            new Wall(this, 400, 800, 110, 10),
            new Wall(this, 550, 800, 250, 10),

            new Wall(this, 450, 850, 200, 10),
            new Wall(this, 700, 850, 100, 10),

            new Wall(this, 400, 900, 100, 10),
            new Wall(this, 540, 900, 260, 10),

          
            new Wall(this, 450, 950, 250, 10),
            new Wall(this, 750, 950, 50, 10),

            new Wall(this, 400, 1000, 350, 10),

            new Wall(this, 450, 1050, 350, 10),

            new Wall(this, 400, 1100, 100, 10),
            new Wall(this, 550, 1100, 250, 10),

            new Wall(this, 450, 1150, 210, 10),
            new Wall(this, 700, 1150, 100, 10),

            new Wall(this, 400, 1200, 50, 10),
            new Wall(this, 550, 1200, 200, 10),

            // paredes verticales laberinto 2

            new Wall(this, 400, 700, 10, 500),
            new Wall(this, 500, 750, 10, 50),
            new Wall(this, 600, 850, 10, 50),
            new Wall(this, 600, 950, 10, 50),
            // new Wall(this, 450, 1100, 10, 50),
            // new Wall(this, 650, 1100, 10, 50),
            new Wall(this, 800, 700, 10, 500),

            new Wall(this,450,1400,300,10 ),
            new Wall(this, 400, 1450, 250, 10),
            new Wall(this, 450, 1500,250, 10 ),
            new Wall(this, 400, 1550, 250, 10),
            new Wall(this, 450, 1600, 250, 10),
            new Wall(this, 400, 1650, 300, 10),
            new Wall(this, 750, 1650, 50, 10),
            new Wall(this, 400, 1400, 10, 250),
            new Wall(this, 700, 1400, 10, 200),
            new Wall(this, 800, 1400, 10, 250),
            new Wall(this, 700, 1650, 10, 50),
            new Wall(this, 750, 1650, 10, 50),
            
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

        // this.life.draw();

        this.nest.draw()


        // this.bird.draw();

        // this.background.draw();
        // this.ball.draw(); 
        // this.drawScore();
        if (this.ball.y < 1200){

        
        this.life.draw();
        }
    },

    moveAll: function () {

    window.scrollTo(0, this.ball.y - 200)
    this.life.updateY(this.ball.y + 300)
    
    

    if (this.ball.y > 2500) {
        this.gameover()
    }
        
        this.enemies.forEach(function(enemy){

            enemy.move();

        })
        this.background.move();
       
        this.bird.move();
        
        if (this.bird.x === 540) {
            this.birdPosition = true;
        }
        if (this.birdPosition) {
            this.ball.move();
        }
        
        this.nest.move();
        // this.obstacles.forEach(function (obstacle) { obstacle.move(); });
    },

    gameover: function () {

        window.scrollTo(0,1)
        
        clearInterval(this.interval)
        this.ctx.clearRect(0, 0, this.canvas.width, 1800 )
        this.ctx.beginPath();
        this.ctx.fillStyle='#ccbba2'
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.closePath()

        this.ctx.font = "50px Arial";
        this.ctx.fillStyle = "black";
        this.ctx.fillText("GAME OVER", 324, 400);

        this.ctx.font = "30px Arial";
        this.ctx.fillStyle = "black";
        this.ctx.fillText("Score= "+Math.floor(this.score)+" ", 326, 450);

        this.ctx.font = "25px Arial";
        this.ctx.fillStyle = "black";
        this.ctx.fillText("Press I to Star", 326, 550);
        
        this.reset()
        this.letterI = true

        


    },

    reset: function (){
        this.enemies = []
        this.score = 0
        this.ball.life = 0
        this.birdPosition = false


    }
        



    
}