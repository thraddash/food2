FROM node:14-slim

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm audit fix

COPY . ./
#RUN echo "REACT_APP_LOCALHOST = localhost" > .env

CMD yarn client
