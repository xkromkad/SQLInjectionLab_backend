# Use a smaller base image
#docker build -t sqlinjectionlab_be .
#docker run -p 3000:3000 -d sqlinjectionlab_be
FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .
COPY .env .env

EXPOSE ${PORTS}

ENV NODE_ENV=production

CMD [ "node", "ace", "serve"]
