function Wall(game, x, y, w, h) {
    
    this.game = game;
    
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  
    

  }
  
  Wall.prototype.draw = function() {

      this.game.ctx.fillStyle='#000'
      this.game.ctx.fillRect(this.x,this.y,this.w,this.h)
     
    
  };


    
             
    
    
   