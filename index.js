import express from 'express';
import router from './routes/index.js';

const app = express();

//Definir Puerto

const port = process.env.PORT || 4000;

//Habilitar PUG
app.set('view engine', 'pug');

//Definir la carpeta publica
app.use(express.static('public'));


//Agregar Router
app.use('/', router);

app.listen(port, () => { 
    console.log(`El servidor esta en el puerto ${port}`)
});
