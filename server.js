const express = require('express')
const nunjucks = require('nunjucks')
const server = express()
const course = require('./data') 

server.use(express.static('public'))
server.set("view engine", "njk")

nunjucks.configure("views", {
  express:server,
  autoescape: false,
  noCache: true
})

server.get("/courses", function(req, res){
  return res.render("courses", {items: course})
})

server.get("/about", function(req, res){
  const about = {
    image: "https://avatars0.githubusercontent.com/u/28929274?s=200&v=4",
    title: "ROCKETSEAT",
    description: "As melhores tecnologias em programação, direto ao ponto e do jeito certo.No meio de tanta informação e da quantidade de ferramentas que surgem todos os dias, você precisa de alguém que te leve na direção certa.",
    title_two: "Tecnologias Utilizadas",
    techs:[
      {tech: "Javascript"},{tech: "Html"},{tech: "Css"},{tech: "TypeScript"},{tech: "NodeJS"}
    ],
    links:[
      {name: "GitHub", url: "https://github.com/Rocketseat"},
      {name: "FaceBook", url: "https://web.facebook.com/rocketseat/?_rdc=1&_rdr"},
      {name: "Istagram", url: "https://www.instagram.com/rocketseat_oficial/?hl=pt-br"}
    ]

  }

  return res.render("about", {about})
})

server.get("/courses/:id", function (req, res){
  const id = req.params.id;

  const cours = course.find(function(cours){
    return cours.id == id
  })
  if(!cours){
    return res.render("not-found")
  }
   return res.render("id_course", {item: course})
})


server.use( function(req, res) {
  res.status(404).render("not-found");
});

server.listen(5000, function(){
  console.log("server is running")
})
