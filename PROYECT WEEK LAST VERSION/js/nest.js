function Nest (game) {
    this.game = game;
  
    
    this.nest = new Image();
    this.nest.src = './img/nidovaciopruebas.png'

    this.nestWithEgss = new Image();
    this.nestWithEgss.src = './img/nidodragones.png'
  
    this.x =450;
    this.y = 650
    this.w = 50
    this.h = 50
  
    this.dx = 0.6;
    this.sense = 1
  }
  
  Nest.prototype.draw = function() {
    if (this.game.ball.collisionNest===false)  {
      this.game.ctx.drawImage(this.nest, this.x, this.y, this.w, this.h);
    }   
    else this.game.ctx.drawImage(this.nestWithEgss, this.x, this.y, this.w, this.h);
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
  
  