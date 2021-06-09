const router = require("express").Router();
const { Propostas } = require("../models");

router.get('/listar', (req, res) => {
    const { page } = req.query;
    const limit = 5;
    const offset = page ? page * limit : 0;    

    Propostas.findAndCountAll({limit, offset})
    .then(result => {
            const totalPages = Math.ceil(result.count / limit)
            res.send({rows: result.rows, totalPages});
        })
        .catch(err => console.log(err));
})

router.get('/publicar', (req, res) => {
    const { titulo, conteudo, autor } = req.query;

    Propostas.create({titulo, conteudo, autor})
    .then(res.sendStatus(200))
    .catch(err => console.log(err));
})

module.exports = router;