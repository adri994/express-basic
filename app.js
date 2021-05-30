//bUSCAR ALS VARIABLES DE ENTORNO DE LA CARPETA .ENV
require('dotenv').config()
const express = require('express')
var hbs = require('hbs');

const app = express()
//buscar la info que este en el archivo
const port = process.env.PORT
//Despues de esto tengo que crear un comando en el package.json

//Handlebars sirve para enviar el html desde el backend y se renderice y lo muestre, ojo donde este las vista tiene que ser en views (crear una carpeta views)
//app.set('view engine', 'hbs');
//handlbar
//hbs.registerPartials(__dirname + '/views/partials');

app.use( express.static('public'))



// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/public/index.html')
// });
// app.get('/', (req, res) => {
//   //Para renderizar con hbs tenemso que hacer lo siguiente
//   res.render('home',{
//     name:"adrian",
//     study:"programacion"
//   })
// });

// app.get('/elements', (req, res) => {
//   res.sendFile(__dirname + '/public/elements.html')
// });

// app.get('/elements',(req,res)=>{
//   res.render('elements')
// })

// app.get('/generic', (req, res) => {
//   res.sendFile(__dirname + '/public/generic.html')
// });

// app.get('/generic',(req,res)=>{
//   res.render('generic')
// })

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
});

app.listen(port)


// //servir contenido estatico este tendra para inicializar la pagina
// app.use( express.static('public') );
 
// // app.get('/', function (req, res) {
// //   res.send('Hello World')
// // })

// app.get('/hola', function (req, res) {
//   //send para indicarle el archivo 
//   //__dirname para indicarle la ruta donde esta el archivo 
//   res.sendFile(__dirname + "/public/hola.html")
// })

// app.get('*', function (req, res) {
//   res.send('no hay')
// })
 
// app.listen(3000)