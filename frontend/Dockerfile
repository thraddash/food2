FROM node:14-slim

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm audit fix

COPY . ./
COPY .env.sample .env

CMD yarn client
