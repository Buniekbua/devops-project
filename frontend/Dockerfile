FROM node:21-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

FROM node:21-alpine

ENV NODE_ENV=production

USER node

WORKDIR /app

COPY --from=builder --chown=node:node /app/node_modules ./node_modules
COPY --chown=node:node app.js       ./
COPY --chown=node:node config.json  ./
COPY --chown=node:node routes/      ./routes/
COPY --chown=node:node views/       ./views/
COPY --chown=node:node public/      ./public/

EXPOSE 3000

CMD [ "node", "app.js" ]

