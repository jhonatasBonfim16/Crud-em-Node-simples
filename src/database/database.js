const mongoose = require("mongoose");

async function connectToDatabase(){
    try{
        await mongoose.connect(process.env.API_URL);
        console.log("Conectado ao banco de dados com sucesso.");
    }catch(erro){
        console.log("Erro ao conectar ao banco de dados.", erro);
    }
}

module.exports = connectToDatabase;