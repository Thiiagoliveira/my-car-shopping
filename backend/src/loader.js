//Referencia ao server;
const server = require('./config/server')
//Referencia ao Banco de dados;
require('./config/database')
//Referencia as rotas;
require('./config/routes')(server)