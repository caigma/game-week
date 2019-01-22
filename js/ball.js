function Ball(game) {
    this.game = game;
  
    this.radiusBall = 25
    this.xBall = 250
    this.yBall = -50
    this.limitXLeftBall = this.xBall - this.radiusBall - 5
    this.limitXRightBall = this.xBall + this.radiusBall + 5
    this.limitYball = this.yBall + this.radiusBall
    this.velX = 10
    this.velY = 5
    this.gravity = 0.10
    
    this.move()
    

}
Ball.prototype.updateConditions = function(){

    console.log(this.limitYball, this.game.board.limitY0)
    // variables de condición - donde está la bola
    this.condHolesY0 =   (this.limitXLeftBall>this.game.board.huecoY0X1&&this.limitXRightBall<this.game.board.huecoY0X2)||
                            (this.limitXLeftBall>this.game.board.huecoY0X3&&this.limitXRightBall<this.game.board.huecoY0X4)
    this.condHolesY1 = (this.limitXLeftBall>this.game.board.huecoY1X1&&this.limitXRightBall<this.game.board.huecoY1X2)||
                        (this.limitXLeftBall>this.game.board.huecoY1X3&&this.limitXRightBall<this.game.board.huecoY1X4)
    this.condHolesY2 = (this.limitXLeftBall>this.game.board.huecoY2X1&&this.limitXRightBall<this.game.board.huecoY2X2)
    this.condHolesY3 = (this.limitXLeftBall>this.game.board.huecoY3X1&&this.limitXRightBall<this.game.board.huecoY3X2)||
                        (this.limitXLeftBall>this.game.board.huecoY3X3&&this.limitXRightBall<this.game.board.huecoY3X4)
    this.condHolesY4 = (this.limitXLeftBall>this.game.board.huecoY4X1&&this.limitXRightBall<this.game.board.huecoY4X2)||
                        (this.limitXLeftBall>this.game.board.huecoY4X3&&this.limitXRightBall<this.game.board.huecoY4X4)
    this.condHolesY5 = (this.limitXLeftBall>this.game.board.huecoY5X1&&this.limitXRightBall<this.game.board.huecoY5X2)||
                        (this.limitXLeftBall>this.game.board.huecoY5X3&&this.limitXRightBall<this.game.board.huecoY5X4)

    this.aboveY0 = (this.limitYball < this.game.board.limitY0)
    this.aboveY1 = (this.limitYball < this.game.board.limitY1)
    this.aboveY2 = (this.limitYball < this.game.board.limitY2)
    this.aboveY3 = (this.limitYball < this.game.board.limitY3)
    this.aboveY4 = (this.limitYball < this.game.board.limitY4)
    this.aboveY5 = (this.limitYball < this.game.board.limitY5)

    this.under_contactY0 = (this.limitYball >= this.game.board.limitY0)
    this.under_contactY1 = (this.limitYball >= this.game.board.limitY1)
    this.under_contactY2 = (this.limitYball >= this.game.board.limitY2)
    this.under_contactY3 = (this.limitYball >= this.game.board.limitY3)
    this.under_contactY4 = (this.limitYball >= this.game.board.limitY4)
    this.under_contactY5 = (this.limitYball >= this.game.board.limitY5)

    this.underY5 = (this.limitYball > this.game.board.limitY5)
    this.betweenY0Y1 =(this.limitYball>this.game.board.limitY0)&&(this.limitYball<this.game.board.limitY1)
    this.betweenY1Y2 = (this.limitYball>this.game.board.limitY1)&&(this.limitYball < this.game.board.limitY2)
    this.betweenY2Y3 = (this.limitYball>this.game.board.limitY2)&&(this.limitYball < this.game.board.limitY3)
    this.betweenY3Y4 = (this.limitYball>this.game.board.limitY3)&&(this.limitYball < this.game.board.limitY4)
    this.betweenY4Y5 = (this.limitYball>this.game.board.limitY4)&&(this.limitYball < this.game.board.limitY5)

    // variables de condición left-right
    this.above_contactY0 = (this.limitYball <= this.game.board.limitY0)
    this.above_contactY1 = (this.limitYball <= this.game.board.limitY1)
    this.above_contactY2 = (this.limitYball <= this.game.board.limitY2)
    this.above_contactY3 = (this.limitYball <= this.game.board.limitY3)
    this.above_contactY4 = (this.limitYball <= this.game.board.limitY4)
    this.above_contactY5 = (this.limitYball <= this.game.board.limitY5)
    this.notTouchRight = this.game.board.limitRight>this.limitXRightBall
    this.notTouchLeft = this.game.board.limitLeft<this.limitXLeftBall
    this.notWallN1X1 = ((this.game.board.wallN1X1<this.limitXLeftBall)||(this.game.board.wallN1X1>this.limitXRightBall))
    this.notWallN2X1 = ((this.game.board.wallN2X1<this.limitXLeftBall)||(this.game.board.wallN2X1>this.limitXRightBall))
    this.notWallN4X1 = ((this.game.board.wallN4X1<this.limitXLeftBall)||(this.game.board.wallN4X1>this.limitXRightBall))
    this.notWallN5X1 = ((this.game.board.wallN5X1<this.limitXLeftBall)||(this.game.board.wallN5X1>this.limitXRightBall))
    this.onlyUnderY0 = (this.limitYball > this.game.board.limitY0)
    this.onlyUnderY1 = (this.limitYball > this.game.board.limitY1)
    this.onlyUnderY2 = (this.limitYball > this.game.board.limitY2)
    this.onlyUnderY3 = (this.limitYball > this.game.board.limitY3)
    this.onlyUnderY4 = (this.limitYball > this.game.board.limitY4)
    this.onlyUnderY5 = (this.limitYball > this.game.board.limitY5)
    this.power = false
}


