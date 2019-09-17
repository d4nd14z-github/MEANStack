'use strict';

const mongoose = require("mongoose");

const { Schema } = mongoose;

const EmployeeSchema = new Schema({
    //Campos del Modelo de la BD
    id: { type: Number },
    name: { type: String, required: true },
    position: { type: String, required: true },
    office: { type: String, required: true },
    salary: { type: Number, required: true }
});

module.exports = mongoose.model("Employee", EmployeeSchema);