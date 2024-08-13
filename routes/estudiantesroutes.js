const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudiantescontroller');

// Listar todos los estudiantes
router.get('/', estudiantesController.listarEstudiantes);

// Ver detalles de un estudiante
router.get('/vista/:id', estudiantesController.detalleEstudiante);

// Agregar un nuevo estudiante
router.post('/', estudiantesController.agregarEstudiante);

// Editar un estudiante (muestra un formulario de edición)
router.get('/editar/:id', estudiantesController.editarEstudiante);

// Eliminar un estudiante
router.post('/:id', estudiantesController.eliminarEstudiante);

module.exports = router;
