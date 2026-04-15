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
ctx.lineWidth=2;
ctx.stroke();
ctx.closePath();

//linhas
ctx.beginPath()
ctx.strokeStyle="red";
ctx.moveTo(320,80);
ctx.lineTo(200,200);
ctx.fillStyle="red";
ctx.lineWidth=2;
ctx.stroke();
ctx.closePath();

//circulos
ctx.beginPath();
ctx.arc(200,150,20,0,2*Math.PI);
ctx.fillStyle="lightblue";
ctx.fill();
ctx.strokeStyle="blue";
ctx.lineWidth=2;
ctx.stroke();
ctx.closePath();

//circulos
ctx.beginPath();
ctx.arc(300,250,20,0,2*Math.PI);
ctx.fillStyle="yellow";
ctx.fill();
ctx.strokeStyle="green";
ctx.lineWidth=2;
ctx.stroke();
ctx.closePath();

//circulos
ctx.beginPath();
ctx.arc(100,250,20,0,2*Math.PI);
ctx.fillStyle="yellow";
ctx.fill();
ctx.strokeStyle="green";
ctx.lineWidth=2;
ctx.stroke();
ctx.closePath();

//linhas
ctx.beginPath()
ctx.strokeStyle="green";
ctx.moveTo(0,canvas.height/2);
ctx.lineTo(canvas.width,canvas.height/2);
ctx.fillStyle="green";
ctx.stroke();
ctx.closePath();

//quadrado
ctx.beginPath()
ctx.lineWidth=5;
ctx.fillStyle="red";
ctx.fillRect(150,200,50,50);
ctx.closePath()

//linhas
ctx.beginPath()
ctx.strokeStyle="black";
ctx.moveTo(200,200);
ctx.lineTo(200,canvas.height);
ctx.fillStyle="red";
ctx.lineWidth=2;
ctx.stroke();
ctx.closePath();

//circulos
ctx.beginPath();
ctx.arc(canvas.width/2,canvas.height/2,80,Math.PI,0);
ctx.strokeStyle="green";
ctx.lineWidth=1;
ctx.stroke();
ctx.closePath();

//circulos
ctx.beginPath();
ctx.arc(canvas.width/2,canvas.height,50,Math.PI,0);
ctx.fillStyle="lightblue";
ctx.fill();
ctx.strokeStyle="green";
ctx.lineWidth=1;
ctx.stroke();
ctx.closePath();

//circulos
ctx.beginPath();
ctx.arc(canvas.width/2,canvas.height,95,Math.PI,Math.PI*1.5);
ctx.strokeStyle="green";
ctx.lineWidth=1;
ctx.stroke();
ctx.closePath();

//circulos
ctx.beginPath();
ctx.arc(canvas.width/2,canvas.height,80,Math.PI*1.5,Math.PI);
ctx.strokeStyle="green";
ctx.lineWidth=1;
ctx.stroke();
ctx.closePath();

//circulos
ctx.beginPath();
ctx.arc(canvas.width/2,canvas.height-200,100,Math.PI*1.75,0);
ctx.strokeStyle="green";
ctx.lineWidth=1;
ctx.stroke();
ctx.closePath();

