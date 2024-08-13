const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudiantesController');
// Ruta para listar todos los estudiantes
router.get('/', estudiantesController.listarEstudiantes);

// Ruta para mostrar el formulario de agregar estudiante
router.get('/agregar', (req, res) => {
    res.render('agregar'); // Asegúrate de tener la vista agregar.ejs
});

// Ruta para procesar la adición de un nuevo estudiante
router.post('/agregar', estudiantesController.agregarEstudiante);

// Ruta para mostrar el formulario de edición de un estudiante
router.get('/editar/:id', estudiantesController.editarEstudiante);

// Ruta para procesar la actualización de un estudiante
router.put('/editar/:id', estudiantesController.actualizarEstudiante);

// Ruta para eliminar un estudiante
router.delete('/:id', estudiantesController.eliminarEstudiante);

// Ruta para ver los detalles de un estudiante
router.get('/:id', estudiantesController.detalleEstudiante);


module.exports = router;
