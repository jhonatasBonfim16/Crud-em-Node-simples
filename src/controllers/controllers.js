const UserModel = require("../model/model");
const connectToDatabase = require("../database/database");

async function getData(req, res){
    try{
        connectToDatabase();
        const user = await UserModel.find({});
        res.status(200).json(user);
        console.log("Dado recuperado com sucesso.")
    }catch(erro){
        res.status(500).send(erro.message);
        console.log("Erro ao recuperar dados.", erro);
    }
}

async function postData(req, res){
    try{
        connectToDatabase();
        const user = await UserModel.create(req.body);
        res.status(201).json(user);
        console.log("Dado inserido com sucesso no banco de dados.");
    }catch(erro){
        res.status(500).send(erro.message);
        console.log("Erro ao inserir dados no banco de dados.", erro);
    }
}

async function putData(req, res){
    try{
        connectToDatabase();
        const id = UserModel.findById(req.params.id);
        const user = await UserModel.updateOne(id, req.body);
        res.status(201).json(user);
        console.log("Dado atualizado com sucesso no banco de dados.");
    }catch(erro){
        res.status(500).send(erro.message);
        console.log("Erro ao atualizar dados no banco de dados.", erro);
    }
}

async function deleteData(req, res){
    try{
        connectToDatabase();
        const id = UserModel.findById(req.params.id);
        const user = await UserModel.deleteOne(id);
        res.status(200).json(user);
    }catch(erro){
        res.status(500).send(erro.message);
        console.log("Erro ao remover dado no banco de dados.", erro);
    }
}

module.exports = {
    getData,
    postData,
    putData,
    deleteData
}
