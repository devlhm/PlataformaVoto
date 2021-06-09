const db = require("./models");
const express = require("express");
const app = express();

const mysql = require("mysql2");

app.get('/', (req, res) => {
	res.send("Bem-vindo!");
})
app.use("/propostas", require("./routes/propostas"));
app.use("/voto", require("./routes/voto"));

const PORT = process.env.PORT || 3000;

db.sequelize.sync().then((req) => {
	app.listen(PORT, () => {
		console.log("Estou online no port " + PORT);
	});
});
