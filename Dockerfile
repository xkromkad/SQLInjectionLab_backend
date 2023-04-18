# Use a smaller base image
#docker build -t rehapp_backend .
#docker run -p 3000:3000 -d rehapp_backend
FROM node:14-alpine3.14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .
COPY .env.production .env

EXPOSE ${PORTS}

ENV NODE_ENV=production

CMD [ "node", "ace", "serve"]
