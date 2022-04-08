var express = require('express'); //Importando el módulo Express a una variable.
var app = express(); //Declaramos la app de Express.
var port = process.env.PORT || 3000; //Asignamos el puerto en el que se alojará el servidor.
app.use('/assets', express.static(__dirname + '/public')); //Asignando el directorio virtual para contenido estático.

app.set('view engine', 'ejs'); //Añadimos el Template EJS.
app.use('/', function(req, res, next) {
    console.log(`Request Url: ${req.url}`); //Imprimiendo las URLs en nuestra terminal.
    next();
});  

//Creando nuestro directorio raíz, es decir, nuestra primera ruta (Hello world!).
app.get('/', function(req, res) {
    res.render('index'); //Indicamos la carpeta index.ejs al método render.
});

//Creando la segunda ruta, la cual nos muestra una lista determinada por el número que ingresemos.
app.get('/numbers/:number', function(req, res) {
    res.render('numbers', { number: req.params.number });
});

app.listen(port); //Ponemos el servidor a la escucha de alguna petición.