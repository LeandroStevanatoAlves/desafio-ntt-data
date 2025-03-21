# Automacao de Testes - Desafio Técnico NTT Data

## 📌 Descrição
Este projeto tem como objetivo desenvolver 3 cenários de teste automatizado para a API e 3 cenários de teste automatizado para o frontend. Utilizando as URLs indicadas abaixo:

Frontend: [https://front.serverest.dev/](https://front.serverest.dev/)
Swagger API: [https://serverest.dev/](https://serverest.dev/)

## 🚀 Tecnologias Utilizadas
- [Cypress](https://www.cypress.io/) - Framework para testes end-to-end
- [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript

## 📂 Estrutura do Projeto
```
📁 desafio-ntt-data
├── 📁 cypress
│   ├── 📁 e2e  # Testes automatizados
│   ├── 📁 support  # Custom commands do Cypress
├── 📄 cypress.config.js  # Configuração do Cypress
├── 📄 package.json  # Dependências do projeto
├── 📄 README.md  # Documentação do projeto
```

## 📥 Instalação do projeto
Siga os passos abaixo para configurar e executar o projeto localmente.

### 1️⃣ Clonar o repositório
```sh
git clone https://github.com/LeandroStevanatoAlves/desafio-ntt-data/
cd desafio-ntt-data
```

### 2️⃣ Instalar o Node.js (se ainda não estiver instalado)
Baixe e instale a versão mais recente do [Node.js](https://nodejs.org/).

### 3️⃣ Instalar as dependências do projeto
```sh
npm install
```

## ▶️ Executando os Testes

Para executar os testes com interface gráfica:
```sh
npx cypress open
```

Para executar os testes sem interface gráfica:
```sh
npx cypress run
```

## 🛠️ CI/CD
O projeto pode ser configurado para rodar testes automaticamente em pipelines como GitHub Actions.

## 📜 Observação
- Utilizei o Faker para gerar uma massa de dados mais diversificada, utilizei a localização do Brasil.

- Após incluir um novo usuário via API, realizar a limpeza de todos dos dados gerados durante o teste. Não cheguei a fazer via frontend, pois eu não tenho o id, dai teria que abrir a lista de usuários e localizar o usuário que inclui.
