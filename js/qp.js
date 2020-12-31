window.onload = function () {
	var canvas = document.createElement('canvas');
	canvas.id = "canvas";
	canvas.width = 2300;
	canvas.height = 667;
	canvas.style.zIndex = -1;
	canvas.style.position = "absolute";
	document.body.appendChild(canvas);
	
    if(canvas .getContext){
      var ctx = canvas .getContext("2d")

      var arr = []

      setInterval(function () {

        ctx.clearRect(0,0,canvas.width,canvas.height)
        for (var i = 0; i < arr.length; i++) {
          if (arr[i].y <= 50){
            arr.splice(i,1)
          }
          arr[i].deg+=5
          arr[i].x = arr[i].startX + Math.sin(arr[i].deg*Math.PI/180)*arr[i].step*2 ;
          arr[i].y = arr[i].startY - ( arr[i].deg*Math.PI/180 )*arr[i].step;

        }

        for(var i=0;i<arr.length;i++){
          /*  console.log(i)*/
          ctx.save()
          ctx.fillStyle = "rgba("+arr[i].red+","+arr[i].green+","+arr[i].blue+","+arr[i].alp+")"
          ctx.beginPath()
          ctx.arc(arr[i].x,arr[i].y,arr[i].r,0,2*Math.PI)
          ctx.fill()
          ctx.restore()
        }
      },1000/60)
      setInterval(function () {
        var r = Math.random()*6+2
        var x = Math.random()*canvas.width
        var y = canvas.height - r
        var red = Math.round(Math.random()*255)
        var green = Math.round(Math.random()*255)
        var blue = Math.round(Math.random()*255)
        var alp = 1

        var deg = 0
        var startX = x
        var startY = y
        var step = Math.random()*20+10

        arr.push({
          x:x,
          y:y,
          r:r,
          red:red,
          green:green,
          blue:blue,
          alp:alp,
          deg:deg,
          startX:startX,
          startY:startY,
          step:step
        })
      },50)



    }
  }