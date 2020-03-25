# Gerenciamento Ponto Eletrônico

## Como rodar o projeto

- Api: na pasta do projeto rode o comando *mvn spring-boot:run*

- App: na pasta app/ do projeto rode o comando *npm install* e depois *npm start*


## Endpoints API 

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

### PUT /api/funcionarios/update/{id}
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

### GET /api/ponto/{id}
Lista todas as batidas de ponto de um usuário a partir de seu id 

```json
[
    {
        "id": 4,
        "idfunc": 4,
        "datahora": "2020-03-19T15:36:44",
        "tipobatida": "entrada"
    },
    {
        "id": 8,
        "idfunc": 4,
        "datahora": "2020-03-19T15:37:02",
        "tipobatida": "saída"
    },
    {
        "id": 11,
        "idfunc": 4,
        "datahora": "2020-03-19T15:38:10",
        "tipobatida": "entrada"
    },
    {
        "id": 12,
        "idfunc": 4,
        "datahora": "2020-03-19T16:29:04",
        "tipobatida": "saída"
    }
]
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


