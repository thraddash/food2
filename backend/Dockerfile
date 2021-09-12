FROM node:14-slim as builder

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm audit fix

COPY . ./

CMD node ./server.js
