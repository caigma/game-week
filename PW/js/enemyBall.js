function EnemyBall(ctx, x, y, direction, minLeft, maxRight) {
    this.ctx = ctx;
    this.x = x;
    this.y  = y;
    this.dx = 0.6
    this.r = 5;
    this.vx = 1
    this.vy = 1
    this.gravity = 0
    this.stopDown = false
    this.colisionLeft = false
    this.colisionRight = false
    this.direction = direction
    this.minLeft = minLeft
    this.maxRigth = maxRight
    this.move()
    
   
}

EnemyBall.prototype.draw = function () {

    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    this.ctx.lineWidth = 1;
    this.ctx.fillStyle = "red"
    this.ctx.fill();
    this.ctx.strokeStyle = 'red';
    this.ctx.stroke();
    this.ctx.closePath();
}

EnemyBall.prototype.move = function () {
    
    if (this.direction ==="right"){
        if(this.x >= (this.maxRigth-10)) {
            this.direction="left"
        } else if (this.x > this.minLeft || this.x < this.maxRigth)
            this.x += 1.5
        } else {
         if (this.x <= (this.minLeft+10)) {
             this.direction="right"
         } else if (this.x > this.minLeft || this.x < this.maxRigth) {
             this.x -= 1.5
         }
    }

    // if (this.vertical ==="up"){
    //     if(this.y === 250) {
    //         this.direction="down"
    //     } else if (this.y > 350 || this.y < 250)
    //         this.y += 1
    //     } else {
    //      if (this.y === 350) {
    //          this.direction="up"
    //      } else if (this.y > 350 || this.y < 250) {
    //          this.x -= 1
    //      }
    // }


    this.draw()

}



