const proffys = [
   {
      name: "Diego Fernandes",
      avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
      whatsapp: "899876543443",
      bio: "Entusiasta das melhores tecnologias de química avançada. <br/> <br/>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões",
      subject: "Química",
      cost: "20",
      weekday: [0],
      time_from: [720],
      time_to: [1220],
   },

   {
      name: "Daniele Evangelista",
      avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
      whatsapp: "899876543443",
      bio: "Entusiasta das melhores tecnologias de química avançada. <br/> <br/>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões",
      subject: "Química",
      cost: "20",
      weekday: [1],
      time_from: [720],
      time_to: [1220],
   }

];

const subjects = [
   "Artes", "Biologia", "Ciências", "Educação Física", "Física", "Geografia", "História", 
   "Matemática", "Português", "Química",
];

const weekdays = [
   "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado",
];

function getSubject(subjectNumber) {
   const position = +subjectNumber - 1;
   return subjects[position];
}

const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

nunjucks.configure("src/views", {
   express: server,
   noCache: true,
});

server.use(express.static("public")); // fazendo com que a pasta raiz seja a public.

server.get('/', (req, res) => {
   return res.render("index.html");
});

server.get('/study', (req, res) => {
   const filters = req.query; // dados do formulário

   return res.render("study.html" , { proffys, filters, subjects, weekdays });
});

server.get('/give-classes', (req, res) => {
   const data = req.query;

   
   const isNotEmpty = Object.keys(data).length > 0; // pegando as keys do objeto e transformando em um array
   
   if(isNotEmpty) {
      data.subject = getSubject(data.subject);

      proffys.push(data);
      
      return res.redirect("/study");
   }

   return res.render("give-classes.html", { subjects, weekdays });
});

server.listen(3333);