const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./src/config');
const routes = require('./src/routes');

const app = express();

// Middleware básico
app.use(cors()); // Permite que o Mendix fale com este servidor
app.use(bodyParser.json()); // Permite receber JSON

// Usar as rotas definidas
app.use('/api', routes);

// Iniciar servidor
app.listen(config.port, () => {
    console.log(`Middleware do Grupo 14 a correr na porta ${config.port}`);
    console.log(`API Base: http://localhost:${config.port}/api`);
});
