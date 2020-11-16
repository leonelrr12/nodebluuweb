const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // res.send('<h1>Mi respuesta desde Express!!!</h1>');
    res.render('index', { titulo: "Mi titulo dinámico" })
})

router.get('/servicios', (req, res) =>{
    // res.send('<h1>Hola, estos son nuestros servicios.</h1>')
    res.render('servicios', { titulo: "Hola, estos son nuestros servicios." })
})

module.exports = router;
