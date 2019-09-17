'use strict';

const express = require("express")
const app = express();
const { mongoose } = require("./database");
const bodyParser = require("body-parser");
const morgan = require("morgan");

//Configuraciones del servidor
app.set('port', process.env.PORT || 3000); //Crea una variable que puede ser accesible desde cualquier parte de la aplicacion
                                           //Utilice el numero de puerto que sea asignado por el servidor, en caso contrario utilice el puerto 3000

//Middlewares: Funcionalidades adicionales para el procesamiento de datos
app.use(morgan('dev'));
app.use(express.json());

//Routes: Rutas del servidor
app.use("/api/empleados", require("./routes/empleados"));

//Inicializacion del Servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor inicializado en el puerto ${app.get('port')}`);
});