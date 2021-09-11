FROM node:14-slim

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY public/ .
COPY src/ .
COPY yarn.lock .
COPY .env.sample .env

RUN npm install
RUN npm audit fix

CMD yarn dev2
