FROM node:16

EXPOSE 8091

WORKDIR /app

COPY . ./

RUN npm install i npm@latest -g && npm run build

RUN cd server && npm install i npm@latest -g

COPY . .

CMD ["node", "./server/index.js"]