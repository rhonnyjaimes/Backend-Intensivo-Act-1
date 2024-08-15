const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const estudiantesRoutes = require('./routes/estudiantesroutes');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method')); 

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/estudiantes', estudiantesRoutes);

app.get('/', (req, res) => {
  const estudiantes = require('./data/estudiantes'); 
  res.render('index', { estudiantes });
});
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/estudiantes', estudiantesRoutes);
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
