const vendusService = require('../services/vendusService');

module.exports = {
    // Controlador para Stock
    checkStock: async (req, res) => {
        try {
            const { referencia } = req.params;
            const data = await vendusService.getProductStock(referencia);
            // Retorna o JSON ao Mendix 
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao consultar stock' });
        }
    },

    // Controlador para Fatura
    emitInvoice: async (req, res) => {
        try {
            const invoiceData = req.body;
            const data = await vendusService.createInvoice(invoiceData);
            // Retorna sucesso (201 Created)
            res.status(201).json(data);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao emitir fatura' });
        }
    },

    // Controlador para Criar Cliente
    registerClient: async (req, res) => {
        try {
            const clientData = req.body;
            const data = await vendusService.createClient(clientData);
            // Retorna sucesso (201 Created)
            res.status(201).json(data);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar cliente' });
        }
    }
};
