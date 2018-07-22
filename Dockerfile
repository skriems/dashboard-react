FROM node:9.10.1

ENV NPM_CONFIG_LOGLEVEL warn
ENV NODE_PATH=/app/node_modules
ENV PATH=$PATH:/app/node_modules/.bin

WORKDIR /app
ADD yarn.lock /app
ADD package.json /app

RUN yarn install
RUN yarn global add serve react-scripts

ADD . /app
RUN npm run build --production

EXPOSE 5000
CMD serve -s build
