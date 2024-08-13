class Estudiante {
    constructor(id, nombre, cedula, edad, carrera, correo) {
        this.id = id;
        this.nombre = nombre;
        this.cedula = cedula;
        this.edad = edad;
        this.carrera = carrera;
        this.correo = correo;
    }
}

const estudiantes = [
    new Estudiante(1, 'Rhonny Jaimes', '29718095', 22, 'Ingeniería', 'rhonny@uvm.com'),
    new Estudiante(2, 'María Gómez', '25634092', 21, 'Arquitectura', 'maria@uvm.com'),
    new Estudiante(3, 'Yerson Perez', '30748234', 23, 'Medicina', 'yerson@uvm.com'),
    new Estudiante(4, 'Laura Ruiz', '31567890', 24, 'Derecho', 'laura@uvm.com'),
    new Estudiante(5, 'Carlos Martínez', '32234567', 20, 'Psicología', 'carlos@uvm.com'),
    new Estudiante(6, 'Ana Morales', '32987654', 22, 'Economía', 'ana@uvm.com'),
    new Estudiante(7, 'Javier López', '33678901', 25, 'Literatura', 'javier@uvm.com'),
    new Estudiante(8, 'Sofía Castro', '34567890', 21, 'Biología', 'sofia@uvm.com')
];

module.exports = estudiantes;
