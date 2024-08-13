const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const estudiantesRoutes = require('./routes/estudiantesroutes');

// Crear una instancia de Express
const app = express();

// Configuración del puerto
const PORT = process.env.PORT || 3000;

// Middleware para analizar el cuerpo de las solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurar method-override para permitir métodos PUT y DELETE en formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method')); // Para manejar PUT y DELETE desde formularios HTML


// Configuración de la carpeta de vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Rutas para estudiantes
app.use('/estudiantes', estudiantesRoutes);

// Ruta principal
app.get('/', (req, res) => {
  const estudiantes = require('./data/estudiantes'); // Cargar los estudiantes aquí
  res.render('index', { estudiantes });
});
app.use(express.static(path.join(__dirname, 'public')));

// Iniciar el servidor// Middleware para analizar JSON y urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/estudiantes', estudiantesRoutes);
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