Ball.prototype.draw = function() {
    
    this.game.ctx.beginPath();
    this.game.ctx.arc(this.xBall, this.yBall, this.radiusBall, 0, 2 * Math.PI);
    this.game.ctx.stroke();

    if  (((this.aboveY0)||
    (this.aboveY1&&this.condHolesY0)||
    (this.under_contactY1&&this.aboveY2&&this.condHolesY1)||
    (this.under_contactY2&&this.aboveY3&&this.condHolesY2)||
    (this.under_contactY3&&this.aboveY4&&this.condHolesY3)||
    (this.under_contactY4&&this.aboveY5&&this.condHolesY4)||
    (this.under_contactY5&&this.condHolesY5))||
    (this.betweenY0Y1)||(this.betweenY1Y2)||(this.betweenY2Y3)||(this.betweenY3Y4)||(this.betweenY4Y5)||(this.onlyUnderY5))
    
    {
        
        this.yBall+=this.velY
        this.limitYball = this.yBall + this.radiusBall
    } 

    else if (this.limitYball === this.game.board.limitY0) {
        this.yBall = this.limitYball -this.radiusBall
        
    } 

    else if (this.limitYball === this.game.board.limitY1){
        this.yBall = this.limitYball -this.radiusBall
    }

    else if (this.limitYball === this.game.board.limitY2){
        this.yBall = this.limitYball -this.radiusBall

    }

    else if (this.limitYball === this.game.board.limitY3){
        this.yBall = this.limitYball -this.radiusBall

    }

    else if (this.limitYball === this.game.board.limitY4){
        this.yBall = this.limitYball -this.radiusBall

    }

    else if (this.limitYball === this.game.board.limitY5){
        this.yBall = this.limitYball -this.radiusBall

    }

}

