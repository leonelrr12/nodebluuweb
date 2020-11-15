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
const app = express();
const path = require('path');

const port = 3003;

// Motor de Plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    // res.send('<h1>Mi respuesta desde Express!!!</h1>');
    res.render('index', { titulo: "Mi titulo dinámico" })
})

app.get('/servicios', (req, res) =>{
    // res.send('<h1>Hola, estos son nuestros servicios.</h1>')
    res.render('servicios', { titulo: "Hola, estos son nuestros servicios." })
})

// Middleware
app.use((req, res, next) => {
    res.status(404).render('404', {
        titulo: 'Ruta de acceso no existe.'
    });
})


app.listen(port, () => {
    console.log('Servidor ahora escuchando en el puerto', port);
})
