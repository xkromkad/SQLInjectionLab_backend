# Use a smaller base image
FROM node:14-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .
COPY .env.production .env

EXPOSE ${PORTS}

CMD [ "npm", "run", "dev"]
