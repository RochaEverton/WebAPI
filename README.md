# 📚 Web API com Node.js - Projeto de Estudos

Este projeto é uma API RESTful simples desenvolvida com **Node.js** como parte dos meus estudos em desenvolvimento backend. O objetivo é aprender e praticar conceitos fundamentais como:

- Estrutura de uma Web API
- Rotas e controladores
- Middleware
- CRUD com dados em memória/banco de dados
- Boas práticas de organização de código

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Nodemon](https://github.com/remy/nodemon) (para desenvolvimento)
- [Cors](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## ⚙️ Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/nome-do-projeto.git

# Acesse a pasta do projeto
cd nome-do-projeto

# Instale as dependências
npm install


▶️ Executando o Projeto

# Para rodar em modo de desenvolvimento (com nodemon)
npm run dev

# Ou para rodar normalmente
node start

A API estará disponível em: http://localhost:3000 (ou porta definida no .env)
📌 Funcionalidades

    GET /users → Lista todos os usuários

    GET /user/:id → Retorna um usuário específico

    POST /user → Cria um novo usuário

    PUT /user/:id → Atualiza um usuário existente

    DELETE /user/:id → Remove um usuário

    

📁 Estrutura do Projeto:

├── index.js
├── routes/
│   └── items.js
├── controllers/
│   └── itemsController.js
├── models/
│   └── item.js
├── .env
└── README.md

📖 Objetivos de Aprendizado

    Entender como funciona o ciclo de requisição/resposta HTTP

    Praticar criação de rotas e uso de middlewares no Express

    Aplicar separação de responsabilidades (controller, routes, model)

    Aprender a usar variáveis de ambiente

    Simular integração com banco de dados


