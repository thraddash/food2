FROM node:14-slim

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY public/index.html public/index.html
COPY src/App.css/src/App.css
COPY src/App.js src/App.js
COPY src/components src/components
COPY src/pages src/pages
COPY src/index.css src/index.css
COPY src/index.js src/index.js
COPY src/listData.js src/listData.js
COPY src/server.js src/server.js
COPY src/serviceWorker.js src/serviceWorker.js
COPY yarn.lock .
COPY .env.sample .env

RUN npm install
RUN npm audit fix

CMD yarn dev2
