const {getData, postData} = require("../controllers/controllers");

async function rotaGet(app){
    app.get("/exibir", getData);
}

async function rotaPost(app){
    app.post("/inserir", postData);
}

module.exports = {
    rotaGet,
    rotaPost
}