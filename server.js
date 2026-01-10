const express = require('express');
const cors = require('cors');
const config = require('./src/config');
const routes = require('./src/routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', routes);

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
