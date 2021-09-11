FROM node:14-slim

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY public/index.html .
COPY src/App.css .
COPY src/App.js .
COPY src/components .
COPY src/pages .
COPY src/index.css .
COPY src/index.js .
COPY src/listData.js .
COPY src/server.js .
COPY src/serviceWorker.js .
COPY yarn.lock .
COPY .env.sample .env

RUN npm install
RUN npm audit fix

CMD yarn dev2
