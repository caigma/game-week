function Life (ctx, h) {
    
    this.ctx = ctx;
    
    this.x = 325
    this.y = 500
    this.w = 20;
    this.h = -h
    
    

  }


  Life.prototype.updateY = function (y) {
      this.y = y
  }

  Life.prototype.getY = function () {
      //call to g analitycs
      return this.y
  }
  
  Life.prototype.draw = function() {
    
    

    this.ctx.font = "10px Arial";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("LIFE", 324, this.y - 280);
    var check = Math.abs(this.h)

    if (check > 167){
    
        this.ctx.beginPath();
        this.ctx.fillStyle='green'
        this.ctx.fillRect(this.x,this.y ,this.w,this.h)
        this.ctx.closePath()

    }
    
    if (check > 84 && check <= 167) {
        
        this.ctx.beginPath();
        this.ctx.fillStyle='yellow'
        this.ctx.fillRect(this.x,this.y,this.w,this.h)
        this.ctx.closePath()

    }
    
    if (check <= 84) {
        this.ctx.beginPath();
        //#EDFFCE
        this.ctx.fillStyle='red'
        this.ctx.fillRect(this.x,this.y,this.w,this.h)
        this.ctx.closePath()
    }

    
    

  };


    
             
    
    
   