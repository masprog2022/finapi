const { application } = require("express");
const express = require("express");
const { v4: uuidv4 } = require("uuid");

const api = express();

api.use(express.json());

const customers = [];

api.post("/account", (request, response) =>{
    const { cpf, name } = request.body;
    const id = uuidv4();

    customers.push({
        cpf,
        name,
        id,
        statement: []
    });

    return response.status(201).send();

} )

api.listen(3333);