# Task Manager 📚

Este projeto é foi desenvolvido para uma atividade da meteria do professor Eliel

## Aluno
 - Enzo D Andrey Lavieri Yarid | 22308404-2

## 🚀 Tecnologias Utilizadas
- NestJS
- MongoDB 

## 📦 Pré-requisitos

- Node.js (^22.10)
- npm
- MongoDB (instalado localmente)

## ⚙️ Instalação e Execução

### 1. Clonar o repositório

```bash
https://github.com/EnzoLavieri/TaskManagerNestJS.git
```

### 2. Instale as dependências com o comando a baixo
```bash
npm install
```

### 4. Iniciar a API
```bash
npm run start:dev
```

# 📘 Rotas
###  `http://localhost:3000`

| Método | Rota                | Descrição                                      |
|--------|---------------------|------------------------------------------------|
| POST   | `/tasks`            | Cria um nova task nova                         |
| GET    | `/tasks`            | Lista todas as tasks                           |
| GET    | `/tasks/:id`      | Busca uma task por id do mongo                 |
| PUT    | `/tasks/:id`      | Atualiza os dados de uma task especifica       |
| DELETE | `/tasks/:id`        | Remove uma tasks pelo ID                       |
