
    var canvasDOM = document.getElementById("canvasLab")
    var ctx = canvasDOM.getContext('2d')

    var limitRight = 700
    var limitLeft = 0
    var limitDown = 800
    var limitUp = 100
    var posY = 0
    var w = 1000
    var h = 800
    var radiusBall = 25
    var xBall = 250
    var yBall = -50
    var limitXLeftBall = xBall - radiusBall
    var limitXRightBall = xBall + radiusBall
    var limitYball = yBall + radiusBall
    var limit1Y = limitUp
    var hueco1X = 500
    var hueco2X = 560
    var limit2Y = 200

    //we set an interval con control the animation
    setInterval(function () {
        //please note that for every frame we have to clear out all the canvas. otherwise you see a trail!
        ctx.clearRect(0, 0, w, h)

        // dibujamos recta de x= a x=500, con y=limit1Y
        ctx.beginPath();
        ctx.moveTo(limitLeft, limit1Y);
        ctx.lineTo(hueco1X, limit1Y);
        ctx.stroke();
        

        ctx.beginPath();
        ctx.moveTo(0, -radiusBall);
        ctx.lineTo(0, limitDown);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(limitRight, -radiusBall);
        ctx.lineTo(limitRight, limitDown);
        ctx.stroke();


        // dibujamos recta de x=570 a x=700, y =limit1Y
        ctx.beginPath();
        ctx.moveTo(hueco2X, limit1Y);
        ctx.lineTo(limitRight, limit1Y);
        ctx.stroke();

        if ((limitYball < limit1Y)||(limitXLeftBall>hueco1X&&limitXRightBall<hueco2X)) {
        ctx.beginPath();
        ctx.arc(xBall, limitYball-radiusBall, radiusBall, 0, 2 * Math.PI);
        ctx.stroke();
        limitYball+=5
        console.log(limitYball)
        
        } else {
       
        ctx.beginPath();
        ctx.arc(xBall, limit1Y-radiusBall, radiusBall, 0, 2 * Math.PI);
        ctx.stroke();
        }
        
        // ctx.fillStyle = '#ff0000'
        // //this variable posX controls the X position, which can be changed from the switch/case statement
        // ctx.fillRect(200 + posX, 200, 100, 100)


    }, 100)


    document.onkeydown = function (e) {
        //please reactivate this line should you want to see all the keycodes as you pressed keys
        //console.log(e.keyCode)

        switch (e.keyCode) {
            case 39:
                if (limitRight>limitXRightBall){
                    xBall+=10
                    limitXRightBall+=10
                    limitXLeftBall+=10
                    console.log(limitRight)
                    console.log(limitXRightBall)
                    
                    break;
                } else break

            case 37:

            if (limitLeft<limitXLeftBall) {
                xBall-=10
                limitXLeftBall-=10
                limitXRightBall-=10
                console.log(limitLeft)
                console.log(limitXLeftBall)
                console.log("you have pressed left cursor")
                break;
                } else break;
            }
        }