# 🔐 Auth Service

## 📖 Descrição
O **Auth Service** é um microserviço responsável pela **autenticação e autorização de usuários**.  
Ele foi desenvolvido em **Node.js + TypeScript**, utilizando **Prisma ORM** e os princípios de **Clean Architecture** e **DDD**, garantindo separação de responsabilidades, flexibilidade e segurança.

O serviço provê:
- Registro e autenticação de usuários
- Geração e validação de **tokens JWT**
- Gerenciamento de credenciais seguras (criptografia de senhas, API Keys)
- Integração simples com outros microserviços

Os usuários podem ser criados pela api https://github.com/saviodba/user-service.git  
---

## 🏗️ Estrutura do Projeto

```bash
📦 auth-service
┣ 📂 prisma                  # Configuração do ORM Prisma
┣ 📂 src
┃ ┣ 📂 adapters              # Adaptadores (camada de entrada)
┃ ┃ ┣ 📂 controllers         # Controladores HTTP
┃ ┃ ┣ 📂 factories           # Fábricas de instâncias (injeção de dependências)
┃ ┃ ┗ 📂 routes              # Definição de rotas
┃ ┣ 📂 application           # Casos de uso e regras de negócio
┃ ┃ ┣ 📂 DTOs                # Objetos de transferência de dados
┃ ┃ ┗ 📂 services            # Serviços de autenticação e lógica de segurança
┃ ┣ 📂 config                # Configurações do serviço (variáveis de ambiente, etc.)
┃ ┣ 📂 core                  # Núcleo (tratamento de erros, middlewares, etc.)
┃ ┣ 📂 domain                # Camada de domínio
┃ ┃ ┗ 📂 repositories        # Interfaces dos repositórios (contratos)
┃ ┣ 📂 infrastructure        # Implementações técnicas (ORM, serviços externos)
┃ ┗ 📂 shared                # Módulos e utilitários compartilhados
┣ 📜 .dockerignore           # Configuração do Docker ignore
┣ 📜 .env                    # Variáveis de ambiente
┣ 📜 .gitignore              # Arquivos ignorados pelo Git
┣ 📜 docker-compose.yml      # Subida da aplicação em containers
┣ 📜 Dockerfile              # Definição da imagem Docker
┣ 📜 package.json            # Dependências do projeto
┣ 📜 tsconfig.json           # Configuração do TypeScript
┗ 📜 README.md               # Documentação do projeto
```


## ⚙️ Tecnologias
- **Node.js** + **TypeScript**
- **Prisma ORM**  
- **MySQL / PostgreSQL** (configurável via `schema.prisma`)
- **Clean Architecture + DDD**
- **JWT** para autenticação
- **Logger** centralizado

---

## 🚀 Instalação e Execução

### Pré-requisitos
- Node.js (>= 18)  
- Banco de dados compatível (MySQL/Postgres)  
- Prisma CLI (`npm install -g prisma`)

### Passos
```bash
# Clone o repositório
git clone https://github.com/saviodba/auth-service.git
cd user-service

# Instale as dependências
npm install

# Execute para fazer a geração do Prisma Client, que é a biblioteca tipada que você usa no seu código para acessar o banco de dados. Só execute se não tiver a pasta "../src/infrastructure/database/generated/prisma"
npx prisma generate


# Configure as variáveis de ambiente
cp .env.example .env

# Execute as migrações do banco
# Cria e aplica migrações no banco de dados de acordo com as mudanças no schema.prisma
npx prisma migrate dev

# Inicie a aplicação
npm run dev
```