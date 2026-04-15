let canvas=document.getElementById("canvas");
let ctx=canvas.getContext("2d");

//quadrado
ctx.beginPath()
ctx.lineWidth=5;
ctx.fillStyle="red";
ctx.fillRect(10,10,50,50);
ctx.closePath()

//quadrado
ctx.beginPath()
ctx.lineWidth=5;
ctx.fillStyle="blue";
ctx.fillRect(850,10,50,50);
ctx.closePath()

//quadrado
ctx.beginPath()
ctx.lineWidth=5;
ctx.fillStyle="yellow";
ctx.fillRect(10,850,50,50);
ctx.closePath()

//quadrado
ctx.beginPath()
ctx.lineWidth=5;
ctx.fillStyle="green";
ctx.fillRect(900,900,50,50,);
ctx.closePath()
