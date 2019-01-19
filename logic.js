
    var canvasDOM = document.getElementById("canvasLab")
    var ctx = canvasDOM.getContext('2d')

    var w = 1000
    var h = 800
    var limitRight = 700
    var limitLeft = 0
    var limitDown = 800
    var limitUp = 100
    var radiusBall = 25
    var xBall = 250
    var yBall = -50
    var limitXLeftBall = xBall - radiusBall
    var limitXRightBall = xBall + radiusBall
    var limitYball = yBall + radiusBall
    
    var limit1Y = limitUp
    var hueco1Y1X = 500
    var hueco1Y2X = hueco1Y1X + 60

    var limit2Y = 200
    var hueco2Y1X = 50
    var hueco2Y2X = hueco2Y1X + 60

    var limit3Y = 300
    var hueco3Y1X = 250
    var hueco3Y2X = hueco3Y1X + 60


    //we set an interval con control the animation
    setInterval(function () {
        //please note that for every frame we have to clear out all the canvas. otherwise you see a trail!
        ctx.clearRect(0, 0, w, h)

        //dibujamos limiteslimites right y left
        ctx.beginPath();
        ctx.moveTo(0, limit1Y-radiusBall);
        ctx.lineTo(0, limitDown);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(limitRight, limit1Y-radiusBall);
        ctx.lineTo(limitRight, limitDown);
        ctx.stroke();

        // dibujamos nivel 1Y desde 0 a hueco1Y1X
        ctx.beginPath();
        ctx.moveTo(limitLeft, limit1Y);
        ctx.lineTo(hueco1Y1X, limit1Y);
        ctx.stroke();
        
        // dibujamos recta dede hueco1YX2 hasta limit1Y
        ctx.beginPath();
        ctx.moveTo(hueco1Y2X, limit1Y);
        ctx.lineTo(limitRight, limit1Y);
        ctx.stroke();

        // dijamos nivel Y2
        ctx.beginPath();
        ctx.moveTo(limitLeft, limit2Y);
        ctx.lineTo(hueco2Y1X, limit2Y);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(hueco2Y2X, limit2Y);
        ctx.lineTo(limitRight, limit2Y);
        ctx.stroke();

        // dijamos nivel Y3
        ctx.beginPath();
        ctx.moveTo(limitLeft, limit3Y);
        ctx.lineTo(hueco3Y1X, limit3Y);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(hueco3Y2X, limit3Y);
        ctx.lineTo(limitRight, limit3Y);
        ctx.stroke();



        if ((limitYball < limit1Y)||
            ((limitYball<limit2Y)&&(limitXLeftBall>hueco1Y1X&&limitXRightBall<hueco1Y2X))||
            ((limitYball<limit3Y)&&(limitXLeftBall>hueco2Y1X&&limitXRightBall<hueco2Y2X))) {
        ctx.beginPath();
        ctx.arc(xBall, limitYball-radiusBall, radiusBall, 0, 2 * Math.PI);
        ctx.stroke();
        limitYball+=5
        console.log(limitYball)
        
        } else if (limitYball === limit1Y) {
       
        ctx.beginPath();
        ctx.arc(xBall, limit1Y-radiusBall, radiusBall, 0, 2 * Math.PI);
        ctx.stroke();

        } else if (limitYball === limit2Y){
            ctx.beginPath();
            ctx.arc(xBall, limit2Y-radiusBall, radiusBall, 0, 2 * Math.PI);
            ctx.stroke();

        } else {
            ctx.beginPath();
            ctx.arc(xBall, limit3Y-radiusBall, radiusBall, 0, 2 * Math.PI);
            ctx.stroke();


        }


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