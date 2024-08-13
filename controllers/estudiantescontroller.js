const fs = require('fs');
const path = require('path');
const Estudiante = require('../models/estudiantes');
const estudiantesPath = path.join(__dirname, '../data/estudiantes.json');

// Leer los estudiantes desde el archivo JSON
const leerEstudiantes = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(estudiantesPath, 'utf-8', (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(JSON.parse(data));
        });
    });
};

// Guardar los estudiantes en el archivo JSON
const guardarEstudiantes = (estudiantes) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(estudiantesPath, JSON.stringify(estudiantes, null, 2), (err) => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
};

exports.agregarEstudiante = async (req, res) => {
    try {
        const estudiantes = await leerEstudiantes();
        const { nombre, cedula, edad, carrera, correo } = req.body;
        const nuevoId = estudiantes.length ? estudiantes[estudiantes.length - 1].id + 1 : 1;
        const nuevoEstudiante = { id: nuevoId, nombre, cedula, edad, carrera, correo };

        estudiantes.push(nuevoEstudiante);
        await guardarEstudiantes(estudiantes);

        res.redirect('/estudiantes');
    } catch (error) {
        res.status(500).send('Error al agregar el estudiante');
    }
};

exports.editarEstudiante = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const estudiantes = await leerEstudiantes();
        const estudiante = estudiantes.find(est => est.id === id);
        
        if (estudiante) {
            res.render('editar', { estudiante });
        } else {
            res.status(404).send('Estudiante no encontrado');
        }
    } catch (error) {
        res.status(500).send('Error al obtener el estudiante para edición');
    }
};

exports.actualizarEstudiante = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { nombre, cedula, edad, carrera, correo } = req.body;
        const estudiantes = await leerEstudiantes();
        const index = estudiantes.findIndex(est => est.id === id);

        if (index !== -1) {
            estudiantes[index] = { id, nombre, cedula, edad, carrera, correo };
            await guardarEstudiantes(estudiantes);
            res.redirect('/estudiantes');
        } else {
            res.status(404).send('Estudiante no encontrado');
        }
    } catch (error) {
        res.status(500).send('Error al actualizar el estudiante');
    }
};

exports.detalleEstudiante = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const estudiantes = await leerEstudiantes();
        const estudiante = estudiantes.find(est => est.id === id);
        if (estudiante) {
            res.render('detalle', { estudiante });
        } else {
            res.status(404).send('Estudiante no encontrado');
        }
    } catch (error) {
        res.status(500).send('Error al obtener detalles del estudiante');
    }
};

exports.eliminarEstudiante = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const estudiantes = await leerEstudiantes();
        const index = estudiantes.findIndex(est => est.id === id);

        if (index !== -1) {
            estudiantes.splice(index, 1);
            await guardarEstudiantes(estudiantes);
            res.redirect('/estudiantes');
        } else {
            res.status(404).send('Estudiante no encontrado');
        }
    } catch (error) {
        res.status(500).send('Error al eliminar el estudiante');
    }
};

exports.listarEstudiantes = async (req, res) => {
    try {
        const estudiantes = await leerEstudiantes();
        res.render('index', { estudiantes });
    } catch (error) {
        res.status(500).send('Error al listar los estudiantes');
    }
};
