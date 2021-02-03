Esta aplicação tem como objetivo implementar um sistema de imobiliária para a disciplina de Engenharia de Software do curso de Engenharia de Computação - CEFET - MG, utilizando o framework [Next.js](https://nextjs.org/) e o banco de dados MySQL.

## Iniciando
Execute o seguinte comando no seu terminal:

```bash
npm run dev
# or
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu browser para visulaizar o resultado da aplicação.

>Para conectar corretamente com o banco de dados MySQL será necessário configurar o arquivo `.env.local` com base no seu banco de dados local.

# Knex
http://knexjs.org/

## Migrations
### Create migration

`npx knex migrate:make migration_name`

### Run Migrations
`npx knex migrate:latest`

### Rollback Migrations

`npx knex migrate:rollback`

## Seeds

### Create seed

`npx knex seed:make seed_name`

### Run seed files
`npx knex seed:run`