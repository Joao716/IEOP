const vendusService = require('../services/vendusService');

module.exports = {
    checkStock: async (req, res) => {
        try {
            const { referencia } = req.params;
            const data = await vendusService.getProductStock(referencia);
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao consultar stock' });
        }
    },
    emitInvoice: async (req, res) => {
        try {
            let invoiceData = req.body;

            if (invoiceData.register) {
                const { register, ...rest } = invoiceData;
                const { amount, ...validRegisterFields } = register;
                invoiceData = { ...rest, ...validRegisterFields };
            }

            // Rename postal_code -> postalcode for Vendus API compatibility
            if (invoiceData.client?.postal_code) {
                invoiceData.client.postalcode = invoiceData.client.postal_code;
                delete invoiceData.client.postal_code;
            }

            // Set default document type
            if (!invoiceData.type) {
                invoiceData.type = 'FT';
            }

            // Ensure all items have a title
            if (invoiceData.items && Array.isArray(invoiceData.items)) {
                invoiceData.items = invoiceData.items.map(item => ({
                    ...item,
                    title: item.title || item.reference || "Item Desconhecido"
                }));
            }

            delete invoiceData.mode;

            const data = await vendusService.createInvoice(invoiceData);

            console.log(`✅ Fatura criada: ${data.number} (ID: ${data.id})`);

            res.status(201).json(data);
        } catch (error) {
            console.error("❌ [Middleware] Erro ao emitir fatura:", error.response?.data || error.message);
            res.status(500).json({ error: 'Erro ao emitir fatura' });
        }
    },

    registerClient: async (req, res) => {
        try {
            const clientData = req.body;
            const data = await vendusService.createClient(clientData);
            res.status(201).json(data);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar cliente' });
        }
    }
};
