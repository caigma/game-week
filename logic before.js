
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
    var hueco1Y1X = 150
    var hueco1Y2X = hueco1Y1X + 60
    var hueco1Y3X = 500
    var hueco1Y4X = hueco1Y3X + 60
    

    var limit2Y = 200
    var hueco2Y1X = 50
    var hueco2Y2X = hueco2Y1X + 60
    var wall1N1 = 480

    var limit3Y = 300
    var hueco3Y1X = 250
    var hueco3Y2X = hueco3Y1X + 60
    var wall1N2 = 370


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
        
        // dibujamos recta dede hueco1YX2 hasta hueco1Y3X
        ctx.beginPath();
        ctx.moveTo(hueco1Y2X, limit1Y);
        ctx.lineTo(hueco1Y3X, limit1Y);
        ctx.stroke();

        
         // dibujamos recta dede hueco1Y4X hasta limitRight
         ctx.beginPath();
         ctx.moveTo(hueco1Y4X, limit1Y);
         ctx.lineTo(limitRight, limit1Y);
         ctx.stroke();

        // wall en nivel 1Y-2Y - nivel1 
        ctx.beginPath();
        ctx.moveTo(wall1N1, limit1Y);
        ctx.lineTo(wall1N1, limit2Y);
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

        // wall en nivel 2Y-23 - nivel2 
        ctx.beginPath();
        ctx.moveTo(wall1N2, limit2Y);
        ctx.lineTo(wall1N2, limit3Y);
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

        var condN1HolesDown =   (limitXLeftBall>hueco1Y1X&&limitXRightBall<hueco1Y2X)||
                                (limitXLeftBall>hueco1Y3X&&limitXRightBall<hueco1Y4X)
        var condN2HolesDown = (limitXLeftBall>hueco2Y1X&&limitXRightBall<hueco2Y2X)

        if ((limitYball < limit1Y)||
            ((limitYball<limit2Y)&&(condN1HolesDown))||
            (((limitYball>=limit2Y)&&(limitYball<limit3Y)&&(condN2HolesDown)))) {
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
            // condicion right nivel0
                if ((limitYball<=limit1Y)&&(limitRight>limitXRightBall)){
                        xBall+=10
                        limitXRightBall+=10
                        limitXLeftBall+=10
                        console.log("estas en nivel0 yendo a right")
                        console.log(limitXRightBall)
                        break;
            // condicion right nivel1        
                } else if ((limitYball<=limit2Y)&&(limitRight>limitXRightBall)) {
                    
                        xBall+=10
                        limitXRightBall+=10
                        limitXLeftBall+=10
                        console.log("estas en nivel1 yendo a right")
                        console.log(limitXRightBall)
                        break;
            // condicion right nivel2           
                } else if ((limitYball<=limit3Y)&&(limitRight>limitXRightBall)) {
                    
                    xBall+=10
                    limitXRightBall+=10
                    limitXLeftBall+=10
                    console.log("estas en nivel1 yendo a right")
                    console.log(limitXRightBall)
                    break;
                }

            case 37:
            // condicion left nivel0
            if ((limitYball<=limit1Y)&&(limitLeft<limitXLeftBall)){
                xBall-=10
                limitXLeftBall-=10
                limitXRightBall-=10
                console.log("nivel 0 left")
                break;
            // condicion right nivel1 
            } else if ((limit1Y<limitYball)&&(limitYball<=limit2Y)&&(limitLeft<limitXLeftBall)&&((wall1N1<limitXLeftBall)||(wall1N1>limitXRightBall))) {
                xBall-=10
                limitXLeftBall-=10
                limitXRightBall-=10
                console.log("nivel 1 left")
                break;
            // condicion right nivel2 
            } else if ((limit2Y<limitYball)&&(limitYball<=limit3Y)&&(limitLeft<limitXLeftBall)&&((wall1N1<limitXLeftBall)||(wall1N2>limitXRightBall))) {
                xBall-=10
                limitXLeftBall-=10
                limitXRightBall-=10
                console.log(limitLeft)
                console.log(limitXLeftBall)
                console.log("nivel 2 left")
                break;
            }
    }}