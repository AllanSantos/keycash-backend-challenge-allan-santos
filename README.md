# keycash-backend-challenge-allan-santos

Projeto focado em construir uma API's usando Node.Js.

Express framework.

Banco Relacional Postgres.

Docker para monstar ambiente.

---------- Pacotes ------------------
-Express
yarn add Express

-Nodemon
yarn add nodemon -D

-Sucrase lidando com "import" e "export default"
yarn add sucrase -D

-Bcryptjs (Hash de senha)
yarn add bcryptjs

-JWT
yarn add jsonwebtoken

-Sequelize
yarn add sequelize

-Sequelize cli
yarn add sequelize-cli -Docker

-pg pg-hstore
yarn add pg pg-hstore

-Yup validação de Dados
yarn add yup

--------- Comandos Projeto ------------
Iniciando Projeto
yarn init -y

Rodando servidor
yarn dev

---------------- Banco de Dados --------------------------
Instalando o Postgres no Docker
$ docker run --name keycash -e POSTGRES_PASSWORD=docker -p 5434:5432 -d postgres:11

Todos os Containers
docker ps -a

docker ps (mostra o Container atual rodando)

Verifica se tem erro no container
docker logs NomeBanco

Start no Container
docker start Nome_Container ou ID

------- Migrations (tabela) ---------
CREATE
-> users

yarn sequelize migration:create --name=create-users

-> imoveis

yarn sequelize migration:create --name=create-imoveis

RODANDO A MIGRATION
yarn sequelize db:migrate

DESFAZENDO A MIGRATION
yarn sequelize db:migrate:undo:all (todas)

yarn sequelize db:migrate:undo (ultima)
