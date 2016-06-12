FROM mhart/alpine-node:6.2
MAINTAINER Zach Orlovsky <sadorlovsky@gmail.com>

COPY package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

WORKDIR /opt/app
COPY . /opt/app

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
