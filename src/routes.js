const express = require('express');
const router = express.Router();
const vendusController = require('./controllers/vendusController');

// Rota GET para Stock
router.get('/stock/:referencia', vendusController.checkStock);

// Rota POST para Faturas
router.post('/fatura', vendusController.emitInvoice);

// Rota POST para Clientes
router.post('/clientes', vendusController.registerClient);

module.exports = router;
