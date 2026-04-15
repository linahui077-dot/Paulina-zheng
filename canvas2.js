let canvas2=document.getElementById("canvas2");
let ctx=canvas2.getContext("2d");

//quadrado
ctx.beginPath()
ctx.lineWidth=5;
ctx.fillStyle="grey";
ctx.fillRect(0,300,400,400);
ctx.closePath()

//circulos
ctx.beginPath();
ctx.arc(300,100,50,0,2*Math.PI);
ctx.fillStyle="yellow";
ctx.fill();
ctx.strokeStyle="yellow";
ctx.lineWidth=2;
ctx.stroke();
ctx.closePath();

//quadrado
ctx.beginPath()
ctx.lineWidth=5;
ctx.fillStyle="brown";
ctx.fillRect(30,300,50,50);
ctx.closePath()
