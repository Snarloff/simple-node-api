# Projeto de API de Produtos com Node.js e MongoDB

Este é um projeto de uma API de gerenciamento de produtos desenvolvido com Node.js, Express.js e MongoDB (usando o Mongoose). Esta aplicação foi criada com o objetivo de aprender os conceitos básicos de construção de APIs e integração com um banco de dados NoSQL.

## Visão Geral

Neste projeto, você encontrará uma API de CRUD (Create, Read, Update, Delete) que permite gerenciar produtos. A aplicação inclui as seguintes funcionalidades:

- Criação, leitura, atualização e exclusão de produtos.
- Armazenamento dos dados em um banco de dados MongoDB com Mongoose.
- Roteamento de requisições com o Express.js.

## Como Usar

Siga os passos abaixo para executar a aplicação localmente:

1. Clone este repositório:

   ```shell
   git clone https://github.com/Snarloff/simple-node-api.git
   ```

2. Navegue até o diretório do projeto:

   ```shell
   cd nome-do-repositorio
   ```

3. Instale as dependências:

   ```shell
   npm install
   ```

4. Inicie a aplicação:

   ```shell
   npm run dev
   ```

A aplicação estará disponível em `http://localhost:3000`.

## Estrutura do Projeto

- `server.js`: O ponto de entrada da aplicação.
- `routes.js`: Define as rotas da API.
- `models/`: Contém os modelos do Mongoose para os produtos.
- `controllers/`: Lida com as operações de CRUD dos produtos.
- `.env`: Configurações do MongoDB e outras variáveis de ambiente.

## Contribuições

Este projeto foi criado como parte de um estudo pessoal e, portanto, não está mais em desenvolvimento ativo. Contribuições são bem-vindas, mas saiba que este é um projeto de aprendizado e pode não atender a todos os padrões de produção.

## Problemas e Sugestões

Se você encontrar problemas ou tiver sugestões para melhorar este projeto, por favor, abra uma issue neste repositório.

Agradecemos a todos que contribuíram para o aprendizado durante a criação deste projeto.

*OBS: Projeto criado há 3 anos quando iniciava os estudos em Express.js*
