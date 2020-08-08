const express = require('express');
const nunjucks = require('nunjucks');
const { pageLanding, pageStudy, pageGiveClasses, createClasses } = require('./pages');

const server = express();

nunjucks.configure("src/views", {
   express: server,
   noCache: true,
});

server.use(express.urlencoded({ extended: true})); // receber os dados do req.body.
server.use(express.static("public")); // fazendo com que a pasta raiz seja a public.
server.get('/', pageLanding);
server.get('/study', pageStudy);
server.get('/give-classes', pageGiveClasses);
server.post('/create-class', createClasses);

server.listen(3333);