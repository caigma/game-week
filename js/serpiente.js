function Nest (game) {
    this.game = game;
  
    this.nest = new Image();
    this.nest.src = './img/morelifeHeart.png'

    this.nestGood = new Image();
    this.nestGood.src = './img/goodHeart.png'



    this.x =450;
    this.y = 600
    this.w = 60
    this.h = 50
  
    this.dx = 0.6;
    this.sense = 1
  }
  
  Nest.prototype.draw = function() {
    
    if (this.game.ball.collisionNest===false&&this.game.ball.y<550)  {
      this.game.ctx.drawImage(this.nest, this.x, this.y, this.w, this.h);

    }  else if (this.game.ball.collisionNest&&this.game.ball.y>550){

      this.game.ctx.drawImage(this.nestGood, this.x, this.y, this.w, this.h)
      
    }
    
  };

  Nest.prototype.move = function() {
    
    this.x += this.dx*this.sense
    if (this.x > 550){
    this.sense = -this.sense
    }
    else if(this.x<440) {
      this.sense = -this.sense
    }
    

    
  };
  
  