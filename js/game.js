var Game = {

    canvas: undefined,
    ctx: undefined,
    fps: 60,
    scoreBoard: 1000,
    keys: {LEFT: 37, RIGHT: 39, DOWN_POWER: 40},
    background: undefined,
    board: undefined,

    
    start: function(canvaId) {

        this.canvas = document.getElementById(canvaId)
        this.ctx = this.canvas.getContext('2d')
        this.fps = 60
        this.background = new Background(this)
        this.board = new Board(this)
        this.ball = new Ball(this)

        this.interval = setInterval(function(){
        
        this.clear()

        this.score -= 0.01;

        this.drawAll();

        this.moveAll();

        }.bind(this), 1000/60);

    },
    
    clear: function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    drawAll: function(){
        
        this.board.draw(); 
        this.ball.draw();
        this.ball.updateConditions();
        this.background.draw();
        // this.ball.draw(); 
        // this.drawScore();
    },

    moveAll: function () {
        this.background.move();
        // this.obstacles.forEach(function (obstacle) { obstacle.move(); });
    },


}







// ----------------------------------------------------------------

// var w = 1000
// var h = 800
// var limitRight = 800
// var limitLeft = 0
// var limitUp = 100
// var limitDown = limitUp + 500

// var limitY0 = limitUp
// var limitY1 = limitUp + 100
// var limitY2 = limitUp + 200
// var limitY3 = limitUp + 300
// var limitY4 = limitUp + 400
// var limitY5 = limitDown

// var radiusBall = 25
// var xBall = 250
// var yBall = -50
// var limitXLeftBall = xBall - radiusBall - 5
// var limitXRightBall = xBall + radiusBall + 5
// var limitYball = yBall + radiusBall

// // ANCHO DEL HUECO
// var longHole = 80

// var huecoY0X1 = 110
// var huecoY0X2 = huecoY0X1 + longHole
// var huecoY0X3 = 610
// var huecoY0X4 = huecoY0X3 + longHole

// var huecoY1X1 = 10
// var huecoY1X2 = huecoY1X1 + longHole
// var huecoY1X3 = 310
// var huecoY1X4 = huecoY1X3 + longHole

// var huecoY2X1 = 510
// var huecoY2X2 = huecoY2X1 + longHole

// var huecoY3X1 = 110
// var huecoY3X2 = huecoY3X1 + longHole
// var huecoY3X3 = 710
// var huecoY3X4 = huecoY3X3 + longHole

// var huecoY4X1 = 210
// var huecoY4X2 = huecoY4X1 + longHole
// var huecoY4X3 = 710
// var huecoY4X4 = huecoY4X3 + longHole

// var huecoY5X1 = 110
// var huecoY5X2 = huecoY5X1 + longHole
// var huecoY5X3 = 410
// var huecoY5X4 = huecoY5X3 + longHole

// var wallN1X1 = 500
// var wallN2X1 = 250
// var wallN4X1 = 350
// var wallN5X1 = 650

// // var goDown = true
// // var goLeft = true
// // var goRight = true

// //we set an interval con control the animation
// setInterval(function () {
//     //please note that for every frame we have to clear out all the canvas. otherwise you see a trail!
//     ctx.clearRect(0, 0, w, h)

//     //dibujamos limiteslimites right y left
//     ctx.beginPath();
//     ctx.moveTo(0, limitUp-radiusBall);
//     ctx.lineTo(0, limitDown);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.moveTo(limitRight, limitUp-radiusBall);
//     ctx.lineTo(limitRight, limitDown);
//     ctx.stroke();

//     // dibujamos Y0 desde 0 a huecoY0X1
//     ctx.beginPath();
//     ctx.moveTo(limitLeft, limitY0);
//     ctx.lineTo(huecoY0X1, limitY0);
//     ctx.stroke();
    
//     // dibujamos recta huecoY0X2 hasta huecoY0X3
//     ctx.beginPath();
//     ctx.moveTo(huecoY0X2, limitY0);
//     ctx.lineTo(huecoY0X3, limitY0);
//     ctx.stroke();

//      // dibujamos recta huecoY0X4 hasta limitRight
//      ctx.beginPath();
//      ctx.moveTo(huecoY0X4, limitY0);
//      ctx.lineTo(limitRight, limitY0);
//      ctx.stroke();

//     // dijamos RECTA Y1
//     ctx.beginPath();
//     ctx.moveTo(limitLeft, limitY1);
//     ctx.lineTo(huecoY1X1, limitY1);
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.moveTo(huecoY1X2, limitY1);
//     ctx.lineTo(huecoY1X3, limitY1);
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.moveTo(huecoY1X4, limitY1);
//     ctx.lineTo(limitRight, limitY1);
//     ctx.stroke();

