const mongoose = require('mongoose');

// Varios de Ambiente
require('dotenv').config();

// const db = 'mongodb+srv://guasimone:Mf0krgwFqPviMxwg@cluster0-abpj6.mongodb.net/merntasks';
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0-abpj6.mongodb.net/${process.env.DBNAME}?authSource=admin&replicaSet=Cluster0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`;

mongoose.connect(uri, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true, 
      useFindAndModify: false, 
      useCreateIndex: true })
  .then(() => { console.log('Base de Datos OnLine!')})
  .catch((e) => { console.error('Error de conexion BD', e)})
