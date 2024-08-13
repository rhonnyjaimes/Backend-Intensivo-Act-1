const Estudiante = require('../models/estudiantes');
let estudiantes = require('../data/estudiantes');

const getEstudiantes = (req, res) => {
  res.json(estudiantes);
};

const createEstudiante = (req, res) => {
  const { nombre, cedula, correoElectronico } = req.body;
  const id = estudiantes.length + 1;
  const nuevoEstudiante = new Estudiante(id, nombre, cedula, correoElectronico);
  estudiantes.push(nuevoEstudiante);
  res.status(201).json(nuevoEstudiante);
};

const getEstudianteById = (req, res) => {
  const { id } = req.params;
  const estudiante = estudiantes.find(est => est.id === parseInt(id));
  if (estudiante) {
    res.json(estudiante);
  } else {
    res.status(404).json({ message: 'Estudiante no encontrado' });
  }
};

const updateEstudianteById = (req, res) => {
  const { id } = req.params;
  const { nombre, cedula, correoElectronico } = req.body;
  const estudiante = estudiantes.find(est => est.id === parseInt(id));
  if (estudiante) {
    estudiante.nombre = nombre;
    estudiante.cedula = cedula;
    estudiante.correoElectronico = correoElectronico;
    res.json(estudiante);
  } else {
    res.status(404).json({ message: 'Estudiante no encontrado' });
  }
};

const deleteEstudianteById = (req, res) => {
  const { id } = req.params;
  estudiantes = estudiantes.filter(est => est.id !== parseInt(id));
  res.status(204).send();
};

module.exports = {
  getEstudiantes,
  createEstudiante,
  getEstudianteById,
  updateEstudianteById,
  deleteEstudianteById
};
