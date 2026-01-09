const express = require('express');
const cors = require('cors');
const config = require('./src/config');
const routes = require('./src/routes');

const app = express();

// Middleware básico
app.use(cors()); // Permite que o Mendix fale com este servidor
app.use(express.json()); // Permite receber JSON (Substitui body-parser)

// Usar as rotas definidas
app.use('/api', routes);

// Iniciar servidor
// Iniciar servidor
const server = app.listen(config.port, () => {
    console.log(`Middleware do Grupo 14 a correr na porta ${config.port}`);
    console.log(`API Base: http://localhost:${config.port}/api`);
});

server.on('error', (e) => {
    console.error('SERVER ERROR:', e);
});

process.on('uncaughtException', (err) => {
    console.error('CRASH:', err);
});
