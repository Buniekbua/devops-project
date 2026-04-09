FROM node:21-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

FROM node:21-alpine

USER node

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder --chown=node:node /app/node_modules ./node_modules
COPY --chown=node:node . .

EXPOSE 3000

CMD [ "node", "app.js" ]

