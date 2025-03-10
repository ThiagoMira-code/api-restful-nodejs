# Minha API RESTful - Node.js + Express

Este é um projeto de API RESTful simples desenvolvido com **Node.js** e **Express**. A API permite realizar operações básicas de CRUD, como listar e criar usuários. Este projeto foi feito para ser um exemplo de aplicação backend que pode ser utilizado para integrar com frontends ou outros serviços.

## Tecnologias

- **Node.js**: JavaScript runtime.
- **Express**: Framework web para Node.js.
- **CORS**: Para permitir requisições de diferentes origens.
- **dotenv**: Para gerenciar variáveis de ambiente.

## Funcionalidades

A API oferece os seguintes endpoints:

- **GET /api/usuarios**: Retorna uma lista de usuários.
- **POST /api/usuarios**: Cria um novo usuário.

## Pré-requisitos

Certifique-se de ter o **Node.js** e o **npm** (gerenciador de pacotes do Node.js) instalados em sua máquina.

- [Node.js](https://nodejs.org/) - Instalar o Node.js.
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) - Instalado junto com o Node.js.

## Como rodar o projeto

### Passo 1: Clone o repositório

Clone o repositório para sua máquina local:

```bash
git clone https://github.com/seu-usuario/minha-api.git

Passo 2: Instale as dependências

Dentro da pasta do projeto, execute o comando abaixo para instalar as dependências:

npm install

Passo 3: Configure as variáveis de ambiente

Crie um arquivo .env na raiz do projeto e defina a porta do servidor:

PORT=3000

Passo 4: Rodando o servidor

Use o Nodemon para rodar o servidor em modo de desenvolvimento. No terminal, execute:

npm run dev

O servidor estará rodando em http://localhost:3000.
Testando a API

Você pode testar a API utilizando o Postman ou Insomnia. Os endpoints disponíveis são:
1. GET /api/usuarios

Retorna todos os usuários cadastrados.

    Exemplo de resposta:

[
  { "id": 1, "nome": "João" },
  { "id": 2, "nome": "Maria" }
]

2. POST /api/usuarios

Cria um novo usuário. Envie o seguinte corpo da requisição em formato JSON:

    Corpo da requisição:

{
  "id": 3,
  "nome": "Carlos"
}

    Exemplo de resposta:

{
  "id": 3,
  "nome": "Carlos"
}
