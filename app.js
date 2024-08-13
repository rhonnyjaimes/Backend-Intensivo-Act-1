const express = require('express');
const path = require('path');
const estudiantesRoutes = require('./routes/estudiantesroutes');

// Crear una instancia de Express
const app = express();

// Configuración del puerto
const PORT = process.env.PORT || 3000;

// Middleware para analizar el cuerpo de las solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de la carpeta de vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/estudiantes', estudiantesRoutes);

app.get('/', (req, res) => {
  const estudiantes = require('./data/estudiantes'); // Cargar los estudiantes aquí
  res.render('index', { estudiantes });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
