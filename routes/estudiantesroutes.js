const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudiantescontroller.js');

// Rutas CRUD
router.get('/', estudiantesController.getEstudiantes);
router.post('/', estudiantesController.createEstudiante);
router.get('/:id', estudiantesController.getEstudianteById);
router.put('/:id', estudiantesController.updateEstudianteById);
router.delete('/:id', estudiantesController.deleteEstudianteById);

module.exports = router;
