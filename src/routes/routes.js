const {getData, postData, putData, deleteData} = require("../controllers/controllers");

async function rotaGet(app){
    app.get("/exibir", getData);
}

async function rotaPost(app){
    app.post("/inserir", postData);
}

async function rotaPut(app){
    app.put("/atualizar/:id", putData);
}

async function rotaDelete(app){
    app.delete("/deletar/:id", deleteData);
}


module.exports = {
    rotaGet,
    rotaPost,
    rotaPut,
    rotaDelete
}