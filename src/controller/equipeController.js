const equipe = require("../model/equipe.json");
const fs = require("fs");

const getColaboradoras = (req, res) => {
    console.log(req.url);
    res.status(200).send(equipe);
};

const getPessoaById = (req, res) => {
    const id = req.params.id;

    res.status(200).send(equipe.find((pessoa) => pessoa.id == id));
};

const postColaboradora = (req, res) => {
    const { id, nome, dataNascimento } = req.body;

    equipe.push({ id, nome, dataNascimento});

    fs.writeFile("./src/model/equipe.json", JSON.stringify(equipe), 'utf8', function(err) {
        if(err) {
          return res.status(424).send({ message: err }); 
        } 
        console.log("Arquivo atualizado com sucesso!");
      });
      res.status(201).send(equipe);
    
};



module.exports = { 
    getColaboradoras,
    getPessoaById,
    postColaboradora
 }