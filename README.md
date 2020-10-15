# reprogramaSemana7

# atividadeSemana7 :books: :green_book:
//
### :memo: Briefing 

A partir de pelo menos três dos dez arquivos .json desenvolvidos na semana 6 estruturar
servidores locais utilizando a arquitetura MVC adaptada apresentada em aula bem como a
função **express** que facilita a criação de servidores.  

### :notebook: É possível encontrar nesse repositório: 

- [x] 3 servidores diferentes e funcionais; 
- [x] A arquitetura MVC adaptada, sem a pasta de view; 


const equipe = require('../model/equipe.json');
const fs = require("fs");

const getTodaEquipe = (req, res) => {
    console.log(req.url);
    res.send(200).send(equipe);
};

const getPessoaById = (req, res) => {
    const id = req.params.id;

    res.status(200).send(equipe.find((pessoa) => pessoa.id == id))
}

const postPessoa = (req, res) => {
    const { id, nome, sobrenome, aniversario, primeiroDiaDeClubeDoLivro, signoSol, signoAscendente, status} = req.body;

    equipe.push({ id, nome, sobrenome, aniversario, primeiroDiaDeClubeDoLivro, signoSol, signoAscendente, status })

    fs.writeFile("./src/model/equipe.json", JSON.stringify(equipe), 'utf8', function(err){ 
        if(err){
            return res.status(424).send({ message: err });
        }
        console.log("Arquivo atualizado com sucesso!");
    });
    res.status(201).send(equipe);
};

const deletePessoa = (req, res) => {
    const id = req.params.id;
    try{
    const pessoaASerDeletada = equipe.find((pessoaASerDeletada) => pessoaASerDeletada.id == id);

    const index = equipe.indexOf(pessoaASerDeletada);

    equipe.splice(index, 1);

    fs.writeFile("./src/model/equipe.json", JSON.stringify(equipe), "utf8", function(err) {
        if (err) {
            return res.status(424).send({ message: err });
        }
        console.log("Equipe atualizada com sucesso!");
    })
    res.status(200).send(equipe);
} catch(err) {
    return res.status(424).send({ message: "erro ao deletar o registro da tarefa" })
}}


module.exports = {
    getTodaEquipe, 
    getPessoaById,
    postPessoa,
    deletePessoa
}