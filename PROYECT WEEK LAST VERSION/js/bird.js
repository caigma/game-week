function Bird (game) {
    this.game = game;
  
    
    this.bird = new Image();
    this.bird.src = './img/nubes2.jpg'
  
    this.x =1100;
    this.y = 100;
    this.w = 50
    this.h = 50
  
    this.dx = 2;
  }
  
 Bird.prototype.draw = function() {
    this.game.ctx.drawImage(this.bird, this.x, this.y, this.w, this.h);
    
  };
  
  Bird.prototype.move = function() {
    this.x -= this.dx;
    this.draw()

    
  };