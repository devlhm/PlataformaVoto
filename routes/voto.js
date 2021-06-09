const router = require("express").Router();
const { Propostas } = require("../models");

router.get('/positivo', (req, res) => {
    const postId = req.query.postId;
    Propostas.increment('score', {
        where: {
            id: postId
        }
    }).then(res.sendStatus(200))
    .catch(err => res.send(err))
})

router.get('/negativo', (req, res) => {
    const postId = req.query.postId;
    Propostas.decrement('score', {
        where: {
            id: postId
        }
    }).then(res.sendStatus(200))
    .catch(err => res.send(err))
})

module.exports = router;