const Estudiante = require('../models/estudiantes');
let estudiantes = require('../data/estudiantes');

exports.listarEstudiantes = (req, res) => {
    res.render('index', { estudiantes });
};

exports.detalleEstudiante = (req, res) => {
    const id = parseInt(req.params.id);
    const estudiante = estudiantes.find(est => est.id === id);
    if (estudiante) {
        res.render('detalle', { estudiante });
    } else {
        res.status(404).send('Estudiante no encontrado');
    }
};

exports.agregarEstudiante = (req, res) => {
    const { nombre, cedula, correoElectronico } = req.body;
    const nuevoId = estudiantes.length ? estudiantes[estudiantes.length - 1].id + 1 : 1;
    estudiantes.push({ id: nuevoId, nombre, cedula, correoElectronico });
    res.redirect('/estudiantes');
};

exports.editarEstudiante = (req, res) => {
    const id = parseInt(req.params.id);
    const estudiante = estudiantes.find(est => est.id === id);
    if (estudiante) {
        res.render('editar', { estudiante });
    } else {
        res.status(404).send('Estudiante no encontrado');
    }
};

exports.eliminarEstudiante = (req, res) => {
    const id = parseInt(req.params.id);
    const index = estudiantes.findIndex(est => est.id === id);
    if (index !== -1) {
        estudiantes.splice(index, 1);
        res.redirect('/estudiantes');
    } else {
        res.status(404).send('Estudiante no encontrado');
    }
};
