## Ajustes desta versão

Versão adaptada para o segmento: **TechStore - Loja de Informática**.

Rotas principais desta API:

### Autenticação
- `/login-techstore`
- `/validar-acesso`
- `/recuperar-acesso`
- `/validar-chave-acesso`
- `/atualizar-acesso`

### Clientes
- `/cliente`
- `/cliente/:id`
- `/senha-cliente/:id`
- `/status-cliente`

### Produtos
- `/produto`
- `/categoria-produto`
- `/status-produto`

### Monitoramento
- `/health-techstore`

### Funcionalidades

A API permite:

- Cadastro e gerenciamento de clientes;
- Controle de status dos clientes;
- Cadastro e gerenciamento de produtos;
- Controle de categorias de produtos;
- Controle de situação dos produtos;
- Autenticação utilizando JWT;
- Recuperação de senha por e-mail;
- Paginação de registros;
- Integração com PostgreSQL utilizando TypeORM.

As entidades internas foram mantidas para preservar a estrutura, os relacionamentos e o funcionamento da aplicação.