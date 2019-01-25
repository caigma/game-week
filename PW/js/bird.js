function Bird (game) {
    this.game = game;
  
    
    this.bird = new Image();
    this.bird.src = './img/bird_Frame final.png'
  
    this.x =1010;
    this.y = 70;
    this.w = 200
    this.h = 100
    this.dx = 2;

    this.bird.frames = 4;
    this.bird.frameIndex = 0;
  }
  
 Bird.prototype.draw = function() {
      this.game.ctx.drawImage(
      this.bird, 
      this.bird.frameIndex * Math.floor(this.bird.width / this.bird.frames), 
      0,
      Math.floor(this.bird.width / this.bird.frames),
      this.bird.height,
      this.x,
      this.y,
      this.w,
      this.h
      
    );
    
    this.animateImg();
    }
  

  Bird.prototype.animateImg = function() {
    // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
    if (this.x % 14 === 0) {
      this.bird.frameIndex += 1;

      // Si el frame es el último, se vuelve al primero
      if (this.bird.frameIndex > this.bird.frames-1) this.bird.frameIndex = 0;
    }
    
  };
  
  Bird.prototype.move = function() {
    this.x -= this.dx;
    this.draw()

    
  };