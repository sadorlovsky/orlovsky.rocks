FROM mhart/alpine-node:7.7

ADD . .

RUN npm install
RUN npm run build

EXPOSE 3000

CMD npm run start
