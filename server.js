const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

const app = express() // Instância a aplicação
app.use(express.json()) // Permitir o envio de dados no formato de JSON
app.use(cors()) // Permitir usos de outros domínios.

/*

(ORM) Mongoose trabalha com a conexão de bancos não relacionais, como o caso do MongoDB
Conexão do MongoDB abaixo:

*/

mongoose.connect(
	'mongolink', 
	{ useNewUrlParser: true, useUnifiedTopology: true })

// Puxa todas as models de um determinado diretório

requireDir('./src/models')

/* O `use`recebe todo o tipo de requisição, e nessas rotas
vão ter o prefixo '/api/' antes:
*/

app.use('/api', require('./src/routes'))

// 'Escuta' na porta 8080
// Caso tenha algum erro, ele retorna no console.

app.listen(8080, function(error) {
	if (error) { console.log(error) }
}) 