//      // dijamos RECTA Y2
//      ctx.beginPath();
//      ctx.moveTo(limitLeft, limitY2);
//      ctx.lineTo(huecoY2X1, limitY2);
//      ctx.stroke();

//      ctx.beginPath();
//      ctx.moveTo(huecoY2X2, limitY2);
//      ctx.lineTo(limitRight, limitY2);
//      ctx.stroke();

//      // dijamos RECTA Y3
//      ctx.beginPath();
//      ctx.moveTo(limitLeft, limitY3);
//      ctx.lineTo(huecoY3X1, limitY3);
//      ctx.stroke();

//      ctx.beginPath();
//      ctx.moveTo(huecoY3X2, limitY3);
//      ctx.lineTo(huecoY3X3, limitY3);
//      ctx.stroke();

//      ctx.beginPath();
//      ctx.moveTo(huecoY3X4, limitY3);
//      ctx.lineTo(limitRight, limitY3);
//      ctx.stroke();

//      // dijamos RECTA Y4
//      ctx.beginPath();
//      ctx.moveTo(limitLeft, limitY4);
//      ctx.lineTo(huecoY4X1, limitY4);
//      ctx.stroke();

//      ctx.beginPath();
//      ctx.moveTo(huecoY4X2, limitY4);
//      ctx.lineTo(huecoY4X3, limitY4);
//      ctx.stroke();

//      ctx.beginPath();
//      ctx.moveTo(huecoY4X4, limitY4);
//      ctx.lineTo(limitRight, limitY4);
//      ctx.stroke();

//      // dibujamos RECTA Y5
//      ctx.beginPath();
//      ctx.moveTo(limitLeft, limitY5);
//      ctx.lineTo(huecoY5X1, limitY5);
//      ctx.stroke();

//      ctx.beginPath();
//      ctx.moveTo(huecoY5X2, limitY5);
//      ctx.lineTo(huecoY5X3, limitY5);
//      ctx.stroke();

//      ctx.beginPath();
//      ctx.moveTo(huecoY5X4, limitY5);
//      ctx.lineTo(limitRight, limitY5);
//      ctx.stroke();

//     // wall en nivel y0-y1 nivel1 
//     ctx.beginPath();
//     ctx.moveTo(wallN1X1, limitY0);
//     ctx.lineTo(wallN1X1, limitY1);
//     ctx.stroke();

//     // wall en nivel y1-y2 - nivel2 
//     ctx.beginPath();
//     ctx.moveTo(wallN2X1, limitY1);
//     ctx.lineTo(wallN2X1, limitY2);
//     ctx.stroke();

//     // wall en nivel y2-y3 - nivel3

//     // wall en nivel y3-y4 - nivel4

//     ctx.beginPath();
//     ctx.moveTo(wallN4X1, limitY3);
//     ctx.lineTo(wallN4X1, limitY4);
//     ctx.stroke();

//     // wall en nivel y4-y5 - nivel5

//     ctx.beginPath();
//     ctx.moveTo(wallN5X1, limitY4);
//     ctx.lineTo(wallN5X1, limitY5);
//     ctx.stroke();


   
//     var condHolesY0 =   (limitXLeftBall>huecoY0X1&&limitXRightBall<huecoY0X2)||
//                             (limitXLeftBall>huecoY0X3&&limitXRightBall<huecoY0X4)
//     var condHolesY1 = (limitXLeftBall>huecoY1X1&&limitXRightBall<huecoY1X2)||
//                         (limitXLeftBall>huecoY1X3&&limitXRightBall<huecoY1X4)
//     var condHolesY2 = (limitXLeftBall>huecoY2X1&&limitXRightBall<huecoY2X2)
//     var condHolesY3 = (limitXLeftBall>huecoY3X1&&limitXRightBall<huecoY3X2)||
//                         (limitXLeftBall>huecoY3X3&&limitXRightBall<huecoY3X4)
//     var condHolesY4 = (limitXLeftBall>huecoY4X1&&limitXRightBall<huecoY4X2)||
//                         (limitXLeftBall>huecoY4X3&&limitXRightBall<huecoY4X4)
//     var condHolesY5 = (limitXLeftBall>huecoY5X1&&limitXRightBall<huecoY5X2)||
//                         (limitXLeftBall>huecoY5X3&&limitXRightBall<huecoY5X4)

//     var aboveY0 = (limitYball < limitY0)
//     var aboveY1 = (limitYball < limitY1)
//     var aboveY2 = (limitYball < limitY2)
//     var aboveY3 = (limitYball < limitY3)
//     var aboveY4 = (limitYball < limitY4)
//     var aboveY5 = (limitYball < limitY5)

    

