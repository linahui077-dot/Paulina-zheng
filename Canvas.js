let canvas=document.getElementById("canvas");
let ctx=canvas.getContext("2d");

//quadrado
ctx.beginPath()
ctx.lineWidth=5;
ctx.fillStyle="blue";
ctx.fillRect(0,0,80,80);
ctx.closePath()

//quadrado
ctx.beginPath()
ctx.lineWidth=5;
ctx.fillStyle="red";
ctx.fillRect(320,0,80,80);
ctx.closePath()


//quadrado
ctx.beginPath()
ctx.lineWidth=5;
ctx.fillStyle="black";
ctx.fillRect(350,350,50,50);
ctx.closePath()

//quadrado
ctx.beginPath()
ctx.lineWidth=5;
ctx.fillStyle="black";
ctx.fillRect(350,300,50,50);
ctx.closePath()

//quadrado
ctx.beginPath()
ctx.lineWidth=5;
ctx.fillStyle="black";
ctx.fillRect(300,350,50,50);
ctx.closePath()

//quadrado
ctx.beginPath()
ctx.lineWidth=5;
ctx.fillStyle="yellow";
ctx.fillRect(0,350,50,50);
ctx.closePath()

//quadrado
ctx.beginPath()
ctx.lineWidth=5;
ctx.fillStyle="yellow";
ctx.fillRect(0,300,50,50);
ctx.closePath()

//quadrado
ctx.beginPath()
ctx.lineWidth=5;
ctx.fillStyle="yellow";
ctx.fillRect(50,350,50,50);
ctx.closePath()

//quadrado
ctx.beginPath()
ctx.lineWidth=5;
ctx.fillStyle="lightblue";
ctx.fillRect(0,200,50,50);
ctx.closePath()

//quadrado
ctx.beginPath()
ctx.lineWidth=5;
ctx.fillStyle="lightblue";
ctx.fillRect(0,150,50,50);
ctx.closePath()

//quadrado
ctx.beginPath()
ctx.lineWidth=5;
ctx.fillStyle="lightblue";
ctx.fillRect(350,175,50,50);
ctx.closePath()

//linhas
ctx.beginPath()
ctx.strokeStyle="blue";
ctx.moveTo(0,0);
ctx.lineTo(200,200);
ctx.fillStyle="blue";
ctx.stroke();
ctx.closePath();

//linhas
ctx.beginPath()
ctx.strokeStyle="red";
ctx.moveTo(320,80);
ctx.lineTo(200,200);
ctx.fillStyle="red";
ctx.stroke();
ctx.closePath();

