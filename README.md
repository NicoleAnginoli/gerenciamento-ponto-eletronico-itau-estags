# Gerenciamento Ponto Eletrônico

### GET /api/funcionarios
Lista todos os funcionários cadastrados no sistema
```json
{
        "id": 1,
        "nome": "Nicole",
        "cpf": 12345,
        "email": "teste@gmail.com",
        "datacadastro": "2020-03-18T18:43:43.000+0000"
    },
    {
        "id": 2,
        "nome": "Joao",
        "cpf": 11111,
        "email": "jo@gmail.com",
        "datacadastro": "2020-03-18T18:45:46.000+0000"
    },
    {
        "id": 3,
        "nome": "Robert",
        "cpf": 1222222,
        "email": "lalala@gmail.com",
        "datacadastro": "2020-03-18T18:46:07.000+0000"
    },
```
<br/>

### GET /api/funcionarios/{id}
Exibe as informações de um usuário a patir do id

Ex: /api/funcionarios/10

```json
{
    "id": 10,
    "nome": "giovanna",
    "cpf": 1100111,
    "email": "teste@gmail.com",
    "datacadastro": "2020-03-19T22:19:28.000+0000"
}
```
<br/>

### POST /api/funcionarios/inserir
Cadastra um novo funcionário (id e data de cadastro são gerados automaticamente)

**Request Body**
```json
{
    "nome": "Luana",
    "cpf": 1234111111,
    "email": "email@email.com"
}
```

**Response Body**
 ```json
{
    "id": 12,
    "nome": "Luana",
    "cpf": 1234111111,
    "email": "email@email.com",
    "datacadastro": "2020-03-19T22:33:45.000+0000"
}
```
<br/>

### PUT /api/funcionarios/update/11
Atualiza o cadastro de um funcionário a partir de seu id (os campos id e data de cadastro não são editáveis)

 ```json
{
    "nome": "Luana Silva",
    "cpf": 1234111111,
    "email": "novoemail@gmail.com",
}
```
<br/>

### GET /api/ponto/
Lista todas as batidas de ponto do sistema

```json
{
        "id": 7,
        "idfunc": 1,
        "datahora": "2020-03-19T15:36:58",
        "tipobatida": "saída"
    },
    {
        "id": 8,
        "idfunc": 4,
        "datahora": "2020-03-19T15:37:02",
        "tipobatida": "entrada"
    }
```
<br/>

### POST /api/ponto/inserir
Registra a batida de ponto de um funcionário

```json
{
	"idfunc": 10,
	"tipobatida": "saída"
}
```


