function Board(game) {
    this.game = game;
  
    this.x = 0;
    this.y = 0;
  
    this.limitRight = 800
    this.limitLeft = 0
    this.limitUp = 100
    this.limitDown = this.limitUp + 500

    this.limitY0 = this.limitUp
    this.limitY1 = this.limitUp + 100
    this.limitY2 = this.limitUp + 200
    this.limitY3 = this.limitUp + 300
    this.limitY4 = this.limitUp + 400
    this.limitY5 = this.limitDown

    this.longHole = 80
    this.huecoY0X1 = 110
    this.huecoY0X2 = this.huecoY0X1 + this.longHole
    this.huecoY0X3 = 610
    this.huecoY0X4 = this.huecoY0X3 + this.longHole

    this.huecoY1X1 = 10
    this.huecoY1X2 = this.huecoY1X1 + this.longHole
    this.huecoY1X3 = 310
    this.huecoY1X4 = this.huecoY1X3 + this.longHole

    this.huecoY2X1 = 510
    this.huecoY2X2 = this.huecoY2X1 + this.longHole
    
    this.huecoY3X1 = 110
    this.huecoY3X2 = this.huecoY3X1 + this.longHole
    this.huecoY3X3 = 710
    this.huecoY3X4 = this.huecoY3X3 + this.longHole

    this.huecoY4X1 = 210
    this.huecoY4X2 = this.huecoY4X1 + this.longHole
    this.huecoY4X3 = 710
    this.huecoY4X4 = this.huecoY4X3 + this.longHole
    
    this.huecoY5X1 = 110
    this.huecoY5X2 = this.huecoY5X1 + this.longHole
    this.huecoY5X3 = 410
    this.huecoY5X4 = this.huecoY5X3 + this.longHole

    this.wallN1X1 = 500
    this.wallN2X1 = 250
    this.wallN4X1 = 350
    this.wallN5X1 = 650

  }
  
  Board.prototype.draw = function() {

     //dibujamos limiteslimites right y left
     this.game.ctx.beginPath();
     this.game.ctx.moveTo(0, this.limitUp);
     this.game.ctx.lineTo(0, this.limitDown);
     this.game.ctx.lineWidth = 10
     this.game.ctx.strokeStyle = '#57553b';
     this.game.ctx.stroke();
     this.game.ctx.beginPath();
     this.game.ctx.moveTo(this.limitRight, this.limitUp);
     this.game.ctx.lineTo(this.limitRight, this.limitDown)
     this.game.ctx.lineWidth = 10;
     this.game.ctx.strokeStyle = '#57553b'
     this.game. ctx.stroke();

    // dibujamos Y0 desde 0 a huecoY0X1
    this.game.ctx.beginPath();
    this.game.ctx.moveTo(this.limitLeft, this.limitY0);
    this.game.ctx.lineTo(this.huecoY0X1, this.limitY0);
    this.game.ctx.stroke();
    
    // dibujamos recta huecoY0X2 hasta huecoY0X3
    this.game.ctx.beginPath();
    this.game.ctx.moveTo(this.huecoY0X2, this.limitY0);
    this.game.ctx.lineTo(this.huecoY0X3, this.limitY0);
    this.game.ctx.stroke();

     // dibujamos recta huecoY0X4 hasta limitRight
     this.game. ctx.beginPath();
     this.game.ctx.moveTo(this.huecoY0X4, this.limitY0);
     this.game.ctx.lineTo(this.limitRight, this.limitY0);
     this.game.ctx.stroke();

    // dijamos RECTA Y1
    this.game.ctx.beginPath();
    this.game.ctx.moveTo(this.limitLeft, this.limitY1);
    this.game.ctx.lineTo(this.huecoY1X1, this.limitY1);
    this.game.ctx.stroke();

    this.game.ctx.beginPath();
    this.game.ctx.moveTo(this.huecoY1X2, this.limitY1);
    this.game.ctx.lineTo(this.huecoY1X3, this.limitY1);
    this.game.ctx.stroke();

    this.game.ctx.beginPath();
    this.game.ctx.moveTo(this.huecoY1X4, this.limitY1);
    this.game.ctx.lineTo(this.limitRight, this.limitY1);
    this.game.ctx.stroke();

     // dijamos RECTA Y2
     this.game.ctx.beginPath();
     this.game.ctx.moveTo(this.limitLeft, this.limitY2);
     this.game.ctx.lineTo(this.huecoY2X1, this.limitY2);
     this.game.ctx.stroke();

     this.game.ctx.beginPath();
     this.game.ctx.moveTo(this.huecoY2X2, this.limitY2);
     this.game.ctx.lineTo(this.limitRight, this.limitY2);
     this.game.ctx.stroke();

     // dijamos RECTA Y3
     this.game.ctx.beginPath();
     this.game.ctx.moveTo(this.limitLeft, this.limitY3);
     this.game.ctx.lineTo(this.huecoY3X1, this.limitY3);
     this.game.ctx.stroke();

     this.game.ctx.beginPath();
     this.game.ctx.moveTo(this.huecoY3X2, this.limitY3);
     this.game.ctx.lineTo(this.huecoY3X3, this.limitY3);
     this.game.ctx.stroke();

     this.game.ctx.beginPath();
     this.game.ctx.moveTo(this.huecoY3X4, this.limitY3);
     this.game.ctx.lineTo(this.limitRight, this.limitY3);
     this.game.ctx.stroke();

     // dijamos RECTA Y4
     this.game.ctx.beginPath();
     this.game.ctx.moveTo(this.limitLeft, this.limitY4);
     this.game.ctx.lineTo(this.huecoY4X1, this.limitY4);
     this.game.ctx.stroke();

     this.game.ctx.beginPath();
     this.game.ctx.moveTo(this.huecoY4X2, this.limitY4);
     this.game.ctx.lineTo(this.huecoY4X3, this.limitY4);
     this.game.ctx.stroke();

     this.game.ctx.beginPath();
     this.game.ctx.moveTo(this.huecoY4X4, this.limitY4);
     this.game.ctx.lineTo(this.limitRight, this.limitY4);
     this.game.ctx.stroke();

     // dibujamos RECTA Y5
     this.game.ctx.beginPath();
     this.game.ctx.moveTo(this.limitLeft, this.limitY5);
     this.game.ctx.lineTo(this.huecoY5X1, this.limitY5);
     this.game.ctx.stroke();

     this.game.ctx.beginPath();
     this.game.ctx.moveTo(this.huecoY5X2, this.limitY5);
     this.game.ctx.lineTo(this.huecoY5X3, this.limitY5);
     this.game.ctx.stroke();

     this.game.ctx.beginPath();
     this.game.ctx.moveTo(this.huecoY5X4, this.limitY5);
     this.game.ctx.lineTo(this.limitRight, this.limitY5);
     this.game.ctx.stroke();

    // wall en nivel y0-y1 nivel1 
    this.game.ctx.beginPath();
    this.game.ctx.moveTo(this.wallN1X1, this.limitY0);
    this.game.ctx.lineTo(this.wallN1X1, this.limitY1);
    this.game.ctx.stroke();

    // wall en nivel y1-y2 - nivel2 
    this.game.ctx.beginPath();
    this.game.ctx.moveTo(this.wallN2X1, this.limitY1);
    this.game.ctx.lineTo(this.wallN2X1, this.limitY2);
    this.game.ctx.stroke();

    // wall en nivel y2-y3 - nivel3

    // wall en nivel y3-y4 - nivel4
    this.game.ctx.beginPath();
    this.game.ctx.moveTo(this.wallN4X1, this.limitY3);
    this.game.ctx.lineTo(this.wallN4X1, this.limitY4);
    this.game.ctx.stroke();

    // wall en nivel y4-y5 - nivel5
    this.game.ctx.beginPath();
    this.game.ctx.moveTo(this.wallN5X1, this.limitY4);
    this.game.ctx.lineTo(this.wallN5X1, this.limitY5);
    this.game.ctx.stroke();

  };


    
             
    
    
   