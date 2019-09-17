'use strict';

const express = require("express");
const router = express.Router();
const empleadoController = require("../controllers/empleados.controller");

router.get("/", empleadoController.obtenerEmpleadosAll);
router.get("/:id", empleadoController.obtenerEmpleadoId);
router.post("/", empleadoController.agregarEmpleado);
router.put("/:id", empleadoController.editarEmpleado);
router.delete("/:id", empleadoController.eliminarEmpleado);

module.exports = router;



