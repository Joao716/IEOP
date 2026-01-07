require('dotenv').config();

module.exports = {
    port: process.env.PORT || 3000,
    vendus: {
        apiKey: process.env.VENDUS_API_KEY,
        baseUrl: process.env.VENDUS_BASE_URL
    }
};
