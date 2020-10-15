const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send({
        nome: "Sistema de Compartilhamento de Livros",
        dataDeCriacao: "26/09/2020"
    })
})

module.exports = router