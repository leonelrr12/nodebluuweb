// HTTP con NodeJS Puro
// const http = require('http');
// const server = http.createServer((req, res) => {
//     res.end('Estoy respondiendo a tu respuesta')
// })

// const port = 3003;
// server.listen(port, () => {
//     console.log('Escuchando tu Solicitud')
// })

// HTTP con Express 
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Varios de Ambiente
require('dotenv').config();

const port = process.env.PORT || 3003;

// Inicializaciones

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// Patse application/json
app.use(bodyParser.json());

// Conexion a Base de Datos
require('./config/database');

// Motor de Plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));

// Rutas del APP
app.use('/', require('./router/Routes'));
app.use('/mascotas', require('./router/Mascotas'));

// Middleware
app.use((req, res, next) => {
    res.status(404).render('404', {
        titulo: 'Ruta de acceso no existe.'
    });
})

app.listen(port, () => {
    console.log('Servidor ahora escuchando en el puerto', port);
})


