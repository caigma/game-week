function Ball(ctx) {
    this.ctx = ctx;
    this.x = 600;
    this.y  = 140;
    this.r = 15;
    this.vx = 15
    this.vy = 0.6
    this.gravity = 0.02
    this.stopDown = false
    this.colisionLeft = false
    this.colisionRight = false
    this.move()
    this.setListeners();
    this.collisionNest = false
    this.life = 250
    
}

Ball.prototype.draw = function () {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    this.ctx.lineWidth = 1;
    this.ctx.fillStyle = "#EDFFCE"
    this.ctx.fill();
    this.ctx.strokeStyle = 'white';
    this.ctx.stroke();
}

Ball.prototype.move = function () {
    if (!this.stopDown) {
        this.colisionRight = false
        this.colisionLeft = false
        this.vy+=this.gravity
        this.y +=this.vy;
        this.draw();
    }
    this.draw()
}

Ball.prototype.setListeners = function() {

    document.onkeydown = function(event) {
        
        // to rigth
            if (event.keyCode === 39) {
                this.colisionLeft = false     
                if (!this.colisionRight) {
                    this.x+=this.vx
                }
            }
        // to left
            else if (event.keyCode == 37) {
                this.colisionRight = false
                if (!this.colisionLeft) {
                    this.x-=this.vx
                }  
            } 
        }.bind(this);
               

}
