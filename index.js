const express = require("express");
const dotenv = require("dotenv");
const {rotaGet, rotaPost, rotaPut, rotaDelete} = require("./src/routes/routes")

const port = 8080;

const app = express();
app.use(express.json());
dotenv.config();

rotaGet(app);
rotaPost(app);
rotaPut(app);
rotaDelete(app);

app.listen(port, () => console.log("Servidor ativo."));