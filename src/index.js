const { application } = require("express");

const express = require("express");

const { v4: uuidv4 } = require("uuid");

const api = express();

api.use(express.json());

const customers = [];

api.post("/account", (request, response) =>{
    const { cpf, name } = request.body;

    const customerAlreadyExis = customers.some(
        (customer)=> customer.cpf == cpf);

        if(customerAlreadyExis){
          return response.status(400).json({error: "Customer already exists!"})  
        }

   // const id = uuidv4();

    customers.push({
        cpf,
        name,
        id: uuidv4(),
        statement: []
    });

    return response.status(201).send();

} )

api.listen(3333);