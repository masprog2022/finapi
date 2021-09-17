## finapi - Finanças


### Requisitos

- Deve ser possivel criar uma conta
- Deve ser possivel buscar extracto bancario de cliente
- Deve ser possivel realizar um deposito
- Deve ser possivel realizar um saque
- Deve ser possivel buscar o extrato bancario do cliente por data
- Deve ser possivel actualizar dados da conta do cliente
- Deve ser posssivel obter dados da conta do cliente
- Dever ser possivel deletar uma conta 

### Regra de Negocio

- Nao deve ser possivel cadastrar uma conta com CPF ja existente
- Nao deve ser possivel fazer deposito em uma conta nao existente
- Nao deve ser possivel buscar extracto em uma conta nao existente
- Nao deve ser possivel fazer saque em uma conta nao existente
- Nao deve ser possivel excluir uma conta nao existente
- Nao deve ser possivel fazer saque quando o saldo for insuficiente
