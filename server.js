const mongoose=require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/carros");

const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(express.static("public"));

let carros = [

    {
        marca: "Toyota",
        modelo: "Corolla",
        ano: 2020,
        quantidade: 10,
        imagem:"Toyota.jpg"
    },

    {
        marca: "Honda",
        modelo: "Civic",
        ano: 2022,
        quantidade: 10,
        imagem:"Honda.webp"
    },

    {
        marca: "BMW",
        modelo: "X5",
        ano: 2023,
        quantidade: 5,
        imagem:"BMW.webp"

    }

];

let usuarios = [];

app.get("/", function(req, res){

    res.render("index");

});

app.get("/login", function(req, res){

    res.render("login");

});

app.get("/cadastro", function(req, res){

    res.render("cadastro");

});

app.get("/carros", function(req, res){

    res.render("carros", { carros });

});

app.get("/deletar/:index", function(req,res){

    carros.splice(req.params.index,1);

    res.redirect("/carros");

});

app.get("/vender/:index", function(req,res){

    if(carros[req.params.index].quantidade > 0){

        carros[req.params.index].quantidade--;

    }

    res.redirect("/carros");

});

app.post("/cadastro", function(req, res){

    let novoUsuario = {

        nome: req.body.nome,

        login: req.body.login,

        senha: req.body.senha

    };

    usuarios.push(novoUsuario);

    res.redirect("/login");

});

app.post("/login", function(req, res){

    let login = req.body.login;

    let senha = req.body.senha;

    let encontrou = false;

    usuarios.forEach(function(usuario){

        if(usuario.login == login && usuario.senha == senha){

            encontrou = true;

        }

    });

    if(encontrou){

        res.redirect("/carros");

    }

    else{

        res.send("Login incorreto");

    }

});

app.post("/adicionar", function(req, res){

    let novoCarro = {

        marca: req.body.marca,

        modelo: req.body.modelo,

        ano: req.body.ano,

        quantidade: Number(req.body.quantidade)

    };

    carros.push(novoCarro);

    res.redirect("/carros");

});

app.listen(80, function(){

    console.log("Servidor rodando");

});