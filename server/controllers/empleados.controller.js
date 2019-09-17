'use strict';

const Empleado = require("../models/empleados");

const employeeController = {};

//Obtiene el listado de todos los empleados registrados en la base de datos
employeeController.obtenerEmpleadosAll = async (req, res) => {
    const empleados = await Empleado.find(); 
    res.json(empleados);    
};

//Obtiene la informacion de un unico empleado de la base de datos a partir de su ID
employeeController.obtenerEmpleadoId = async (req, res) => {
    const empleado = await Empleado.findById(req.params.id);
    res.json(empleado);
};

//Inserta el registro de un nuevo empleado en la base de datos
employeeController.agregarEmpleado = async (req, res) => {
    const empleado = new Empleado(req.body);
    await empleado.save();
    res.json({
        "status":"Se ha creado el registro exitosamente"
    });
};

//Edita la informacion de la base de datos del registro de un empleado
employeeController.editarEmpleado = async (req, res) => {
    let id = req.params.id;
    const empleado = {
        id: req.body.id,
        name: req.body.position,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    await Empleado.findByIdAndUpdate(id, {$set: empleado},{new: true});
    res.json({
        "status":"Empleado Actualizado"
    });
};

//Elimina la informacion de la base de datos del registro de un empleado
employeeController.eliminarEmpleado = async (req, res) => {
    await Empleado.findByIdAndRemove(req.params.id);
    res.json({
        "status":"Empleado Eliminado"
    });
};



module.exports = employeeController;