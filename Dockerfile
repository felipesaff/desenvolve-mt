# Dockerfile
FROM node:22.16.0-alpine

WORKDIR /app

# Copia apenas os arquivos de dependências primeiro (cache melhor)
COPY package*.json ./
RUN npm install

# Copia o resto do código
COPY . .

# Expõe a porta
EXPOSE 3000

# Comando padrão
CMD ["npm", "run", "dev"]