function Background(game) {
    this.game = game;
  
    this.img = new Image();
    this.img.src = './img/nubes nira.png'

    this.imgInit = new Image();
    this.imgInit.src = './img/egg travesy3.jpg';

  
    this.x = 0;
    this.y = -100;
  
    this.dx = 0.8;
  }
  
  Background.prototype.draw = function() {
    this.game.ctx.drawImage(this.img, this.x, this.y, this.game.canvas.width, this.game.canvas.height);
    this.game.ctx.drawImage(this.img, this.x + this.game.canvas.width, this.y, this.game.canvas.width, this.game.canvas.height);
    
  };

  Background.prototype.drawInit = function() {
    this.imgInit.onload=function(){

      this.game.ctx.drawImage(this.imgInit, 0, 0, 1470, 900);

    }.bind(this)
    
  }


  Background.prototype.move = function() {
    this.x -= this.dx;
  
    if (this.x < -this.game.canvas.width) this.x = 0;

    this.draw();
    this.game.life.draw();
  };

