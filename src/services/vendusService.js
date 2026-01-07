const axios = require('axios');
const config = require('../config');

// Configuração base do Axios com a vossa API Key
const api = axios.create({
    baseURL: config.vendus.baseUrl,
    auth: {
        username: config.vendus.apiKey,
        password: '' // Vendus pede a key no username
    }
});

module.exports = {
    // Função para verificar Stock
    getProductStock: async (reference) => {
        try {
            // Procura o produto pela referência
            const response = await api.get(`/products?reference=${reference}`);
            return response.data;
        } catch (error) {
            console.error("Erro no Vendus Service (Stock):", error.response?.data || error.message);
            throw error;
        }
    },

    // Função para criar Fatura
    createInvoice: async (invoiceData) => {
        try {
            // Envia o JSON para criar documento
            const response = await api.post('/documents/', invoiceData);
            return response.data;
        } catch (error) {
            console.error("Erro no Vendus Service (Fatura):", error.response?.data || error.message);
            throw error;
        }
    },

    // Função para criar Cliente
    createClient: async (clientData) => {
        try {
            // Envia o JSON para criar cliente
            const response = await api.post('/clients/', clientData);
            return response.data;
        } catch (error) {
            console.error("Erro no Vendus Service (Cliente):", error.response?.data || error.message);
            throw error;
        }
    }
};
