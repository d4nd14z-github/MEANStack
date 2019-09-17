//Configuracion de la Base de Datos
'use strict';

const mongoose = require("mongoose");

const URI = "mongodb://localhost/stackmean_db";

//String de conexion para superiores a MongoDB 4.0
mongoose.connect(URI, { useNewUrlParser: true,
                        useUnifiedTopology: true})
    .then(db => console.log("Conexion a base de datos (OK)"))
    .catch(err => console.log(err));

module.exports = mongoose;

