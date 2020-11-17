const express = require('express');
const router = express.Router();

const Mascota = require('../models/Mascota');


router.get('/', async (req, res) => {
    try {
        const arrayMascotasDB = await Mascota.find();

        res.render('mascotas', {
            arrayMascotas: arrayMascotasDB
        })
    } catch (error) {
        console.log(error);
    }
})

router.get('/crear', (req, res) => {
    res.render('crear')
})

router.post('/crear', async (req, res) => {
    const body = req.body;
    try {
        // const mascotaDB = new Mascota(body);
        // await mascotaDB.save();
        // or
        await Mascota.create(body);

        res.redirect('/mascotas');
    } catch (error) {
        console.log(error);
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const mascotaDB = await Mascota.findOne({_id: id});
        res.render('detalle', { 
            mascota: mascotaDB,
            error: false
        })
    } catch (error) {
        console.log(error);
        res.render('detalle', { 
            error: true,
            mensaje: 'No se encuentra el id seleccionado'
        })        
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const mascotaDB = await Mascota.findByIdAndDelete({ _id: id })

        if(mascotaDB){
            res.json({
                estado: true,
                mensaje: 'Eliminado!'
            })
        }else{
            res.json({
                estado: false,
                mensaje: 'No se pudo eliminar el registro!'
            })
        }
    } catch (error) {
        console.log(error);
    }
})

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;

    try {
        const mascotaDB = await Mascota.findByIdAndUpdate(id, body)

        if(mascotaDB) {
            res.json({
                estado: true,
                mensaje: 'Editado!'
            })
        } else {
            res.json({
                estado: false,
                mensaje: 'Edicion fallida!'
            })  
        }
    } catch (error) {
        console.log(error);
    }
})


module.exports = router;