document.getEElementById("id").innerHTML = "Fagner Pimentel";

let nome = prompt("digite seu nome:");
let idade = prompt("digite sua idade:");
let ano = 2026;

let nasc = ano-idade;

document.getElementById("resp_ex1").innerHTML = "Ola " + nome + ", seu ano de nascimento eh: " + nasc;

function mensagem(){
    alert("ola");
}

function mensagem(){
    alert(texto);
}

mensagem("ola");
mensagem();
mensagem_2("FAgner");
mensagem_2("pimentel");

function soma(a,b){return a+b;}
function subt(a,b){return a-b;}
function muly(a,b){return a*b;}
function divi(a,b){return a/b;}

resp=soma(5,56);
document.getElementById("soma").innerHTML = resp;

function exemplo2(){
    let x =document.getElementById("input exemplo 2").value;

    for(let i = 0; i < x;i++){
        console.log(x+i);
    }

    document.getElementById("resp+ex2"),innerHTML = x;
}

function exemplo4(){
    let a =document.getElementById("in_1_ex4").value;
    let b =document.getElementById("in_2_ex4").value;

    let resp = 0;
    if(a<0 || b<0){
        resp = soma (a,b);
    }else{
            resp=mult(a,b);
    }
    }
