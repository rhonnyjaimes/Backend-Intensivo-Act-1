const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudiantescontroller');
router.get('/', estudiantesController.listarEstudiantes);

router.get('/agregar', (req, res) => {
    res.render('agregar'); 
});

router.post('/agregar', estudiantesController.agregarEstudiante);

router.get('/editar/:id', estudiantesController.editarEstudiante);

router.put('/editar/:id', estudiantesController.actualizarEstudiante);

router.delete('/:id', estudiantesController.eliminarEstudiante);

router.get('/:id', estudiantesController.detalleEstudiante);


module.exports = router;
