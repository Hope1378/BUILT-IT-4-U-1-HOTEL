FROM node:20-alpine

ENV NODE_ENV=production

WORKDIR /app/server

COPY server/package.json server/package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

WORKDIR /app
COPY server ./server
COPY shared ./shared

WORKDIR /app/server
EXPOSE 5000

CMD ["npm", "start"]