//     var under_contactY0 = (limitYball >= limitY0)
//     var under_contactY1 = (limitYball >= limitY1)
//     var under_contactY2 = (limitYball >= limitY2)
//     var under_contactY3 = (limitYball >= limitY3)
//     var under_contactY4 = (limitYball >= limitY4)
//     var under_contactY5 = (limitYball >= limitY5)

    

//     var contactY0 = limitYball === limitY0
//     var contactY1 = limitYball === limitY1
//     var contactY2 = limitYball === limitY2
//     var contactY3 = limitYball === limitY3
//     var contactY4 = limitYball === limitY4
//     var contactY5 = limitYball === limitY5

//     var betweenY0Y1 =(limitYball>limitY0)&&(limitYball<limitY1)
//     var betweenY1Y2 = (limitYball>limitY1)&&(limitYball < limitY2)
//     var betweenY2Y3 = (limitYball>limitY2)&&(limitYball < limitY3)
//     var betweenY3Y4 = (limitYball>limitY3)&&(limitYball < limitY4)
//     var betweenY4Y5 = (limitYball>limitY4)&&(limitYball < limitY5)
    
    

//     // var notWallN1X1Right = ((wallN1X1<limitXLeftBall)||(wallN1X1>limitXRightBall))
//     // var notWallN2X1Right = ((wallN2X1<limitXLeftBall)||(wallN2X1>limitXRightBall))
//     // var notWallN4X1Right = ((wallN4X1<limitXLeftBall)||(wallN4X1>limitXRightBall))
//     // var notWallN5X1Right = ((wallN5X1<limitXLeftBall)||(wallN5X1>limitXRightBall))

//     // condiciones bola baja

//     if  ((aboveY0)||
//         (aboveY1&&condHolesY0)||
//         (under_contactY1&&aboveY2&&condHolesY1)||
//         (under_contactY2&&aboveY3&&condHolesY2)||
//         (under_contactY3&&aboveY4&&condHolesY3)||
//         (under_contactY4&&aboveY5&&condHolesY4)||
//         (under_contactY5&&condHolesY5))
        
//         {

//             ctx.beginPath();
//             ctx.arc(xBall, limitYball-radiusBall, radiusBall, 0, 2 * Math.PI);
//             ctx.stroke();
//             limitYball+=5
            
//     } 

    
//     else if (limitYball === limitY0) {
   
//     ctx.beginPath();
//     ctx.arc(xBall, limitY0-radiusBall, radiusBall, 0, 2 * Math.PI);
//     ctx.stroke();
//     } 

//     else if (limitYball === limitY1){
//     ctx.beginPath();
//     ctx.arc(xBall, limitY1-radiusBall, radiusBall, 0, 2 * Math.PI);
//     ctx.stroke();
//     }

//     else if (limitYball === limitY2){
//     ctx.beginPath();
//     ctx.arc(xBall, limitY2-radiusBall, radiusBall, 0, 2 * Math.PI);
//     ctx.stroke();

//     }

//     else if (limitYball === limitY3){
//         ctx.beginPath();
//         ctx.arc(xBall, limitY3-radiusBall, radiusBall, 0, 2 * Math.PI);
//         ctx.stroke();

//         }

//     else if (limitYball === limitY4){
//         ctx.beginPath();
//         ctx.arc(xBall, limitY4-radiusBall, radiusBall, 0, 2 * Math.PI);
//         ctx.stroke();

//     }

//     else if (limitYball === limitY5){
//         ctx.beginPath();
//         ctx.arc(xBall, limitY5-radiusBall, radiusBall, 0, 2 * Math.PI);
//         ctx.stroke();

//     }

// }, 100)


// document.onkeydown = function (e) {

//     var above_contactY0 = (limitYball <= limitY0)
//     var above_contactY1 = (limitYball <= limitY1)
//     var above_contactY2 = (limitYball <= limitY2)
//     var above_contactY3 = (limitYball <= limitY3)
//     var above_contactY4 = (limitYball <= limitY4)
//     var above_contactY5 = (limitYball <= limitY5)
//     var notTouchRight = limitRight>(limitXRightBall)
//     var notTouchLeft = limitLeft<(limitXLeftBall)
//     var notWallN1X1 = ((wallN1X1<limitXLeftBall)||(wallN1X1>limitXRightBall))
//     var notWallN2X1 = ((wallN2X1<limitXLeftBall)||(wallN2X1>limitXRightBall))
//     var notWallN4X1 = ((wallN4X1<limitXLeftBall)||(wallN4X1>limitXRightBall))
//     var notWallN5X1 = ((wallN5X1<limitXLeftBall)||(wallN5X1>limitXRightBall))
//     var onlyUnderY0 = (limitYball > limitY0)
//     var onlyUnderY1 = (limitYball > limitY1)
//     var onlyUnderY2 = (limitYball > limitY2)
//     var onlyUnderY3 = (limitYball > limitY3)
//     var onlyUnderY4 = (limitYball > limitY4)
//     var onlyUnderY5 = (limitYball > limitY5)

