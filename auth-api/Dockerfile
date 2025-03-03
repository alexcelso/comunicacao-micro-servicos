FROM node:18

WORKDIR /auth-api

COPY package*.json ./

RUN yarn 

COPY . .

EXPOSE 8080

CMD ["node", "app.js"]