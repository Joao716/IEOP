# IEOP - Middleware Vendus API

Middleware Node.js para integração entre Mendix e Vendus API.

## Funcionalidades
- **Emissão de Faturas**: Criação automática de faturas via API Vendus
- **Consulta de Stock**: Verificação de disponibilidade de produtos
- **Registo de Clientes**: Criação de perfis de cliente

## Tecnologias
- Node.js + Express
- Axios para chamadas API
- CORS para integração com Mendix

## Configuração

1. Instalar dependências:
```bash
npm install
```

2. Configurar variáveis de ambiente (`.env`):
```
PORT=3001
VENDUS_API_KEY=sua_chave_api
VENDUS_BASE_URL=https://www.vendus.pt/ws/v1.1
```

3. Executar:
```bash
node server.js
```

## Endpoints

### `GET /api/stock/:referencia`
Consulta stock de produto por referência.

### `POST /api/fatura`
Cria fatura no Vendus. Payload esperado:
```json
{
  "client": {
    "name": "Nome Cliente",
    "fiscal_id": "NIF",
    "city": "Cidade",
    "postal_code": "Código Postal",
    "country": "PT"
  },
  "items": [
    {
      "reference": "REF-PRODUTO",
      "qty": "1",
      "gross_price": "10.00",
      "tax_id": "NOR"
    }
  ],
  "notes": "Observações"
}
```

### `POST /api/cliente`
Regista cliente no Vendus.

## Grupo 14
Integração da Empresa - Opção I - IPVC 2025/2026