//     switch (e.keyCode) {
//         case 39:
//         // condicion right nivel0
//             if ((above_contactY0)&&(notTouchRight)){
//                     xBall+=10
//                     limitXRightBall+=10
//                     limitXLeftBall+=10
//                     console.log("estas en nivel0 yendo a right")
//                     console.log(limitXRightBall)
//                     break;
//         // condicion right nivel1        
//             } else if ((onlyUnderY0)&&(above_contactY1)&&(notTouchRight)&&((notWallN1X1)||(limitXRightBall>wallN1X1))) {
                
//                     xBall+=10
//                     limitXRightBall+=10
//                     limitXLeftBall+=10
//                     console.log("estas en nivel1 yendo a right")
//                     break;
//         // condicion right nivel2           
//             } else if ((onlyUnderY1)&&(above_contactY2)&&(notTouchRight)&&((notWallN2X1)||(limitXRightBall>wallN2X1))) {
                
//                 xBall+=10
//                 limitXRightBall+=10
//                 limitXLeftBall+=10
//                 console.log("estas en nivel2 yendo a right")
//                 console.log(limitXRightBall)
//                 break;
            

//             // condicion right nivel3  

//             } else if  ((onlyUnderY2)&&(above_contactY3)&&(notTouchLeft)) {
                    
//                 xBall+=10
//                 limitXRightBall+=10
//                 limitXLeftBall+=10
//                 console.log("estas en nivel3 yendo a right")
//                 console.log(limitXRightBall)
//                 break;

//             // condicion right nivel4  
//             } else if ((onlyUnderY3)&&(above_contactY4)&&(notTouchRight)&&((notWallN4X1)||(limitXRightBall>wallN4X1))){
                        
//                 xBall+=10
//                 limitXRightBall+=10
//                 limitXLeftBall+=10
//                 console.log("estas en nivel4 yendo a right")
//                 console.log(limitXRightBall)
//                 break;
            
//             // condicion right nivel5  
//             } else if ((onlyUnderY4)&&(above_contactY5)&&((notWallN5X1)||(limitXRightBall>wallN5X1))) {
                            
//                 xBall+=10
//                 limitXRightBall+=10
//                 limitXLeftBall+=10
//                 console.log("estas en nivel5 yendo a right")
//                 console.log(limitXRightBall)
//                 break;
//             }

//         case 37:

//         // condicion left nivel0
//             if ((above_contactY0)&&(notTouchLeft)) {
//                 xBall-=10
//                 limitXLeftBall-=10
//                 limitXRightBall-=10
//                 console.log("nivel 0 left")
//                 break;
//             // condicion left nivel1 
//             } else if ((onlyUnderY0)&&(above_contactY1)&&(notTouchLeft)&&((notWallN1X1)||(limitXLeftBall<wallN1X1))) {
//                 xBall-=10
//                 limitXLeftBall-=10
//                 limitXRightBall-=10
//                 console.log("nivel 1 left")            
//                 break;
//             // condicion left nivel2 
//             } else if ((onlyUnderY1)&&(above_contactY2)&&(notTouchLeft)&&((notWallN2X1)||(limitXLeftBall<wallN2X1))) {
//                 xBall-=10
//                 limitXLeftBall-=10
//                 limitXRightBall-=10
//                 console.log(onlyUnderY1)
//                 console.log(notWallN2X1)
//                 console.log(limitXLeftBall)
//                 console.log("nivel 2 left")
//                 break;
//             // condicion left nivel3 
//             } else if ((onlyUnderY2)&&(above_contactY3)&&(notTouchLeft)) {
//                 xBall-=10
//                 limitXLeftBall-=10
//                 limitXRightBall-=10
//                 console.log(limitLeft)
//                 console.log(limitXLeftBall)
//                 console.log("nivel 3 left")
//                 break;
//             // condicion left nivel4 
//             } else if ((onlyUnderY3)&&(above_contactY4)&&(notTouchLeft)&&((notWallN4X1)||(limitXLeftBall<wallN4X1))) {
//                 xBall-=10
//                 limitXLeftBall-=10
//                 limitXRightBall-=10
//                 console.log(limitLeft)
//                 console.log(limitXLeftBall)
//                 console.log("nivel 4 left")
//                 break;
//             // condicion left nivel5
//             } else if ((onlyUnderY4)&&(above_contactY5)&&(notTouchLeft)&&((notWallN5X1)||(limitXLeftBall<wallN5X1))) {
//                 xBall-=10
//                 limitXLeftBall-=10
//                 limitXRightBall-=10
//                 console.log(limitLeft)
//                 console.log(limitXLeftBall)
//                 console.log("nivel 5 left")
//                 break;

//     }

// }}