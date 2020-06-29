const express = require("express")
const server = express()
server.use(express.static("public"))
server.get("/", function(req, res){
    return res.sendFile(__dirname + "/index.html")
})
server.get("/telaAgradecimetno", function(req, res){
    return res.sendFile(__dirname + "/telaAgradecimetno.html")
})
server.get("/telaCadastro", function(req, res){
    return res.sendFile(__dirname + "/telaCadastro.html")
})
server.get("/Confirmacao", function(req, res){
    return res.sendFile(__dirname + "/Confirmacao.html")
})
server.listen(3000)