Ball.prototype.move = function() {
    
    document.onkeydown = function (e) {

        switch (e.keyCode) {

                case 39:
                console.log(this.above_contactY0,this.notTouchRight)
                    // condicion right nivel0
                if ((this.above_contactY0)&&(this.notTouchRight)){
                        this.xBall+=this.velX
                        this.limitXRightBall+=this.velX
                        this.limitXLeftBall+=this.velX
                        
                        break;
                    // condicion right nivel1        
                } else if ((this.onlyUnderY0)&&(this.above_contactY1)&&(this.notTouchRight)&&((this.notWallN1X1)||(this.limitXRightBall>this.game.board.wallN1X1))) {
                    
                        this.xBall+=this.velX
                        this.limitXRightBall+=this.velX
                        this.limitXLeftBall+=this.velX
                        
                        break;
                    // condicion right nivel2           
                } else if ((this.onlyUnderY1)&&(this.above_contactY2)&&(this.notTouchRight)&&((this.notWallN2X1)||(this.limitXRightBall>this.game.board.wallN2X1))) {
                    
                        this.xBall+=this.velX
                        this.limitXRightBall+=this.velX
                        this.limitXLeftBall+=this.velX
                        
                    break;
                

                     // condicion right nivel3  

                } else if  ((this.onlyUnderY2)&&(this.above_contactY3)&&(this.notTouchLeft)) {
                        
                        this.xBall+=this.velX
                        this.limitXRightBall+=this.velX
                        this.limitXLeftBall+=this.velX

                        break;

                // condicion right nivel4  
                } else if ((this.onlyUnderY3)&&(this.above_contactY4)&&(this.notTouchRight)&&((this.notWallN4X1)||(this.limitXRightBall>this.game.board.wallN4X1))){
                            
                        this.xBall+=this.velX
                        this.limitXRightBall+=this.velX
                        this.limitXLeftBall+=this.velX

                        break;
                
                // condicion right nivel5  
                } else if ((this.onlyUnderY4)&&(this.above_contactY5)&&(this.notTouchRight)&&((this.notWallN5X1)||(this.limitXRightBall>this.game.board.wallN5X1))) {
                                
                        this.xBall+=this.velX
                        this.limitXRightBall+=this.velX
                        this.limitXLeftBall+=this.velX
                        
                        break;
                // condicion right nivel salida de laberinto  
                } else if (this.onlyUnderY5) {
                                
                    this.xBall+=this.velX
                    this.limitXRightBall+=this.velX
                    this.limitXLeftBall+=this.velX
                    
                    break;
            }


                case 37:

                // condicion left nivel0
                if ((this.above_contactY0)&&(this.notTouchLeft)) {
                    this.xBall-=this.velX
                    this.limitXLeftBall-=this.velX
                    this.limitXRightBall-=this.velX
                  
                    break;

                // condicion left nivel1 
                } else if ((this.onlyUnderY0)&&(this.above_contactY1)&&(this.notTouchLeft)&&((this.notWallN1X1)||(this.limitXLeftBall<this.game.board.wallN1X1))) {
                    this.xBall-=this.velX
                    this.limitXLeftBall-=this.velX
                    this.limitXRightBall-=this.velX
                              
                    break;

                // condicion left nivel2 
                } else if ((this.onlyUnderY1)&&(this.above_contactY2)&&(this.notTouchLeft)&&((this.notWallN2X1)||(this.limitXLeftBall<this.game.board.wallN2X1))) {
                    this.xBall-=this.velX
                    this.limitXLeftBall-=this.velX
                    this.limitXRightBall-=this.velX
                   
                    break;

                // condicion left nivel3 
                } else if ((this.onlyUnderY2)&&(this.above_contactY3)&&(this.notTouchLeft)) {
                    this.xBall-=this.velX
                    this.limitXLeftBall-=this.velX
                    this.limitXRightBall-=this.velX
                    
                    break;
                // condicion left nivel4 
                } else if ((this.onlyUnderY3)&&(this.above_contactY4)&&(this.notTouchLeft)&&((this.notWallN4X1)||(this.limitXLeftBall<this.game.board.wallN4X1))) {
                    this.xBall-=this.velX
                    this.limitXLeftBall-=this.velX
                    this.limitXRightBall-=this.velX
                    
                    break;
                // condicion left nivel5
                } else if ((this.onlyUnderY4)&&(this.above_contactY5)&&(this.notTouchLeft)&&((this.notWallN5X1)||(this.limitXLeftBall<this.game.board.wallN5X1))) {
                    this.xBall-=this.velX
                    this.limitXLeftBall-=this.velX
                    this.limitXRightBall-=this.velX
                    
                    break;

                } else if (this.onlyUnderY5) {
                                
                    this.xBall-=this.velX
                    this.limitXLeftBall-=this.velX
                    this.limitXRightBall-=this.velX
                    
                    break;
                }
                
                // case 40:
                
                
                
                // if (this.yBall<=this.game.board.limitY0) {
                //     this.power = true}
                //     if(this.yBall>this.game.board.limitY0){
                //     this.power = false}
                // if (this.yBall<=this.game.board.limitY1) {
                //     this.power = true}
                //     if(this.yBall>this.game.board.limitY1){
                //     this.power = false}
                // if (this.yBall<=this.game.board.limitY2) {
                //     this.power = true}
                //     if(this.yBall>this.game.board.limitY2){
                //     this.power = false}
                // if (this.yBall<=this.game.board.limitY3) {
                //     this.power = true}
                //     if(this.yBall>this.game.board.limitY3){
                //     this.power = false}
                // if (this.yBall<=this.game.board.limitY4) {
                //     this.power = true}
                //     if(this.yBall>this.game.board.limitY4){
                //     this.power = false}
                // if (this.yBall<=this.game.board.limitY5) {
                //     this.power = true}
                //     if(this.yBall>this.game.board.limitY5){
                //     this.power = false}
                        
                //     break;
                
        }
    }.bind(this)
}