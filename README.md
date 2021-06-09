# PlataformaVoto

## Introdução

Esse projeto é uma API para o sistema de voto de propostas criadas pelos alunos,  
para a escola ETEC da Zona Leste. Desenvolvido em ambiente Node.js, com express.js e  
Sequelize usando MySQL como dialeto do banco de dados

## Instalação

Use o NPM (Node package manager) na pasta raiz do projeto para instalar  
as dependências:

```
npm install
```

## Autenticação do Banco de Dados

Crie um arquivo chamado "config.json" dentro da pasta "config", com base no arquivo "config.example.json",  
colocando as informações do seu banco de dados no lugar dos placeholders

## Endpoints

**Os endpoints da API são:**

`GET /propostas/listar`

Retorna, de forma paginada as propostas do banco de dados, com base no atributo `page`, enviado por meio da  
query. A lista de páginas  começa em 0, e caso omitido, o valor padrão do atributo `page` é 0. São enviados  
para o front as publicações e o número total de páginas que elas formam. Exemplo de publicação retornada:

```
{
    "rows": [ //publicações
        {
            "id": 6,
            "titulo": "titulo",
            "conteudo": "conteudo",
            "autor": "eu",
            "score": 1000,
            "createdAt": "2021-06-09T00:17:42.000Z",
            "updatedAt": "2021-06-09T00:17:42.000Z"
        },
        {
            "id": 7,
            "titulo": "titulo2",
            "conteudo": "conteudo2",
            "autor": "eu2",
            "score": 500,
            "createdAt": "2021-06-09T00:21:26.000Z",
            "updatedAt": "2021-06-09T00:21:26.000Z"
        },
        {
            "id": 8,
            "titulo": "titulo3",
            "conteudo": "conteudo3",
            "autor": "eu3",
            "score": 200,
            "createdAt": "2021-06-09T00:21:48.000Z",
            "updatedAt": "2021-06-09T00:21:48.000Z"
        }
    ],
    "totalPages": 2 //número total de páginas
}
```

`GET /propostas/publicar`

Insere uma publicação no banco de dados, retornando um código de status 200 se bem sucedido.
Parâmetros de query esperados:

* `titulo` (string) 
* `conteudo` (string)
* `autor` (string)

`GET /voto/positivo`

Endpoint que chamado quando uma publicação recebe um voto positivo. Recebe o atributo `postId`  
por meio da query, referente ao ID da publicação que recebeu o voto.  
Retorna um código de status 200 se bem sucedido

`GET /voto/negativo`

Endpoint chamado uma request quando uma publicação recebe um voto negativo. Recebe o atributo `postId`  
por meio da query, referente ao ID da publicação que recebeu o voto  
Retorna um código de status 200 se bem sucedido