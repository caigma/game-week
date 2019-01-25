function Life (ctx, h) {
    
    this.ctx = ctx;
    
    this.x = 325
    this.y = 500
    this.w = 20;
    this.h = -h
    
    

  }
  
  Life.prototype.draw = function() {
    
    
    this.ctx.font = "10px Arial";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("LIFE", 324, 512);

    if (this.h > -80){
    
        this.ctx.beginPath();
        this.ctx.fillStyle='#EDFFCE'
        this.ctx.fillRect(this.x,this.y,this.w,this.h)
        
        
        this.ctx.closePath()

    } else if (this.h > -40 || this.h < -80) {
       
        this.ctx.beginPath();
        this.ctx.fillStyle='#EDFFCE'
        this.ctx.fillRect(this.x,this.y,this.w,this.h)
        
        
        this.ctx.closePath()

    } else if (this.h > 0 || this.h <= -40) {
        this.ctx.beginPath();
        this.ctx.fillStyle='#EDFFCE'
        this.ctx.fillRect(this.x,this.y,this.w,this.h)
       
       
        this.ctx.closePath()
    }
   
    this.ctx.font = "10px Arial";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("LIFE", 324, 962);
    this.ctx.beginPath();
    this.ctx.fillStyle='#EDFFCE'
    this.ctx.fillRect(this.x,950,this.w,this.h)
    this.ctx.closePath()
    

  };


    
             
    
    
   