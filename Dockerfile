FROM node:18.17

WORKDIR /node_study_first
COPY . .

RUN npm install
CMD node 02-helloworld.js